import { ApiProperty } from "@nestjs/swagger";

export class AddPostDto {
  @ApiProperty({
    example: 'Скидки до 40% на зеркала Intco!',
    description: 'Название поста',
  })
  title: string;

  @ApiProperty({
    example: 'Скидки до 40% на зеркала Intco!',
    description: 'Описание поста',
  })
  description: string;

  @ApiProperty({
    example: 'sale',
    description: 'Тип скидки'
  })
  type: string;

  @ApiProperty({
    example: '1d67f95a-1115-4b04-bddd-0f105c03af00',
    description: 'Идентификатор магазина',
  })
  shopUin: string;

  @ApiProperty({
    example: '2023-02-24',
    description: 'Дата окончания промокода'
  })
  endDate: string;

  @ApiProperty({
    example: 'https://go.redav.online/8f57f2a419ad4400',
    description: 'Ссылка на промокод',
  })
  url: string;

  @ApiProperty({
    example: 'МИНУС10',
    description: 'Промокод',
  })
  code: string;

  @ApiProperty({
    example: 'e1161713-e725-49fb-a72b-bc089334b156',
    description: 'Идентификатор категории',
  })
  category: string;

  @ApiProperty({
    example: false,
    description: 'Пост продвигается',
  })
  recomended: boolean;
}
