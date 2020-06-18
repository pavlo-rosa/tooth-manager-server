import LoggerService from './config/logger'
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import bodyParser from "body-parser";

import routesIndex from './routes/index';
import routesUser from './routes/user';

const logger = new LoggerService('./app.ts');


// Create a new express application instance
let app: express.Application = express();

app.use(
    morgan('tiny', {
        stream: {
            write: (str) => {
                logger.info(str);
            },
        },
    }),
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use('/', routesIndex);
app.use('/user/', routesUser);


export = app
