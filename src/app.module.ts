import { Module } from '@nestjs/common';
import { FoodController } from './app/controllers/food.controller';
import { FoodService } from './app/services/food.service';
import { DatabaseModule } from './app/repositories/database.module';
import { ExerciseController } from './app/controllers/exercise.controller';
import { ExerciseService } from './app/services/exercise.service';

@Module({
  imports: [DatabaseModule],
  controllers: [FoodController, ExerciseController],
  providers: [FoodService, ExerciseService],

})
export class AppModule {}