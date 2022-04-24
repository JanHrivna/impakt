import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class MistoUlozeni extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    adresa: string

}