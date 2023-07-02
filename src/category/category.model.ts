import {Column, DataType, HasMany, Model, Table} from 'sequelize-typescript';
import {DataTypes, UUIDV4} from 'sequelize';
import {ApiProperty} from '@nestjs/swagger';

interface CategoryCreationAttrs {
  title: string;
  description: string;
  icon: string;
}

@Table({
  tableName: 'category',
  timestamps: false,
})
export class Category extends Model<Category, CategoryCreationAttrs> {

  @ApiProperty({
    example: 34,
    description: 'Уникальный идентификатор'
  })
  @Column({type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true})
  id: number;

  @ApiProperty({
    example: '1b6c6ccc-9c57-4009-9e8a-a52ca1dc425e',
    description: 'Идентификатор категории',
  })
  @Column({type: DataTypes.STRING})
  uin: string;

  @ApiProperty({
    example: 'Зоотовары',
    description: 'Название категории'
  })
  @Column({type: DataTypes.STRING})
  title: string;

  @ApiProperty({
    example: 'Необходимые лакомства, лекарства, принадлежности для ухода и содержания своих любимых питомцев вы можете найти здесь, да ещё и по сладким ценам.',
    description: 'Описание категории',
  })
  @Column({type: DataTypes.STRING})
  description: string;

  @ApiProperty({
    example: 'dog',
    description: 'Название иконки',
  })
  @Column({type: DataTypes.STRING})
  icon: string;

  @ApiProperty({
    example: 55,
    description: 'Счетчик категории'
  })
  @Column({type: DataTypes.INTEGER})
  counter: number;

  @ApiProperty({
    example: 'zootovary',
    description: 'Латинское название категории'
  })
  @Column({type: DataTypes.STRING})
  lat_title: string;
}
