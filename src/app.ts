// lib/app.ts
import express from 'express';
import LoggerService from './config/logger'
const logger = new LoggerService('./app.ts')
// Create a new express application instance
const app: express.Application = express();
app.get('/', function (req, res) {
    res.send('Hello World!');
});
app.listen(3000, function () {
    logger.info('Example app listening on port 3000!');
});
