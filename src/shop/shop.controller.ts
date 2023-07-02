import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ShopService } from './shop.service';
import { Shop } from './shop.model';
import { AddShopDto } from './add-shop.dto';
import {Category} from "../category/category.model";

@ApiTags('Магазины')
@Controller('shop')
export class ShopController {
  constructor(private shopService: ShopService) {}

  @ApiOperation({
    summary: 'Создание сайта'
  })
  @ApiResponse({
    status: 200,
    type: Shop,
  })
  @Post('/')
  create(@Body() shopDto: AddShopDto):Promise<Shop> {
    return this.shopService.addShop(shopDto)
  }

  @ApiOperation({
    summary: 'Получение всех магазинов',
  })
  @ApiResponse({
    status: 200,
    type: [Shop],
  })
  @Get('/')
  getAll():Promise<Shop[]> {
    return this.shopService.getAllShops();
  }

  @ApiOperation({
    summary: 'Получение Магазина по uin',
  })
  @ApiResponse({
    status: 200,
    type: Shop,
  })
  @Get('/:uin')
  getByUin(@Param('uin') uin: string):Promise<{shop:Shop, category:any}> {
    return this.shopService.getShopByUin(uin);
  }

  @ApiOperation({
    summary: 'Получение магазинов по UINу категории'
  })
  @ApiResponse({
    status: 200,
    type: Shop,
  })
  @Get('/category/:uin')
  getByCategory(@Param('uin') uin:string):Promise<{shops:Shop[], category:Category}> {
    return this.shopService.getShopByCategory(uin);
  }

  @ApiOperation({
    summary: 'Получение магазинов по первой букве в названии'
  })
  @ApiResponse({
    status: 200,
    type: Shop,
  })
  @Get('/symbol/:symbol')
  getByAlphabet(@Param('symbol') symbol: string):Promise<Shop[]> {
    return this.shopService.getShopByAlphabet(symbol);
  }
}
