"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("users", {
      id: {
        type: Sequelize.BIGINT,
        autoIncrement: true,
        primaryKey: true,
        allowNull: null,
      },
      name: {
        type: Sequelize.STRING(128),
        allowNull: false,
      },
      surname: {
        type: Sequelize.STRING(128),
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING(64),
        allowNull: false,
      },
      birthday: {
        type: Sequelize.DATEONLY,
        allowNull: true,
      },
      phone1: {
        type: Sequelize.STRING(64),
        allowNull: true,
      },
      phone2: {
        type: Sequelize.STRING(64),
        allowNull: true,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.fn("now"),
        field: "created_at",
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.fn("now"),
        field: "updated_at",
      },
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("users");
  },
};
