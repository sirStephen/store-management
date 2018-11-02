import { Pool } from 'pg';
import { config } from 'dotenv';
import dbConfig from '../../secrets/db_configuration';

config();

const pool = (process.env.NODE_ENV === 'test') ? new Pool(dbConfig.test) : new Pool(dbConfig.test);

export default pool;
