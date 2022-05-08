import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { AppDataSource } from './db/app.datasource';
import { Vzorky } from './db/entities/vzorky';
import { MyEnt } from '@impakt/model';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  async root() {
    let x: MyEnt
    const vzorky = await AppDataSource.getRepository(Vzorky).find()
    console.log('vzorkya', vzorky.map(v => v.druh))
    return { vzorky }
  }

}
