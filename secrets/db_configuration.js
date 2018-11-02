import { config } from 'dotenv';

config();
const dbConfig = {};

dbConfig.test = {
  user: process.env.TEST_DB_USER,
  host: process.env.TEST_DB_HOST,
  database: process.env.TEST_DB_NAME,
  port: process.env.TEST_DB_PORT,
};


dbConfig.local = {
  user: process.env.TEST_DB_USER,
  host: process.env.TEST_DB_HOST,
  database: process.env.TEST_DB_NAME,
  port: process.env.TEST_DB_PORT,
};


export default dbConfig;
