import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { MistoUlozeni } from "./misto-ulozeni";

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

    @ManyToOne(type => MistoUlozeni, { eager: true })
    @JoinColumn({
        name: "ulozeni_svlecky_misto",
        referencedColumnName: "id"
    })
    ulozeni_svlecky_misto: MistoUlozeni

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

    @ManyToOne(type => MistoUlozeni, { eager: true })
    @JoinColumn({
        name: "priprava_vzorku_misto",
        referencedColumnName: "id"
    })
    priprava_vzorku_misto: MistoUlozeni

    @Column()
    priprava_vzorku_oplach: string

    @Column()
    priprava_vzorku_oplach_kdy: string

    @Column()
    priprava_vzorku_suseni: string

    @ManyToOne(type => MistoUlozeni, { eager: true })
    @JoinColumn({
        name: "ulozeni_vzorku_do_analyzy_misto",
        referencedColumnName: "id"
    })
    ulozeni_vzorku_do_analyzy_misto: MistoUlozeni

    @Column()
    ulozeni_vzorku_do_analyzy_objekt: string

    @ManyToOne(type => MistoUlozeni, { eager: true })
    @JoinColumn({
        name: "ulozeni_vzorku_aktualni",
        referencedColumnName: "id"
    })
    ulozeni_vzorku_aktualni: MistoUlozeni

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