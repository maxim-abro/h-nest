import { ApiProperty } from "@nestjs/swagger";

export class RecommendedDto {
  @ApiProperty({
    example: '1b6c6ccc-9c57-4009-9e8a-a52ca1dc425e',
    description: 'uin категории',
  })
  category: string;

  @ApiProperty({
    example: '00ac8c87-327b-4735-9bd0-9a4bb1121cb0',
    description: 'uin магазина',
  })
  shop: string;
}
