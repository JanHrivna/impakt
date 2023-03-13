import { Module } from '@nestjs/common';
import { AuthModule } from './mod-auth/auth.module';
import { DatasourceModule } from './mod-datasource/datasource.module';

@Module({
  imports: [DatasourceModule, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
