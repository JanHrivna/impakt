import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';
import { AppDataSource } from './db/app.datasource';
import { Vzorky } from './db/entities/vzorky';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  @Render('index')
  async root() {
    const vzorky = await AppDataSource.getRepository(Vzorky).find()
    console.log('vzorkya', vzorky.map(v => v.druh))
    return { vzorky } 
  }

}
