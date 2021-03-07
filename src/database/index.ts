import { ConnectionOptions } from 'typeorm';

const env = process.env.NODE_ENV || 'development';
const dbConnection: ConnectionOptions = {
  type: 'mariadb',
  host: process.env.DATABASE_HOST,
  port: Number(process.env.DATABASE_PORT),
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_DATABASE,
  synchronize: true,
  logging: false,
  entities: [env === 'production' ? 'build/entity/*{.ts,.js}' : 'src/entity/*{.ts,.js}'],
  migrations: [env === 'production' ? 'build/migration/*{.ts,.js}' : 'src/migration/*{.ts,.js}'],
  subscribers: [env === 'production' ? 'build/subscriber/*{.ts,.js}' : 'src/subscriber/*{.ts,.js}'],
  cli: {
    entitiesDir: 'src/entity',
    migrationsDir: 'src/migration',
    subscribersDir: 'src/subscriber',
  },
};

export { dbConnection };
