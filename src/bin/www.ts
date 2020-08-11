import env from 'dotenv';
import app from '../app'
import LoggerService from '../config/logger'
import * as database from '../config/postgres';

const logger = new LoggerService('./bin/www');
database.init();
env.config();

app.listen(process.env.PORT, function () {
    logger.info(`Server Started: http://localhost:${process.env.PORT}`);
});
