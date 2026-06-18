import app from './app';
import config from './config';
import pool, { createTables } from './db';
import logger from './logger';

const main = async () => {
    try {
        await pool.query('SELECT NOW()');
        logger.info('Database connected successfully');

        await createTables();

        logger.info('Database tables are ready');


        app.listen(config.port, () => {
            logger.info(`DevPulse server is running on port ${config.port}`);
        });
    } catch (error) {
        logger.error('Database connection failed');
        console.log(error);
    }
};

main();