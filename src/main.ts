import { NestFactory } from '@nestjs/core';
import { AppV1Module } from './v1/appv1.module';

async function bootstrap() {
  const app = await NestFactory.create(AppV1Module);
  await app.listen(3000);
}
bootstrap();
