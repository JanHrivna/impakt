import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class PozadovaneAnalyzy extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    id_typ: number

    @Column()
    id_vzorek: number

}