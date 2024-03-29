import { Body, Controller, Delete, Get, Param, ParseArrayPipe, Put, UseGuards } from "@nestjs/common";
import { ApiBody, ApiResponse } from "@nestjs/swagger";
import { JwtAuthGuard } from "../../mod-auth/services/guards/jwt-auth.guard";
import { DatasourceService } from "../datasource.service";
import { Analyzy } from "../entities/analyzy.entity";
import { TypyAnalyz } from "../entities/typy-analyz";
import { ApiResponseDto } from "../models/api-response.dto";
import { AnalyzyValidationPipe } from "../pipes/analyzy-validation.pipe";

@Controller('analyza')
export class AnalyzaController {

    constructor(private datasourceService: DatasourceService) { }

    @UseGuards(JwtAuthGuard)
    @Get('typ')
    @ApiResponse({
        type: TypyAnalyz,
        isArray: true
    })
    getTypyAnalyz() {
        return this.datasourceService.getRepository(TypyAnalyz).find()
    }

    @UseGuards(JwtAuthGuard)
    @Get(':idVzorek')
    @ApiResponse({
        type: Analyzy,
        isArray: true
    })
    getAnalyzy(@Param('idVzorek') idVzorek: number) {
        return this.datasourceService.getRepository(Analyzy).find({ where: { id_vzorek: idVzorek } })
    }

    @UseGuards(JwtAuthGuard)
    @Put(':idVzorek')
    @ApiBody({
        type: Analyzy,
        isArray: true
    })
    upsertAnalyzy(
        @Param('idVzorek') idVzorek: number,
        @Body(
            new ParseArrayPipe({ items: Analyzy, whitelist: true, forbidNonWhitelisted: true, }),
            new AnalyzyValidationPipe('id_typ')) analyzy: Analyzy[]) {
        analyzy.forEach(a => a.id_vzorek = idVzorek)
        return this.datasourceService.getRepository(Analyzy).upsert(analyzy, ['id_vzorek'])
    }

    @UseGuards(JwtAuthGuard)
    @Delete()
    @ApiBody({
        type: Number,
        isArray: true
    })
    @ApiResponse({ type: ApiResponseDto })
    deleteAnalyzy(
        @Body(new ParseArrayPipe({ items: Number, whitelist: true, forbidNonWhitelisted: true })) ids: number[]
    ) {
        return this.datasourceService.manager
            .createQueryBuilder()
            .delete()
            .from(Analyzy)
            .whereInIds(ids)
            .execute()
            .then(
                (res) => {
                    const cnt = res.affected
                    if (cnt === 1) return { message: `Smazána 1 analýza.` }
                    else if ([2, 3, 4].includes(cnt)) return { message: `Smazány ${cnt} analýzy.` }
                    else return { message: `Smazáno ${cnt} analýz.` }
                }
            )
    }

}