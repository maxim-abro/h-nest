import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from "@nestjs/sequelize";
import {ShopModule} from "./shop/shop.module";
import {PostModule} from "./post/post.module";
import {Shop} from "./shop/shop.model";
import {PostModel} from "./post/post.model";
import { CategoryModule } from './category/category.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: process.env.MYSQL_HOST,
      port: 3306,
      username: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD,
      database: process.env.MYSQL_DATABASE,
      models: [Shop, PostModel],
      autoLoadModels: true,
    }),
    ShopModule,
    PostModule,
    CategoryModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
