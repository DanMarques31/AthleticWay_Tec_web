import { DataSource } from "typeorm";

export const datasourceProvider = [
    {
        provide: 'MYSQL_DATA_SOURCE',
        useFactory: async (): Promise<DataSource> => {
            const datasource: DataSource = new DataSource({
                type: "mysql",
                host: "127.0.0.1",
                port: 3306,
                username: "root",
                password: "32148450",
                database: "AthleticWay",
                entities: [__dirname + '/../**/*.entity{.ts,.js}'],
                synchronize: true
            });
            return datasource.initialize();
        }
    }
];