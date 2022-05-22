import { Body, Controller, Get, Post } from "@nestjs/common";
import { ApiResponse } from "@nestjs/swagger";
import { DatasourceService } from "./datasource.service";
import { MistoUlozeni } from "./entities/misto-ulozeni";
import { Vzorky } from "./entities/vzorky.entity";

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

    @Get('misto-ulozeni')
    @ApiResponse({
        type: MistoUlozeni,
        isArray: true
    })
    getMistoUlozeni() {
        return this.datasourceService.getRepository(MistoUlozeni).find()
    }

    @Post('vzorek')
    createVzorek(
        @Body() vzorek: Vzorky
    ) {
        return this.datasourceService.getRepository(Vzorky).save(vzorek)
    }

}
