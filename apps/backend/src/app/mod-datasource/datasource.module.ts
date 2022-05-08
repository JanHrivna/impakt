import { Module } from "@nestjs/common";
import { DatasourceController } from "./datasource.controller";
import { DatasourceService } from "./datasource.service";

@Module({
    imports: [],
    controllers: [DatasourceController],
    providers: [DatasourceService],
    exports: []
})
export class DatasourceModule { }
