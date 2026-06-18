import app from './app';
import pool, { createTables } from './db';
import logger from './logger';

// DB connection run korbo (once)
const initDB = async () => {
    try {
        await pool.query('SELECT NOW()');
        logger.info('Database connected successfully');

        await createTables();
        logger.info('Database tables are ready');
    } catch (error) {
        logger.error('Database connection failed');
        console.log(error);
    }
};

// // run once
// initDB();

// ❗❗ VERY IMPORTANT (Vercel needs this)
export default app;