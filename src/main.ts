import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser'
import * as mustache from 'mustache-express'
import { NestExpressApplication } from '@nestjs/platform-express';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(cookieParser('Rahasia'));


  const configService = app.get(ConfigService)
  await app.listen(configService.get('PORT') || 3000);
}
bootstrap();
