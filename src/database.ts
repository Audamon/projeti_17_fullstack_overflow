import pg from 'pg';

const { Pool } = pg;

const database = {
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: '123456',
    database: 'fullstack_overflow',
};

const connection = new Pool(database);

export default connection;
