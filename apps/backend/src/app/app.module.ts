import { Module } from '@nestjs/common';
import { DatasourceModule } from './mod-datasource/datasource.module';

@Module({
  imports: [DatasourceModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
