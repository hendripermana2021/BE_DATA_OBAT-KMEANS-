'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "tbl_kriteria",
      [
        {
          name_kriteria: "Harga Obat",
          createdAt: new Date(),
          updatedAt: new Date(),
        },        
        {
          name_kriteria: "Efek Samping Obat",
          createdAt: new Date(),
          updatedAt: new Date(),
        },   
        {
          name_kriteria: "Kategori Penyakit",
          createdAt: new Date(),
          updatedAt: new Date(),
        },   
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("tbl_kriteria", null, {});
  },
};
