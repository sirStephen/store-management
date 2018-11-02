import { Pool } from 'pg';
import dbConfig from '../../secrets/db_configuration';

const pool = (process.env.NODE_ENV === 'test') ? new Pool(dbConfig.test) : new Pool(dbConfig.local);

console.log('===========================', pool);
console.log('============================', process.env.NODE_ENV);

export default pool;
