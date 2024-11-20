import { DataSource } from "typeorm";
import { Food } from "../domain/food.entity";
import { Exercise } from "../domain/exercise.entity";

export const repositoryProvider = [
    {
        provide: 'FOOD_REPOSITORY',
        useFactory: (dataSource: DataSource) => dataSource.getRepository(Food),
        inject: ['MYSQL_DATA_SOURCE'],
    },

    {
        provide: 'EXERCISE_REPOSITORY',
        useFactory: (dataSource: DataSource) => dataSource.getRepository(Exercise),
        inject: ['MYSQL_DATA_SOURCE'],
    }
];