import { ApiProperty } from "@nestjs/swagger";
import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { MistoUlozeni } from "./misto-ulozeni";

@Entity()
export class Vzorky extends BaseEntity {

    @PrimaryGeneratedColumn()
    @ApiProperty()
    id: number

    @Column()
    @ApiProperty()
    druh: string

    @Column()
    @ApiProperty()
    popis: string

    @Column()
    @ApiProperty()
    dovoz: string

    @Column()
    @ApiProperty()
    dovoz_datum: string

    @Column()
    @ApiProperty()
    oznaceni_svlecky: string

    @Column()
    @ApiProperty()
    sber_svlecky_datum: string

    @Column()
    @ApiProperty()
    sber_svlecky_misto: string

    @Column()
    @ApiProperty()
    cislo_kotce: number

    @ManyToOne(type => MistoUlozeni, { eager: true })
    @JoinColumn({
        name: "ulozeni_svlecky_misto",
        referencedColumnName: "id"
    })
    @ApiProperty()
    ulozeni_svlecky_misto: MistoUlozeni

    @Column()
    @ApiProperty()
    oznaceni_vzorku_svlecky: string

    @Column()
    @ApiProperty()
    pred_posl_svlecenim_misto: string

    @Column()
    @ApiProperty()
    puvodni_hmotnost: string

    @Column()
    @ApiProperty()
    priprava_vzorku_typ: string

    @Column()
    @ApiProperty()
    priprava_vzorku_kdy: string

    @Column()
    @ApiProperty()
    priprava_vzorku_kdo: string

    @ManyToOne(type => MistoUlozeni, { eager: true })
    @JoinColumn({
        name: "priprava_vzorku_misto",
        referencedColumnName: "id"
    })
    @ApiProperty()
    priprava_vzorku_misto: MistoUlozeni

    @Column()
    @ApiProperty()
    priprava_vzorku_oplach: string

    @Column()
    @ApiProperty()
    priprava_vzorku_oplach_kdy: string

    @Column()
    @ApiProperty()
    priprava_vzorku_suseni: string

    @ManyToOne(type => MistoUlozeni, { eager: true })
    @JoinColumn({
        name: "ulozeni_vzorku_do_analyzy_misto",
        referencedColumnName: "id"
    })
    @ApiProperty()
    ulozeni_vzorku_do_analyzy_misto: MistoUlozeni

    @Column()
    @ApiProperty()
    ulozeni_vzorku_do_analyzy_objekt: string

    @ManyToOne(type => MistoUlozeni, { eager: true })
    @JoinColumn({
        name: "ulozeni_vzorku_aktualni",
        referencedColumnName: "id"
    })
    @ApiProperty()
    ulozeni_vzorku_aktualni: MistoUlozeni

    @Column()
    @ApiProperty()
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