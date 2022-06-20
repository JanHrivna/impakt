import { ApiProperty, ApiPropertyOptions } from "@nestjs/swagger";
import { IsArray, IsNotEmpty, IsOptional, ValidateNested } from "class-validator";
import { Entity } from "typeorm";
import { Analyzy } from "../entities/analyzy.entity";
import { Vzorky } from "../entities/vzorky.entity";
import { Type } from 'class-transformer';

export const AnalyzyOptions: ApiPropertyOptions = {
    isArray: true,
    type: Analyzy
}

@Entity()
export class VzorekDto {

    @ApiProperty()
    @ValidateNested()
    @Type(() => Vzorky)
    @IsNotEmpty()
    vzorek: Vzorky

    @ApiProperty(AnalyzyOptions)
    @ValidateNested({ each: true })
    @Type(() => Analyzy)
    @IsOptional()
    @IsArray()
    analyzy: Analyzy[]

}

