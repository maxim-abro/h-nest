import {Body, Controller, Get, Param, Post, Query} from "@nestjs/common";
import {ApiOperation, ApiResponse, ApiTags} from '@nestjs/swagger';
import {PostService} from "./post.service";
import {PostModel} from './post.model';
import {AddPostDto} from "./add-post.dto";
import {RecommendedDto} from "./recommended.dto"

@ApiTags('Посты(купоны)')
@Controller('post')
export class PostController {
  constructor(private postService: PostService) {}



  @ApiOperation({
    summary: 'Создание поста'
  })
  @ApiResponse({
    status: 200,
    type: PostModel,
  })
  @Post('/')
  create(@Body() postDto: AddPostDto): Promise<PostModel> {
    return this.postService.addPost(postDto)
  }

  @ApiOperation({
    summary: 'Получить все посты'
  })
  @ApiResponse({
    status: 200,
    type: [PostModel],
  })
  @Get('/')
  getAll(@Query() query): Promise<{ rows: PostModel[], count: number }> {
    return this.postService.getAllPosts(query.page, query.shop)
  }

  @ApiOperation({
    summary: 'Получить один пост'
  })
  @ApiResponse({
    status: 200,
    type: PostModel,
  })
  @Get('/:uin')
  getOne(@Param('uin') uin: string): Promise<PostModel> {
    return this.postService.getPostByUin(uin)
  }

  @ApiOperation({
    summary: 'Лайк поста'
  })
  @ApiResponse({
    status: 200,
    type: PostModel,
  })
  @Get('/like/:uin')
  like(@Param('uin') uin: string):Promise<object> {
    return this.postService.like(uin);
  }

  @ApiOperation({
    summary: 'Рекомендуемые посты'
  })
  @ApiResponse({
    status: 200,
    type: PostModel,
  })
  @Post('/recommended')
  recommended(@Body() recommendedDto: RecommendedDto):Promise<PostModel[]> {
    return this.postService.getRecommendedPosts(recommendedDto.category, recommendedDto.shop);
  }
}
