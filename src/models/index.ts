"use strict";
import LoggerService from "../config/logger";

const logger = new LoggerService("./models/index.ts");
import fs from "fs";
import path from "path";
import { Sequelize } from "sequelize";
const basename = path.basename(__filename);
// const config = require('../config/config.json');
const db: any = {};

const sequelize = new Sequelize("teethdb", "thmin", null, {
  host: "127.0.0.1",
  dialect: "postgres",

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
    // timestamps: false, //automatically adds the fields createdAt and updatedAt
    charset: "utf8",
  },
  dialectOptions: {
    useUTC: true, //for reading from database
  },
  timezone: "utc",
});

fs.readdirSync(__dirname)
  .filter((file: any) => {
    return (
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
    );
  })
  .forEach((file: any) => {
    const model = sequelize["import"](path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
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
      logger.info("Connection has been established successfully.");
    })
    .catch((err: any) => {
      logger.error("Unable to connect to the database:", err);
    });
}

export { db, init, sequelize };
