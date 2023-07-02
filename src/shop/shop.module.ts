import { Module } from '@nestjs/common';
import { ShopController } from './shop.controller';
import { ShopService } from './shop.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Shop } from './shop.model';
import {Category} from "../category/category.model";
import {PostModule} from "../post/post.module";

@Module({
  controllers: [ShopController],
  providers: [ShopService],
  imports: [SequelizeModule.forFeature([Shop, Category])],
})

export class ShopModule {}
