import { Body, Controller, Delete, Get, HttpCode, Param, Post, Res } from "@nestjs/common";
import { ApiResponse } from "@nestjs/swagger";
import { DatasourceService } from "../datasource.service";
import { Analyzy } from "../entities/analyzy.entity";
import { Vzorky } from "../entities/vzorky.entity";
import { ApiResponseDto } from "../models/api-response.dto";
import { VzorekDto } from "../models/vzorek.dto";
import { AnalyzyValidationPipe } from "../pipes/analyzy-validation.pipe";

@Controller('vzorek')
export class VzorekController {

    constructor(private datasourceService: DatasourceService) { }

    @Get()
    @ApiResponse({ type: VzorekDto, isArray: true })
    getVzorky(): Promise<VzorekDto[]> {
        return this.datasourceService.createQueryBuilder(Vzorky, 'vzorky')
            .leftJoinAndMapMany('vzorky.analyzy', Analyzy, 'analyzy', `analyzy.id_vzorek = vzorky.id`)
            .getMany()
            .then(
                (res: any) => res.map(r => {
                    const analyzy = r.analyzy
                    const vzorek = { ...r }
                    delete vzorek.analyzy
                    return { vzorek, analyzy }
                })
            )
    }

    @Post()
    @HttpCode(200)
    @ApiResponse({ type: ApiResponseDto })
    async upsertVzorek(
        @Body(new AnalyzyValidationPipe('id_typ')) dto: VzorekDto
    ) {
        const queryRunner = this.datasourceService.createQueryRunner()
        await queryRunner.connect()
        await queryRunner.startTransaction()

        try {
            const newVzorek = await queryRunner.manager.upsert(Vzorky, dto.vzorek, ['id'])
                .then(
                    (res) => ({
                        ...dto.vzorek,
                        id: res.identifiers[0].id
                    }) as Vzorky
                )

            if (dto.analyzy) {
                dto.analyzy.forEach(a => a.id_vzorek = newVzorek.id)
                await queryRunner.manager.upsert(Analyzy, dto.analyzy, ['id_vzorek'])
            }

            await queryRunner.commitTransaction()
        } catch (err) {
            await queryRunner.rollbackTransaction()
            throw err
        } finally {
            await queryRunner.release()
        }

        return { message: "Vzorek založen/editován." }
    }


    @Delete(':id')
    @ApiResponse({ type: ApiResponseDto })
    deleteVzorek(@Param('id') id: number) {
        return this.datasourceService.getRepository(Vzorky).delete(id)
            .then(
                (res) => {
                    if (res.affected > 0) {
                        return { message: "Vzorek smazán." }
                    }
                    return { message: "Vzorek nenalezen." }
                }
            )
    }

}