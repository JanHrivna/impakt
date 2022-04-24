import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Vzorky extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    druh: string

    @Column()
    popis: string

    @Column()
    dovoz: string

    @Column()
    dovoz_datum: string

    @Column()
    oznaceni_svlecky: string

    @Column()
    sber_svlecky_datum: string

    @Column()
    sber_svlecky_misto: string

    @Column()
    cislo_kotce: number

    @Column()
    ulozeni_svlecky_misto: number

    @Column()
    oznaceni_vzorku_svlecky: string

    @Column()
    pred_posl_svlecenim_misto: string

    @Column()
    puvodni_hmotnost: string

    @Column()
    priprava_vzorku_typ: string

    @Column()
    priprava_vzorku_kdy: string

    @Column()
    priprava_vzorku_kdo: string

    @Column()
    priprava_vzorku_misto: number

    @Column()
    priprava_vzorku_oplach: string

    @Column()
    priprava_vzorku_oplach_kdy: string

    @Column()
    priprava_vzorku_suseni: string

    @Column()
    ulozeni_vzorku_do_analyzy_misto: number

    @Column()
    ulozeni_vzorku_do_analyzy_objekt: string

    @Column()
    ulozeni_vzorku_aktualni: number

    @Column()
    dodani_albertov_datum: string

    @Column()
    cislo_vzorku: string

    @Column()
    navazka_g: string

    @Column()
    navazeno_kdy: string

    @Column()
    navazeno_kdo: string

}