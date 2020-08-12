"use strict";
import LoggerService from "./logger";
import { Sequelize } from "sequelize-typescript";
import { Company } from "../models/companies";
import { Pacient } from "../models/pacient";
const logger = new LoggerService("./models/postgres.ts");
// logger.debug(__dirname + "/../models")
const seqConnection = new Sequelize({
  database: "teethdb",
  dialect: "postgres",
  username: "thmin",
  password: null,
  // models: [__dirname + "/../models"], // or [Player, Team],
  logging: (msg: string) => logger.debug(msg),
  pool: {
    max: 20,
    min: 0,
    acquire: 30000,
    idle: 30000,
  },
  define: {
    charset: "utf8",
    timestamps: false, //automatically adds the fields createdAt and updatedAt
    // underscored: true,      //change attributes name to snake_case
    // freezeTableName: false, //pluralize table names
  },
  dialectOptions: {
    useUTC: true, //for reading from database
    collate: "utf8_general_ci",
  },
});

seqConnection.addModels([Pacient, Company]);
// seqConnection.addModels([__dirname + '/../models/*.ts']);

function init(): void {
  seqConnection
    .authenticate()
    .then(() => {
      logger.info("Connection has been established successfully.");
    })
    .catch((err: any) => {
      logger.error("Unable to connect to the database:", err);
    });
}

export { init, seqConnection };
