'use strict';
import LoggerService from '../config/logger';

const logger = new LoggerService('./models/index.ts');
const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const config = require('../config/config.js');
const db: any = {};

let sequelize: any;
sequelize = new Sequelize(config.dbName, config.dbUser, config.dbPass, {
    host: config.dbHost,
    dialect: 'postgres'
});


fs
    .readdirSync(__dirname)
    .filter((file: any) => {
        return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
    })
    .forEach((file: any) => {
        const model = sequelize['import'](path.join(__dirname, file));
        db[model.name] = model;
    });

Object.keys(db).forEach(modelName => {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

function init() {
    sequelize
        .authenticate()
        .then(() => {
            logger.info('Connection has been established successfully.').then();
        })
        .catch((err: any) => {
            logger.error('Unable to connect to the database:', err).then();
        });
}

module.exports = {
    db,
    init
};
