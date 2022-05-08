import { Controller, Get } from "@nestjs/common";
import { DatasourceService } from "./datasource.service";
import { Vzorky } from "./entities/vzorky";

@Controller()
export class DatasourceController {

    constructor(private datasourceService: DatasourceService) { }

    @Get()
    getVzorky() {
        return this.datasourceService.getRepository(Vzorky).find()
    }

}
