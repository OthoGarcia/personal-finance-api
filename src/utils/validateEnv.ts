import { cleanEnv, port, str } from 'envalid';

const validateEnv = () => {
  cleanEnv(process.env, {
    NODE_ENV: str(),
    PORT: port(),
    DATABASE_HOST: str(),
    DATABASE_PORT: port(),
    DATABASE_USERNAME: str(),
    DATABASE_PASSWORD: str(),
    DATABASE_DATABASE: str(),
    JWT_SECRET: str(),
  });
};

export default validateEnv;
