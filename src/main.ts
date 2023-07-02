import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {DocumentBuilder, SwaggerModule} from "@nestjs/swagger";
async function start() {
  const port = process.env.PORT || 4000;
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('za-halyavoi backend')
    .setDescription('Документация api')
    .setVersion("2.0.0")
    .build()

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('/docs', app, document);

  await app.listen(port, () => console.log(`Server started on port ${port}`));
}

start();
