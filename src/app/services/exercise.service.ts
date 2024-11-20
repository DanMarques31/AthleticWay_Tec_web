import { Inject, Injectable } from '@nestjs/common';
import { Exercise } from "../domain/exercise.entity";
import { DeleteResult, Repository } from 'typeorm';

@Injectable()
export class ExerciseService {
    
    constructor(
        @Inject('EXERCISE_REPOSITORY')
        private readonly exerciseRepository: Repository<Exercise>,
    ) {}

    async getAllExercises(): Promise<Exercise[]> {
        return this.exerciseRepository.find();
    }
    
    async getExercise(id: number): Promise<Exercise> {
        return this.exerciseRepository.findOneBy({ id });
    }
    
    async createExercises(exercise: Exercise): Promise<Exercise> {
        return this.exerciseRepository.save(exercise);
    }
    
    async updateExercises(id: number, exercise: Exercise): Promise<Exercise> {
        const exExercise = await this.getExercise(id);
        exExercise.nome = exercise.nome;
        exExercise.musculo = exercise.musculo;
        return this.exerciseRepository.save(exExercise);
    }
    
    async deleteExercises(id: number): Promise<void> {
        this.exerciseRepository.delete(id);
        return;
    }
}