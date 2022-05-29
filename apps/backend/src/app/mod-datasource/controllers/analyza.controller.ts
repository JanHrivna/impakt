import { Body, Controller, Get, Param, ParseArrayPipe, Put } from "@nestjs/common";
import { ApiBody, ApiResponse } from "@nestjs/swagger";
import { DatasourceService } from "../datasource.service";
import { Analyzy } from "../entities/analyzy";
import { TypyAnalyz } from "../entities/typy-analyz";

@Controller('analyza')
export class AnalyzaController {

    constructor(private datasourceService: DatasourceService) { }

    @Get('typ')
    @ApiResponse({
        type: TypyAnalyz,
        isArray: true
    })
    getTypyAnalyz() {
        return this.datasourceService.getRepository(TypyAnalyz).find()
    }

    @Get(':idVzorek')
    @ApiResponse({
        type: Analyzy,
        isArray: true
    })
    getAnalyzy(@Param('idVzorek') idVzorek: number) {
        return this.datasourceService.getRepository(Analyzy).find({ where: { id_vzorek: idVzorek } })
    }

    @Put(':idVzorek')
    @ApiBody({
        type: Analyzy,
        isArray: true
    })
    upsertAnalyzy(
        @Param('idVzorek') idVzorek: number,
        @Body(new ParseArrayPipe({ items: Analyzy, whitelist: true, forbidNonWhitelisted: true })) analyzy: Analyzy[]) {
        analyzy.forEach(a => a.id_vzorek = idVzorek)
        return this.datasourceService.getRepository(Analyzy).upsert(analyzy, ['id_typ'])
    }

}