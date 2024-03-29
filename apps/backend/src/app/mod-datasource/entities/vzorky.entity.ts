import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsOptional } from "class-validator";
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Vzorky extends BaseEntity {

    @PrimaryGeneratedColumn()
    @ApiProperty()
    @IsOptional()
    id: number

    @Column()
    @ApiProperty()
    @IsNotEmpty()
    druh: string

    @Column()
    @ApiProperty()
    @IsNotEmpty()
    popis: string

    @Column()
    @ApiProperty()
    @IsNotEmpty()
    dovoz: string

    @Column()
    @ApiProperty()
    @IsNotEmpty()
    dovoz_datum: string

    @Column()
    @ApiProperty()
    @IsNotEmpty()
    oznaceni_svlecky: string

    @Column()
    @ApiProperty()
    @IsNotEmpty()
    sber_svlecky_datum: string

    @Column()
    @ApiProperty()
    @IsNotEmpty()
    sber_svlecky_misto: string

    @Column()
    @ApiProperty()
    @IsNotEmpty()
    cislo_kotce: number

    @Column()
    @ApiProperty()
    @IsNotEmpty()
    ulozeni_svlecky_misto: string

    @Column()
    @ApiProperty()
    @IsNotEmpty()
    oznaceni_vzorku_svlecky: string

    @Column()
    @ApiProperty()
    @IsNotEmpty()
    pred_posl_svlecenim_misto: string

    @Column()
    @ApiProperty()
    @IsNotEmpty()
    puvodni_hmotnost: string

    @Column()
    @ApiProperty()
    @IsNotEmpty()
    priprava_vzorku_typ: string

    @Column()
    @ApiProperty()
    @IsNotEmpty()
    priprava_vzorku_kdy: string

    @Column()
    @ApiProperty()
    @IsNotEmpty()
    priprava_vzorku_kdo: string

    @Column()
    @ApiProperty()
    @IsNotEmpty()
    priprava_vzorku_misto: string

    @Column()
    @ApiProperty()
    @IsNotEmpty()
    priprava_vzorku_oplach: string

    @Column()
    @ApiProperty()
    @IsNotEmpty()
    priprava_vzorku_oplach_kdy: string

    @Column()
    @ApiProperty()
    @IsNotEmpty()
    priprava_vzorku_suseni: string

    @Column()
    @ApiProperty()
    @IsNotEmpty()
    ulozeni_vzorku_do_analyzy_misto: string

    @Column()
    @ApiProperty()
    @IsNotEmpty()
    ulozeni_vzorku_do_analyzy_objekt: string

    @Column()
    @ApiProperty()
    @IsNotEmpty()
    ulozeni_vzorku_aktualni: string

    @Column()
    @ApiProperty()
    @IsNotEmpty()
    dodani_albertov_datum: string

    @Column()
    @ApiProperty()
    @IsOptional()
    pozadovane_analyzy: string

    @Column()
    @ApiProperty()
    @IsOptional()
    cislo_vzorku: string

    @Column()
    @ApiProperty()
    @IsOptional()
    navazka_g: string

    @Column()
    @ApiProperty()
    @IsOptional()
    navazeno_kdy: string

    @Column()
    @ApiProperty()
    @IsOptional()
    navazeno_kdo: string

}