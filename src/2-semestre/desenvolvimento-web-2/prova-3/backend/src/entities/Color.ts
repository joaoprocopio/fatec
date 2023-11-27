import { Entity, PrimaryColumn , Column, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:"colors"})
export class Color {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable: false, type:"integer"})
    red: number;

    @Column({nullable: false, type:"integer"})
    green: number;

    @Column({nullable: false, type:"integer"})
    blue: number;
}