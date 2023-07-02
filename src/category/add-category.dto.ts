import { ApiProperty } from "@nestjs/swagger";

export class AddCategoryDto {
  @ApiProperty({
    example: 'Зоотовары',
    description: 'Название категории',
  })
  title: string;
  @ApiProperty({
    example: 'Необходимые лакомства, лекарства, принадлежности для ухода и содержания своих любимых питомцев вы можете найти здесь, да ещё и по сладким ценам.',
    description: 'Описание категории',
  })
  description: string;
  @ApiProperty({
    example: 'dog',
    description: 'Название иконки',
  })
  icon: string;
}
