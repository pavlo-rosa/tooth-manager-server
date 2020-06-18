"use strict";
import LoggerService from "../config/logger";

const logger = new LoggerService('./models/index.ts');
const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize').Sequelize;
const basename = path.basename(__filename);
// const config = require('../config/config.json');
const db: any = {};

let sequelize: any;
sequelize = new Sequelize('teethdb', 'thmin', null, {
    host: '127.0.0.1',
    dialect: 'postgres',

    pool: {
        max: 20,
        min: 0,
        acquire: 30000,
        idle: 30000,
    },
    logging: (msg: string) => logger.debug(msg),
    define: {
        // underscored: true,      //change attributes name to snake_case
        // freezeTableName: false, //pluralize table names
        charset: 'utf8',
        dialectOptions: {
            collate: 'utf8_general_ci',
        },
        // timestamps: false, //automatically adds the fields createdAt and updatedAt
    },
    dialectOptions: {
        useUTC: true, //for reading from database
    },
    timezone: 'utc',
});


fs
    .readdirSync(__dirname)
    .filter((file: any) => {
        return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.ts');
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
            logger.info('Connection has been established successfully.');
            // sequelize.sync({
            //     force: true
            // }).then();
        })
        .catch((err: any) => {
            logger.error('Unable to connect to the database:', err);
        });
}

export {
    db,
    init,
    sequelize
};
