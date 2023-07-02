import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import {CategoryService} from "./category.service";
import {AddCategoryDto} from "./add-category.dto";
import {Category} from "./category.model";

@ApiTags('Категории')
@Controller('category')
export class CategoryController {
  constructor(private categoryService: CategoryService) {}

  @ApiOperation({
    summary: 'Создание категории'
  })
  @ApiResponse({
    status: 200,
    type: Category,

  })
  @Post('/')
  create(@Body() categoryDto: AddCategoryDto):Promise<Category> {
    return this.categoryService.addCategory(categoryDto);
  }

  @ApiOperation({
    summary: 'Получение всех категорий'
  })
  @ApiResponse({
    status: 200,
    type: [Category],
  })
  @Get('/')
  getAll():Promise<Category[]> {
    return this.categoryService.getAllCategories();
  }
}
