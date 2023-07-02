import {Column, DataType, HasMany, BelongsTo, Model, Table} from 'sequelize-typescript';
import {DataTypes, UUIDV4} from 'sequelize';
import {ApiProperty} from '@nestjs/swagger';
import {PostModel} from "../post/post.model";

interface ShopCreationAttrs {
  title: string;
  description: string;
  image: string;
  contacts: string;
  url: string;
  tags: string;
  categories: string;
}

@Table({
  tableName: 'shop',
  timestamps: false,
})
export class Shop extends Model<Shop, ShopCreationAttrs> {
  @ApiProperty({example: 1, description: 'Уникальный идентификатор'})
  @Column({
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    unique: true,
  })
  id: number;
  @ApiProperty({
    example: '9f218d93-ed50-4c67-8cfb-b0eaa4204f7e',
    description: 'Идентификатор магазина',
  })
  @Column({type: DataTypes.STRING, defaultValue: UUIDV4, allowNull: false})
  uin: string;

  @ApiProperty({example: 'Лента', description: 'Название магазина'})
  @Column({type: DataTypes.STRING})
  title: string;

  @ApiProperty({
    example:
      'Крупнейшая сеть гипермаркетов России предлагает клиентам совершать покупки в онлайн-формате.',
    description: 'Описание магазина',
  })
  @Column({type: DataTypes.STRING})
  description: string;

  @ApiProperty({example: 'lenta.jpeg', description: 'Название картинки'})
  @Column({type: DataTypes.STRING})
  image: string;

  @ApiProperty({
    example: '197374, РОССИЯ, Санкт-Петербург, ул. Савушкина, д. 112, литера Б',
    description: 'Контакт магазина',
  })
  @Column({type: DataTypes.STRING})
  contacts: string;

  @ApiProperty({
    example: 'https://lenta.com/',
    description: 'Ссылка на магазин',
  })
  @Column({type: DataTypes.STRING})
  url: string;

  @ApiProperty({
    example: 'Самовывоз, Курьерская, Пункты выдачи заказов',
    description: 'Виды доставки',
  })
  @Column({type: DataTypes.STRING})
  dostavka: string;

  @ApiProperty({
    example:
      'пицца, роллы, суши, доставка, еда, салат, салаты, хатимаки, хати маки, хэтимаки, хетимаки, hatimaki, hati maki, makki',
    description: 'Теги (для поиска на сайте)',
  })
  @Column({type: DataTypes.STRING})
  tags: string;

  @ApiProperty({
    example: '9f218d93-ed50-4c67-8cfb-b0eaa4204f7e',
    description: 'Идентификатор категории магазина',
  })
  @Column({type: DataTypes.STRING})
  categories: string;

  @ApiProperty({
    example: 36,
    description: 'Счётчик переходов на страницу магазина',
  })
  @Column({type: DataTypes.INTEGER})
  counter: number;

  @ApiProperty({
    example: "lenta",
    description: 'Латинское название сайта'
  })
  @Column({type: DataTypes.STRING})
  lat_title: string;

  @BelongsTo(() => PostModel, {
    sourceKey: 'shopUin',
    foreignKey: 'uin'
  })
  post: PostModel;
}
