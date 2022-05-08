import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { AppDataSource } from './db/app.datasource';
import { Vzorky } from './db/entities/vzorky';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getVzorky() {
    return AppDataSource.getRepository(Vzorky).find()
  }

}
