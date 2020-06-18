"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("users", [
      {
        name: "Daenerys",
        surname: "Targaryen",
        email: "dane.targaryen@gameofthrones.com",
        birthday: "1995/04/20",
        phone1: "+34 683 542 213",
      },
      {
        name: "Jon",
        surname: "Snow",
        email: "snow@gameofthrones.com",
        birthday: "1988/08/10",
        phone1: "+34 638 769 703",
        phone2: "917 973 415"
      },
      {
        name: "Arya",
        surname: "Stark",
        email: "arya.stark@gameofthrones.com",
        birthday: "2000/08/22",
        phone1: "+34 611 231 947",
      },
      {
        name: "Tyrion",
        surname: "Lannister",
        email: "tyrion.lannister@gameofthrones.com",
        birthday: "1993/04/06",
        phone1: "+34 623 234 943",
      },
      {
        name: "Sansa",
        surname: "Stark",
        email: "sansa.stark@gameofthrones.com",
        birthday: "1992/07/25",
        phone1: "+34 632 123 324",
      },
      {
        name: "Khal",
        surname: "drogo",
        email: "drogo@gameofthrones.com",
        birthday: "1970/02/17",
        phone1: "+34 732 122 111",
        phone2: "911 888 555",
      },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.
    */
    return queryInterface.bulkDelete('users', null, {});
  },
};
