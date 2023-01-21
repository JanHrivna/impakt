import { Module } from "@nestjs/common";
import { AnalyzaController } from "./controllers/analyza.controller";
import { LokaceController } from "./controllers/lokace.controller";
import { VzorekController } from "./controllers/vzorek.controller";
import { DatasourceService } from "./datasource.service";

@Module({
    imports: [],
    controllers: [VzorekController, LokaceController, AnalyzaController],
    providers: [DatasourceService],
    exports: []
})
export class DatasourceModule { }
