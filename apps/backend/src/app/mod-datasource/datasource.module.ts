import { Module } from "@nestjs/common";
import { AnalyzaController } from "./controllers/analyza.controller";
import { LokaceController } from "./controllers/lokace.controller";
import { VzorekController } from "./controllers/vzorek.controller";
import { DatasourceService } from "./datasource.service";
import { AppUsersService } from "./services/app-users.service";

@Module({
    imports: [],
    controllers: [VzorekController, LokaceController, AnalyzaController],
    providers: [DatasourceService, AppUsersService],
    exports: [AppUsersService]
})
export class DatasourceModule { }
