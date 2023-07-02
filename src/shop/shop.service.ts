import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Shop } from './shop.model';
import { AddShopDto } from './add-shop.dto';
import {PostModel} from "../post/post.model";
import {Category} from "../category/category.model";
import {Op} from 'sequelize';

@Injectable()
export class ShopService {
  constructor(@InjectModel(Shop) private shopRepository: typeof Shop,
              @InjectModel(Category) private categoryRepository: typeof Category) {}

  async addShop(dto: AddShopDto):Promise<Shop> {
    const shop:Shop = await this.shopRepository.create(dto);

    return shop;
  }

  async getAllShops():Promise<Shop[]> {
    const shops:Shop[] = await this.shopRepository.findAll({
      order: [
        ['title', 'ASC']
      ]
    });

    return shops;
  }

  async getShopByUin(uin: string):Promise<{shop:Shop, category:Category}> {
    const shop:Shop = await this.shopRepository.findOne({
      where: {
        uin
      },
      attributes: ['title', 'uin', 'lat_title']
    });
    let category:any;
    if (shop) {
      category = await this.categoryRepository.findOne({
        where: {
          uin: shop.categories.split(',')[0]
        },
        attributes: ['title', 'uin', 'lat_title']
      });
    }

    await shop.update({
      counter: shop.counter + 1
    });

    return {shop, category};
  }

  async getShopByCategory(uin) {
    const shops:Shop[] = await this.shopRepository.findAll({
      where: {
        categories: {
          [Op.like]: `%${uin}`
        }
      }
    });
    const category:Category = await this.categoryRepository.findOne({
      where: {
        uin
      }
    });

    await category.update({
      counter: category.counter + 1
    });

    return {shops,category}
  }

  async getShopByAlphabet(symbol) {
    let shops:Shop[];

    if (/^[A-Za-zА-Яа-яЁё0-9]/.test(symbol)) {
      shops = await this.shopRepository.findAll({
        where: {
          title: {
            [Op.like]: `${symbol}%`
          }
        }
      });
    } else if (/^[0-9]/.test(symbol)) {
      shops = await this.shopRepository.findAll({
        where: {
          title: {
            [Op.regexp]: '^[0-9]'
          }
        }
      });
    } else {
      shops = await this.shopRepository.findAll({
        where: {
          title: {
            [Op.regexp]: '^[^A-Za-z0-9]'
          }
        }
      });
    }
    return shops;
  }
}
