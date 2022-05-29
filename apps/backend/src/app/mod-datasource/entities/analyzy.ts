import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsOptional } from "class-validator";
import { BaseEntity, Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Analyzy extends BaseEntity {

    @PrimaryColumn()
    id_vzorek: number

    @PrimaryColumn()
    @ApiProperty()
    @IsNotEmpty()
    id_typ: number

    @Column()
    @ApiProperty()
    @IsNotEmpty()
    den: string

    @Column()
    @ApiProperty()
    @IsNotEmpty()
    vysledek: string

    @Column()
    @ApiProperty()
    @IsNotEmpty()
    provedl: string

}