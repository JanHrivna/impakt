import { Module } from "@nestjs/common";
import { LokaceController } from "./controllers/lokace.controller";
import { VzorekController } from "./controllers/vzorek.controller";
import { DatasourceService } from "./datasource.service";

@Module({
    imports: [],
    controllers: [VzorekController, LokaceController],
    providers: [DatasourceService],
    exports: []
})
export class DatasourceModule { }
