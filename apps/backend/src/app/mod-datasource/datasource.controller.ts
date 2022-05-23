import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";
import { ApiResponse } from "@nestjs/swagger";
import { DatasourceService } from "./datasource.service";
import { MistoUlozeni } from "./entities/misto-ulozeni";
import { Vzorky } from "./entities/vzorky.entity";
import { ApiResponseDto } from "./models/api-response.dto";

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
    createVzorek(@Body() vzorek: Vzorky) {
        return this.datasourceService.getRepository(Vzorky).save(vzorek)
    }

    @Delete('vzorek/:id')
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
