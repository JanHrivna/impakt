import { ApiProperty } from "@nestjs/swagger";
import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { MistoUlozeni } from "./misto-ulozeni";
import { IsNotEmpty } from "class-validator"

@Entity()
export class Vzorky extends BaseEntity {

    @PrimaryGeneratedColumn()
    @ApiProperty()
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

    @ManyToOne(type => MistoUlozeni, { eager: true })
    @JoinColumn({
        name: "ulozeni_svlecky_misto",
        referencedColumnName: "id"
    })
    @ApiProperty()
    @IsNotEmpty()
    ulozeni_svlecky_misto: MistoUlozeni

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

    @ManyToOne(type => MistoUlozeni, { eager: true })
    @JoinColumn({
        name: "priprava_vzorku_misto",
        referencedColumnName: "id"
    })
    @ApiProperty()
    @IsNotEmpty()
    priprava_vzorku_misto: MistoUlozeni

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

    @ManyToOne(type => MistoUlozeni, { eager: true })
    @JoinColumn({
        name: "ulozeni_vzorku_do_analyzy_misto",
        referencedColumnName: "id"
    })
    @ApiProperty()
    @IsNotEmpty()
    ulozeni_vzorku_do_analyzy_misto: MistoUlozeni

    @Column()
    @ApiProperty()
    @IsNotEmpty()
    ulozeni_vzorku_do_analyzy_objekt: string

    @ManyToOne(type => MistoUlozeni, { eager: true })
    @JoinColumn({
        name: "ulozeni_vzorku_aktualni",
        referencedColumnName: "id"
    })
    @ApiProperty()
    @IsNotEmpty()
    ulozeni_vzorku_aktualni: MistoUlozeni

    @Column()
    @ApiProperty()
    @IsNotEmpty()
    dodani_albertov_datum: string

    @Column()
    @ApiProperty()
    cislo_vzorku: string

    @Column()
    @ApiProperty()
    navazka_g: string

    @Column()
    @ApiProperty()
    navazeno_kdy: string

    @Column()
    @ApiProperty()
    navazeno_kdo: string

}