import { BaseEntity, Column, PrimaryGeneratedColumn } from "typeorm";

export class TypyAnalyz extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    kod: string

}