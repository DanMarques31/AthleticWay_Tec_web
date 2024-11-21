import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('exercise')
export class Exercise {
    
    @PrimaryGeneratedColumn({ name: "exercise_id"} )
    id: number;
    
    @Column()
    nome: string;
    
    @Column()
    musculo: string;

}