import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";  
import { ExerciseService } from '../services/exercise.service';
import { Exercise } from '../domain/exercise.entity';
  
@Controller('/exercises')
export class ExerciseController {

    constructor(private readonly exerciseService: ExerciseService) {}
  
    @Get()
    getAllExercises(): Promise<Exercise[]> {
      return this.exerciseService.getAllExercises();
    }
  
    @Get(':id')
    getExercise(@Param('id') id: string): Promise<Exercise> {
      return this.exerciseService.getExercise(Number(id));
    }
  
    @Post()
    createExercises(@Body() exercise: Exercise): Promise<Exercise> {
      return this.exerciseService.createExercises(exercise);
    }
  
    @Put(':id')
    updateAluno(@Param('id') id: string, @Body() exercise: Exercise): Promise<Exercise> {
      return this.exerciseService.updateExercises(Number(id), exercise);
    }
  
    @Delete(':id')
    deletePalestra(@Param('id') id: string): Promise<void> {
      return this.exerciseService.deleteExercises(Number(id));
    }
  }