import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as cookieParser from 'cookie-parser';
import { AppModule } from './app/app.module';
import * as dotenv from 'dotenv'
import { AppLogger, LogLevel } from './app/shared/app-logger';

async function bootstrap() {
  dotenv.config()
  const app = await NestFactory.create(AppModule, {
    logger: new AppLogger([LogLevel.INFO, LogLevel.ERROR, LogLevel.WARN]),
    abortOnError: false
  });
  app.setGlobalPrefix('api');
  const port = 3000;

  const config = new DocumentBuilder()
    .setTitle('Impakt')
    .setDescription('Impakt API')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('swagger', app, document);

  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true
  }));

  app.use(cookieParser());

  await app.listen(port);
}

bootstrap();
