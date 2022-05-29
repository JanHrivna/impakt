import { Body, Controller, Delete, Get, HttpCode, Param, Post } from "@nestjs/common";
import { ApiResponse } from "@nestjs/swagger";
import { DatasourceService } from "../datasource.service";
import { Vzorky } from "../entities/vzorky.entity";
import { ApiResponseDto } from "../models/api-response.dto";

@Controller('vzorek')
export class VzorekController {

    constructor(private datasourceService: DatasourceService) { }

    @Get()
    @ApiResponse({
        type: Vzorky,
        isArray: true
    })
    getVzorky() {
        return this.datasourceService.getRepository(Vzorky).find()
    }

    @Post()
    @HttpCode(200)
    @ApiResponse({
        type: Vzorky
    })
    upsertVzorek(@Body() vzorek: Vzorky): Promise<Vzorky> {
        return this.datasourceService.getRepository(Vzorky).upsert(vzorek, ['id'])
            .then(
                (res) => ({
                    ...vzorek,
                    id: res.identifiers[0].id
                }) as Vzorky
            )
    }

    @Delete(':id')
    @ApiResponse({ type: ApiResponseDto })
    deleteVzorek(@Param('id') id: number) {
        return this.datasourceService.getRepository(Vzorky).delete(id)
            .then(
                (defaultObj) => {
                    if (defaultObj.raw > 0) {
                        return {
                            message: "Vzorek smazán."
                        }
                    }
                    return {
                        message: "Vzorek nenalezen."
                    }
                }
            )
    }

}