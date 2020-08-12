import LoggerService from './config/logger'
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import bodyParser from "body-parser";

// import routesIndex from './routes/index';
import routesUser from './routes/pacient';
import routesCompany from './routes/company';
import { Routes } from './routes';


const logger = new LoggerService('./app.ts');

// Create a new express application instance
const app: express.Application = express();

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
app.use('/api',  Routes.init());
// app.use('/', routesIndex);
// app.use('/api/pacients/', routesUser);
// app.use('/company/', routesCompany);


export = app
