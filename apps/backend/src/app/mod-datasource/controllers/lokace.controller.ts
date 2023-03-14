import { Controller, Get, UseGuards } from "@nestjs/common";
import { ApiResponse } from "@nestjs/swagger";
import { JwtAuthGuard } from "../../mod-auth/services/guards/jwt-auth.guard";
import { DatasourceService } from "../datasource.service";
import { MistoUlozeni } from "../entities/misto-ulozeni";

@Controller('lokace')
export class LokaceController {

    constructor(private datasourceService: DatasourceService) { }

    @UseGuards(JwtAuthGuard)
    @Get()
    @ApiResponse({
        type: MistoUlozeni,
        isArray: true
    })
    getLokace() {
        return this.datasourceService.getRepository(MistoUlozeni).find()
    }


}