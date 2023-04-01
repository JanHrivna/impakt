import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Analyzy extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    id_vzorek: number

    @Column()
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