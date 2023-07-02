import {Column, DataType, HasMany, HasOne, Model, Table} from 'sequelize-typescript';
import {DataTypes, UUIDV4} from 'sequelize';
import {ApiProperty} from '@nestjs/swagger';
import {Shop} from "../shop/shop.model";

interface PostCreationAttrs {
  title: string;
  description: string;
  type: string;
  shopUin: string;
  endDate: string;
  url: string;
  code?: string;
  category: string;
  recomended?: boolean;
}

@Table({
  tableName: 'post',
  timestamps: false,
})
export class PostModel extends Model<PostModel, PostCreationAttrs> {
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
    description: 'Идентификатор поста',
  })
  @Column({type: DataTypes.STRING, defaultValue: UUIDV4, allowNull: false})
  uin: string;

  @ApiProperty({
    example: 'Скидки до 40% на зеркала Intco!',
    description: 'Название поста',
  })
  @Column({type: DataTypes.STRING})
  title: string;

  @ApiProperty({
    example: 'Скидки до 40% на зеркала Intco!',
    description: 'Описание поста',
  })
  @Column({type: DataTypes.STRING})
  description: string;

  @ApiProperty({
    example: 'sale',
    description: 'Тип скидки'
  })
  @Column({type: DataTypes.STRING})
  type: string;

  @ApiProperty({
    example: '1d67f95a-1115-4b04-bddd-0f105c03af00',
    description: 'Идентификатор магазина',
  })
  @Column({type: DataTypes.STRING})
  shopUin: string;

  @ApiProperty({
    example: '2023-02-24',
    description: 'Дата окончания промокода'
  })
  @Column({type: DataTypes.DATEONLY})
  endDate: string;

  @ApiProperty({
    example: 'https://go.redav.online/8f57f2a419ad4400',
    description: 'Ссылка на промокод',
  })
  @Column({type: DataTypes.STRING})
  url: string;

  @ApiProperty({
    example: 'МИНУС10',
    description: 'Промокод',
  })
  @Column({type: DataTypes.STRING})
  code: string;

  @ApiProperty({
    example: '--DEPRECATED--',
    description: '--DEPRECATED--',
  })
  @Column({type: DataTypes.STRING})
  query: string;

  @ApiProperty({
    example: 12,
    description: 'Лайки',
  })
  @Column({type: DataTypes.INTEGER})
  rating: number;

  @ApiProperty({
    example: 'e1161713-e725-49fb-a72b-bc089334b156',
    description: 'Идентификатор категории',
  })
  @Column({type: DataTypes.STRING})
  category: string;

  @ApiProperty({
    example: false,
    description: 'Пост продвигается',
  })
  @Column({type: DataTypes.BOOLEAN})
  recomended: boolean;

  @ApiProperty({
    example: 36,
    description: 'Счетчик просмотров',
  })
  @Column({type: DataTypes.STRING})
  counter: number;

  @HasOne(() => Shop, {sourceKey: 'shopUin', foreignKey: 'uin'})
  shop: Shop;
}
