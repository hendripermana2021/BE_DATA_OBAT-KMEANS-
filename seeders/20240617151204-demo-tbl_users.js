'use strict';

/** @type {import('sequelize-cli').Migration} */
const bcrypt = require("bcrypt");
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "tbl_users",
      [
        {
          name_user: "Alfia",
          sex: "P",
          email :"alfia@gmail.com",
          password : await bcrypt.hash("12345", 10),
          real_password : "12345",
          role_id : "1",
          createdAt: new Date(),
          updatedAt: new Date(),
        },        
        {
          name_user: "Morgan",
          sex: "L",
          email :"morgan@gmail.com",
          password : await bcrypt.hash("12345", 10),
          real_password : "12345",
          role_id : "2",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("tbl_users", null, {});
  },
};
