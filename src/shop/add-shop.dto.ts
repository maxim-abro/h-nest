import { ApiProperty } from "@nestjs/swagger";

export class AddShopDto {
  @ApiProperty({ example: 'Лента', description: 'Название магазина' })
  title: string;

  @ApiProperty({
    example:
      'Крупнейшая сеть гипермаркетов России предлагает клиентам совершать покупки в онлайн-формате.',
    description: 'Описание магазина',
  })
  description: string;

  @ApiProperty({ example: 'lenta.jpeg', description: 'Название картинки' })
  image: string;

  @ApiProperty({
    example: '197374, РОССИЯ, Санкт-Петербург, ул. Савушкина, д. 112, литера Б',
    description: 'Контакт магазина',
  })
  contacts: string;

  @ApiProperty({
    example: 'https://lenta.com/',
    description: 'Ссылка на магазин',
  })
  url: string;

  @ApiProperty({
    example: 'Самовывоз, Курьерская, Пункты выдачи заказов',
    description: 'Виды доставки',
  })
  dostavka: string;

  @ApiProperty({
    example:
      'пицца, роллы, суши, доставка, еда, салат, салаты, хатимаки, хати маки, хэтимаки, хетимаки, hatimaki, hati maki, makki',
    description: 'Теги (для поиска на сайте)',
  })
  tags: string;

  @ApiProperty({
    example: '9f218d93-ed50-4c67-8cfb-b0eaa4204f7e',
    description: 'Идентификатор категории магазина',
  })
  categories: string;
}
