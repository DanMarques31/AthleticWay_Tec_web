import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('food')
export class Food {
    
    @PrimaryGeneratedColumn({ name: "food_id"} )
    id: number;

    @Column()
    nome: string;

    @Column()
    kcal: number;

    @Column()
    proteinas: number;
    
    @Column()
    carboidratos: number;
    
    @Column()
    godurasTotais: number;

}