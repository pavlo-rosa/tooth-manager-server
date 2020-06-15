// lib/app.ts
import env from 'dotenv';
import LoggerService from './config/logger'
import express from 'express';
const sequelize = require('./models/index');
env.config();
const logger = new LoggerService('./app.ts');
sequelize.init();
// Create a new express application instance
const app: express.Application = express();
app.get('/', function (req, res) {
    res.send('Hello World!');
});
app.listen(process.env.PORT, function () {
    logger.info(`Example app listening on port ${process.env.PORT}!`);
});
