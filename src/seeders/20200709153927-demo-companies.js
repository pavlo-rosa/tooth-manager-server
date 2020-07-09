"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("companies", [
      {
        name: "Clinica Smilodon",
        cif: "3248927326N",
      },
      {
        name: "Sanitas",
        cif: "3582942837L",
      },
      {
        name: "CareDent",
        cif: "12312489324H",
      },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("companies", null, {});
  },
};
