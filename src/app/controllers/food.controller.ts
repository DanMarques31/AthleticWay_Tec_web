import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { FoodService } from '../services/food.service';
import { Food } from '../domain/food.entity';

@Controller ('/foods')
export class FoodController {

  constructor (private readonly foodService: FoodService) {}

  @Get()
  getAllFoods(): Promise<Food[]> {
    return this.foodService.getAllFoods();
  }

  @Get(':id')
  getFood(@Param('id') id: string): Promise<Food> {
    return this.foodService.getFood(Number(id));
  }

  @Post()
  createFoods(@Body() food: Food): Promise<Food> {
    return this.foodService.createFoods(food)
  }

  @Put(':id')
  updateFoods(@Param('id') id: string, @Body() food: any): Promise<Food> {
    return this.foodService.updateFoods(Number(id), food);
  }

  @Delete(':id')
  deleteFoods(@Param('id') id: string): Promise<void> {
    return this.foodService.deleteFoods(Number(id));
  }
}