'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "tbl_subkriteria",
      [
        {
          id_kriteria: 1,
          name_sub: "< Rp 10.000",
          value: 1,
          createdAt: new Date(),
          updatedAt: new Date()
         },
         {
          id_kriteria: 2,
          name_sub: "Rp 11.000 - Rp 20.000",
          value: 2,
          createdAt: new Date(),
          updatedAt: new Date()
         },
         {
          id_kriteria: 3,
          name_sub: "Rp 21.000 - Rp 30.000",
          value: 3,
          createdAt: new Date(),
          updatedAt: new Date()
         },
         {
          id_kriteria: 4,
          name_sub: "Rp 31.000 - Rp 40.000",
          value: 4,
          createdAt: new Date(),
          updatedAt: new Date()
         },
         {
          id_kriteria: 5,
          name_sub: ">Rp 41.000",
          value: 5,
          createdAt: new Date(),
          updatedAt: new Date()
         },
         {
          id_kriteria: 6,
          name_sub: "1 efek samping",
          value: 1,
          createdAt: new Date(),
          updatedAt: new Date()
         },
         {
          id_kriteria: 7,
          name_sub: "2 efek samping",
          value: 2,
          createdAt: new Date(),
          updatedAt: new Date()
         },
         {
          id_kriteria: 8,
          name_sub: "3 efek samping",
          value: 3,
          createdAt: new Date(),
          updatedAt: new Date()
         },
         {
          id_kriteria: 9,
          name_sub: "4 efek samping",
          value: 4,
          createdAt: new Date(),
          updatedAt: new Date()
         },
         {
          id_kriteria: 10,
          name_sub: "5 efek samping",
          value: 5,
          createdAt: new Date(),
          updatedAt: new Date()
         },
         {
          id_kriteria: 11,
          name_sub: "1 kategori penyakit",
          value: 1,
          createdAt: new Date(),
          updatedAt: new Date()
         },
         {
          id_kriteria: 12,
          name_sub: "2 kategori penyakit",
          value: 2,
          createdAt: new Date(),
          updatedAt: new Date()
         },
         {
          id_kriteria: 13,
          name_sub: "3 Kategori penyakit",
          value: 3,
          createdAt: new Date(),
          updatedAt: new Date()
         },
         {
          id_kriteria: 14,
          name_sub: "4 kategori penyakit",
          value: 4,
          createdAt: new Date(),
          updatedAt: new Date()
         },
         {
          id_kriteria: 15,
          name_sub: "5 kategori penyakit",
          value: 5,
          createdAt: new Date(),
          updatedAt: new Date()
         }
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("tbl_subkriteria", null, {});
  },
};
