import { Module } from '@nestjs/common';
import { PostService } from "./post.service";
import { SequelizeModule } from "@nestjs/sequelize";
import { PostModel } from "./post.model";
import { PostController } from "./post.controller";


@Module({
  controllers: [PostController],
  providers: [PostService],
  imports: [SequelizeModule.forFeature([PostModel])],
})
export class PostModule {}
