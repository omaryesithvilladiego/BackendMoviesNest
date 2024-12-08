import { registerAs } from "@nestjs/config";
import type { DataSourceOptions } from "typeorm";
import { DataSource } from "typeorm";

const config: DataSourceOptions = {
  type: "postgres",
  url: "postgresql://movie_buqe_user:PlwgRrflBCPfJHCjKXYzMaXXAkPHUSH8@dpg-ctb22la3esus739e820g-a/movie_buqe",
  // database: DB_NAME,
  // host: DB_HOST,
  // port: Number(DB_PORT),
  // username: DB_USERNAME,
  // password: DB_PASSWORD,
  entities: ["dist/**/*.entity{.ts,.js}"],
  migrations: ["dist/migrations/*{.ts,.js}"],
  logging: false,
  synchronize: true,
  dropSchema: false,
};

export default registerAs("typeorm", () => config);

export const connectionSource = new DataSource(config);
