import { Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/sequelize";
import { Category } from "./category.model";
import { AddCategoryDto } from "./add-category.dto";

@Injectable()
export class CategoryService {
  constructor(@InjectModel(Category) private categoryRepository: typeof Category) {}

  async addCategory(dto: AddCategoryDto):Promise<Category> {
    const category:Category = await this.categoryRepository.create(dto);

    return category;
  }

  async getAllCategories():Promise<Category[]> {
    const categories:Category[] = await this.categoryRepository.findAll();

    return categories;
  }
}
