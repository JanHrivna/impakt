import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Analyzy extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    den: string

    @Column()
    vysledek: string

    @Column()
    provedl: string

    @Column()
    id_typ: number

    @Column()
    id_vzorek: number

}