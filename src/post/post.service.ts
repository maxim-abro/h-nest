import {Injectable} from '@nestjs/common';
import {InjectModel} from '@nestjs/sequelize';
import {PostModel} from "./post.model";
import {AddPostDto} from "./add-post.dto";
import {Shop} from "../shop/shop.model";
import {Op} from 'sequelize'

@Injectable()
export class PostService {
  constructor(@InjectModel(PostModel) private postRepository: typeof PostModel) {
  }

  async addPost(dto: AddPostDto): Promise<PostModel> {
    const post: PostModel = await this.postRepository.create(dto);

    return post;
  }

  async getAllPosts(page: number, shop): Promise<{ rows: PostModel[], count: number }> {
    const calcPage = (limit, page): number => {
      if (page == 1) {
        return 0
      } else {
        return limit * (page - 1)
      }
    }
    const limit: number = 15;
    let posts;

    if (shop) {
      posts = await this.postRepository.findAndCountAll({
        where: {
          shopUin: shop,
        },
        include: [
          {
            model: Shop,
            as: 'shop',
            attributes: ['image', 'title', 'url', 'uin']
          }
        ],
        order: [
          ['recomended', 'DESC'],
          ['counter', 'DESC'],
        ],
        offset: calcPage(limit, page || 1),
        limit
      })
    } else {
      posts = await this.postRepository.findAndCountAll({
        include: [
          {
            model: Shop,
            as: 'shop',
            attributes: ['image', 'title', 'url', 'uin']
          }
        ],
        order: [
          ['recomended', 'DESC'],
          ['counter', 'DESC'],
        ],
        offset: calcPage(limit, page || 1),
        limit
      })
    }


    return posts;
  }

  async getPostByUin(uin: string): Promise<PostModel> {
    const post: PostModel = await this.postRepository.findOne({
      include: [
        {
          model: Shop,
          as: 'shop',
          attributes: ['image', 'title', 'url', 'uin']
        }
      ],
      where: {
        uin
      }
    });

    await post.update({
      counter: post.counter + 1
    })

    return post;
  }

  async like(uin): Promise<object> {
    const post: PostModel = await this.postRepository.findOne({
      where: {
        uin
      }
    });
    await post.update({
      rating: post.rating + 1
    });

    return {message: 'ok'}
  }

  async getRecommendedPosts(categories:string, shop: string):Promise<PostModel[]> {
    const catsArray: string[] = categories.split(',');
    const posts:PostModel[] = await this.postRepository.findAll({
      where: {
        [Op.and]: [
          {
            category: {
              [Op.like]: `%${catsArray[0]}`
            }
          },
          {
            shopUin: {
              [Op.ne]: shop
            }
          }
        ]
      },
      include: [
        {
          model: Shop,
          as: 'shop',
          attributes: ['image', 'title', 'url', 'uin']
        }
      ],
      order: [
        ['counter', 'DESC']
      ],
      limit: 10,
    });

    return posts;
  }
}
