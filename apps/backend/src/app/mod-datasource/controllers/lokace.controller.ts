import { Controller, Get } from "@nestjs/common";
import { ApiResponse } from "@nestjs/swagger";
import { DatasourceService } from "../datasource.service";
import { MistoUlozeni } from "../entities/misto-ulozeni";

@Controller('lokace')
export class LokaceController {

    constructor(private datasourceService: DatasourceService) { }

    @Get()
    @ApiResponse({
        type: MistoUlozeni,
        isArray: true
    })
    getLokace() {
        return this.datasourceService.getRepository(MistoUlozeni).find()
    }


}