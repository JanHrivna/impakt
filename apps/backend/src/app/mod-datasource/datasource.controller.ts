import { Controller, Get } from "@nestjs/common";
import { ApiResponse } from "@nestjs/swagger";
import { DatasourceService } from "./datasource.service";
import { Vzorky } from "./entities/vzorky";

@Controller()
export class DatasourceController {

    constructor(private datasourceService: DatasourceService) { }

    @Get('vzorky')
    @ApiResponse({
        type: Vzorky,
        isArray: true
    })
    getVzorky() {
        return this.datasourceService.getRepository(Vzorky).find()
    }

}
