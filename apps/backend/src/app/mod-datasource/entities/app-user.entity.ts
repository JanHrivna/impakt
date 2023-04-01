import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class AppUsers extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    username: string

}