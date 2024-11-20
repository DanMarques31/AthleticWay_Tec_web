import { Inject, Injectable } from '@nestjs/common';
import { Food } from "../domain/food.entity";
import { DeleteResult, Repository } from 'typeorm';

@Injectable()
export class FoodService {
    
    constructor(
        @Inject('FOOD_REPOSITORY')
        private readonly foodRepository: Repository<Food>,
    ) {}

    async getAllFoods(): Promise<Food[]> {
        return this.foodRepository.find();
    }
    
    async getFood(id: number): Promise<Food> {
        return this.foodRepository.findOneBy({ id });
    }
    
    async createFoods(food: Food): Promise<Food> {
        return this.foodRepository.save(food);
    }
    
    async updateFoods(id: number, food: Food): Promise<Food> {
        const exFood = await this.getFood(id);
        exFood.nome = food.nome;
        exFood.kcal = food.kcal;
        exFood.proteinas = food.proteinas;
        exFood.carboidratos = food.carboidratos;
        exFood.godurasTotais = food.godurasTotais;
        return this.foodRepository.save(exFood);
    }
    
    async deleteFoods(id: number): Promise<void> {
        this.foodRepository.delete(id);
        return;
    }
}