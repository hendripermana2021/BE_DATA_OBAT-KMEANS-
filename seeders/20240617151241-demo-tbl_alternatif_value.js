'use strict';

/** @type {import('sequelize-cli').Migration} */
const bcrypt = require("bcrypt");
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "tbl_alternatif_values",
      [
        {
        id_alternatif: 1,
        id_kriteria: 1,
        id_subkriteria: 5,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 2,
        id_kriteria: 1,
        id_subkriteria: 2,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 3,
        id_kriteria: 1,
        id_subkriteria: 2,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 4,
        id_kriteria: 1,
        id_subkriteria: 1,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 5,
        id_kriteria: 1,
        id_subkriteria: 1,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 6,
        id_kriteria: 1,
        id_subkriteria: 3,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 7,
        id_kriteria: 1,
        id_subkriteria: 5,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 8,
        id_kriteria: 1,
        id_subkriteria: 2,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 9,
        id_kriteria: 1,
        id_subkriteria: 1,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 10,
        id_kriteria: 1,
        id_subkriteria: 3,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 11,
        id_kriteria: 1,
        id_subkriteria: 2,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 12,
        id_kriteria: 1,
        id_subkriteria: 1,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 13,
        id_kriteria: 1,
        id_subkriteria: 2,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 14,
        id_kriteria: 1,
        id_subkriteria: 2,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 15,
        id_kriteria: 1,
        id_subkriteria: 1,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 16,
        id_kriteria: 1,
        id_subkriteria: 3,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 17,
        id_kriteria: 1,
        id_subkriteria: 2,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 18,
        id_kriteria: 1,
        id_subkriteria: 2,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 19,
        id_kriteria: 1,
        id_subkriteria: 2,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 20,
        id_kriteria: 1,
        id_subkriteria: 1,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 21,
        id_kriteria: 1,
        id_subkriteria: 3,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 22,
        id_kriteria: 1,
        id_subkriteria: 1,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 23,
        id_kriteria: 1,
        id_subkriteria: 3,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 24,
        id_kriteria: 1,
        id_subkriteria: 2,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 25,
        id_kriteria: 1,
        id_subkriteria: 1,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 26,
        id_kriteria: 1,
        id_subkriteria: 1,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 27,
        id_kriteria: 1,
        id_subkriteria: 3,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 28,
        id_kriteria: 1,
        id_subkriteria: 3,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 29,
        id_kriteria: 1,
        id_subkriteria: 1,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 30,
        id_kriteria: 1,
        id_subkriteria: 3,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 31,
        id_kriteria: 1,
        id_subkriteria: 2,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 32,
        id_kriteria: 1,
        id_subkriteria: 1,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 33,
        id_kriteria: 1,
        id_subkriteria: 4,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 34,
        id_kriteria: 1,
        id_subkriteria: 5,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 35,
        id_kriteria: 1,
        id_subkriteria: 2,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 36,
        id_kriteria: 1,
        id_subkriteria: 3,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 37,
        id_kriteria: 1,
        id_subkriteria: 2,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 38,
        id_kriteria: 1,
        id_subkriteria: 4,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 39,
        id_kriteria: 1,
        id_subkriteria: 1,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 40,
        id_kriteria: 1,
        id_subkriteria: 3,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 41,
        id_kriteria: 1,
        id_subkriteria: 2,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 42,
        id_kriteria: 1,
        id_subkriteria: 1,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 43,
        id_kriteria: 1,
        id_subkriteria: 5,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 44,
        id_kriteria: 1,
        id_subkriteria: 1,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 45,
        id_kriteria: 1,
        id_subkriteria: 2,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 46,
        id_kriteria: 1,
        id_subkriteria: 1,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 47,
        id_kriteria: 1,
        id_subkriteria: 2,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 48,
        id_kriteria: 1,
        id_subkriteria: 2,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 49,
        id_kriteria: 1,
        id_subkriteria: 1,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 50,
        id_kriteria: 1,
        id_subkriteria: 2,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 51,
        id_kriteria: 1,
        id_subkriteria: 2,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 52,
        id_kriteria: 1,
        id_subkriteria: 1,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 53,
        id_kriteria: 1,
        id_subkriteria: 3,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 54,
        id_kriteria: 1,
        id_subkriteria: 5,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 55,
        id_kriteria: 1,
        id_subkriteria: 2,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 56,
        id_kriteria: 1,
        id_subkriteria: 2,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 57,
        id_kriteria: 1,
        id_subkriteria: 1,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 58,
        id_kriteria: 1,
        id_subkriteria: 2,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 59,
        id_kriteria: 1,
        id_subkriteria: 1,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 60,
        id_kriteria: 1,
        id_subkriteria: 1,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 61,
        id_kriteria: 1,
        id_subkriteria: 3,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 62,
        id_kriteria: 1,
        id_subkriteria: 3,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 63,
        id_kriteria: 1,
        id_subkriteria: 2,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 64,
        id_kriteria: 1,
        id_subkriteria: 1,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 65,
        id_kriteria: 1,
        id_subkriteria: 2,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 66,
        id_kriteria: 1,
        id_subkriteria: 2,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 67,
        id_kriteria: 1,
        id_subkriteria: 1,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 68,
        id_kriteria: 1,
        id_subkriteria: 2,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 69,
        id_kriteria: 1,
        id_subkriteria: 2,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 70,
        id_kriteria: 1,
        id_subkriteria: 1,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 71,
        id_kriteria: 1,
        id_subkriteria: 1,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 72,
        id_kriteria: 1,
        id_subkriteria: 2,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 73,
        id_kriteria: 1,
        id_subkriteria: 1,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 74,
        id_kriteria: 1,
        id_subkriteria: 1,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 75,
        id_kriteria: 1,
        id_subkriteria: 1,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 76,
        id_kriteria: 1,
        id_subkriteria: 2,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 77,
        id_kriteria: 1,
        id_subkriteria: 1,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 78,
        id_kriteria: 1,
        id_subkriteria: 3,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 79,
        id_kriteria: 1,
        id_subkriteria: 3,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 80,
        id_kriteria: 1,
        id_subkriteria: 1,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 81,
        id_kriteria: 1,
        id_subkriteria: 1,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 82,
        id_kriteria: 1,
        id_subkriteria: 1,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 83,
        id_kriteria: 1,
        id_subkriteria: 1,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 84,
        id_kriteria: 1,
        id_subkriteria: 1,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 85,
        id_kriteria: 1,
        id_subkriteria: 1,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 86,
        id_kriteria: 1,
        id_subkriteria: 2,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 87,
        id_kriteria: 1,
        id_subkriteria: 2,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 88,
        id_kriteria: 1,
        id_subkriteria: 1,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 89,
        id_kriteria: 1,
        id_subkriteria: 2,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 90,
        id_kriteria: 1,
        id_subkriteria: 1,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 91,
        id_kriteria: 1,
        id_subkriteria: 1,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 92,
        id_kriteria: 1,
        id_subkriteria: 5,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 93,
        id_kriteria: 1,
        id_subkriteria: 2,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 94,
        id_kriteria: 1,
        id_subkriteria: 2,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 95,
        id_kriteria: 1,
        id_subkriteria: 2,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 96,
        id_kriteria: 1,
        id_subkriteria: 1,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 97,
        id_kriteria: 1,
        id_subkriteria: 2,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 98,
        id_kriteria: 1,
        id_subkriteria: 1,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 99,
        id_kriteria: 1,
        id_subkriteria: 3,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 100,
        id_kriteria: 1,
        id_subkriteria: 1,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 1,
        id_kriteria: 2,
        id_subkriteria: 6,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 2,
        id_kriteria: 2,
        id_subkriteria: 8,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 3,
        id_kriteria: 2,
        id_subkriteria: 10,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 4,
        id_kriteria: 2,
        id_subkriteria: 6,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 5,
        id_kriteria: 2,
        id_subkriteria: 9,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 6,
        id_kriteria: 2,
        id_subkriteria: 7,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 7,
        id_kriteria: 2,
        id_subkriteria: 6,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 8,
        id_kriteria: 2,
        id_subkriteria: 9,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 9,
        id_kriteria: 2,
        id_subkriteria: 6,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 10,
        id_kriteria: 2,
        id_subkriteria: 6,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 11,
        id_kriteria: 2,
        id_subkriteria: 10,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 12,
        id_kriteria: 2,
        id_subkriteria: 10,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 13,
        id_kriteria: 2,
        id_subkriteria: 10,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 14,
        id_kriteria: 2,
        id_subkriteria: 10,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 15,
        id_kriteria: 2,
        id_subkriteria: 8,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 16,
        id_kriteria: 2,
        id_subkriteria: 6,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 17,
        id_kriteria: 2,
        id_subkriteria: 7,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 18,
        id_kriteria: 2,
        id_subkriteria: 7,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 19,
        id_kriteria: 2,
        id_subkriteria: 8,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 20,
        id_kriteria: 2,
        id_subkriteria: 8,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 21,
        id_kriteria: 2,
        id_subkriteria: 7,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 22,
        id_kriteria: 2,
        id_subkriteria: 8,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 23,
        id_kriteria: 2,
        id_subkriteria: 8,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 24,
        id_kriteria: 2,
        id_subkriteria: 10,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 25,
        id_kriteria: 2,
        id_subkriteria: 10,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 26,
        id_kriteria: 2,
        id_subkriteria: 10,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 27,
        id_kriteria: 2,
        id_subkriteria: 10,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 28,
        id_kriteria: 2,
        id_subkriteria: 8,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 29,
        id_kriteria: 2,
        id_subkriteria: 7,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 30,
        id_kriteria: 2,
        id_subkriteria: 6,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 31,
        id_kriteria: 2,
        id_subkriteria: 9,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 32,
        id_kriteria: 2,
        id_subkriteria: 6,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 33,
        id_kriteria: 2,
        id_subkriteria: 9,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 34,
        id_kriteria: 2,
        id_subkriteria: 7,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 35,
        id_kriteria: 2,
        id_subkriteria: 6,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 36,
        id_kriteria: 2,
        id_subkriteria: 6,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 37,
        id_kriteria: 2,
        id_subkriteria: 6,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 38,
        id_kriteria: 2,
        id_subkriteria: 8,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 39,
        id_kriteria: 2,
        id_subkriteria: 6,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 40,
        id_kriteria: 2,
        id_subkriteria: 6,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 41,
        id_kriteria: 2,
        id_subkriteria: 6,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 42,
        id_kriteria: 2,
        id_subkriteria: 9,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 43,
        id_kriteria: 2,
        id_subkriteria: 7,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 44,
        id_kriteria: 2,
        id_subkriteria: 10,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 45,
        id_kriteria: 2,
        id_subkriteria: 10,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 46,
        id_kriteria: 2,
        id_subkriteria: 6,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 47,
        id_kriteria: 2,
        id_subkriteria: 10,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 48,
        id_kriteria: 2,
        id_subkriteria: 10,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 49,
        id_kriteria: 2,
        id_subkriteria: 10,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 50,
        id_kriteria: 2,
        id_subkriteria: 10,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 51,
        id_kriteria: 2,
        id_subkriteria: 10,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 52,
        id_kriteria: 2,
        id_subkriteria: 7,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 53,
        id_kriteria: 2,
        id_subkriteria: 6,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 54,
        id_kriteria: 2,
        id_subkriteria: 10,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 55,
        id_kriteria: 2,
        id_subkriteria: 9,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 56,
        id_kriteria: 2,
        id_subkriteria: 6,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 57,
        id_kriteria: 2,
        id_subkriteria: 10,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 58,
        id_kriteria: 2,
        id_subkriteria: 10,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 59,
        id_kriteria: 2,
        id_subkriteria: 10,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 60,
        id_kriteria: 2,
        id_subkriteria: 8,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 61,
        id_kriteria: 2,
        id_subkriteria: 6,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 62,
        id_kriteria: 2,
        id_subkriteria: 9,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 63,
        id_kriteria: 2,
        id_subkriteria: 10,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 64,
        id_kriteria: 2,
        id_subkriteria: 8,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 65,
        id_kriteria: 2,
        id_subkriteria: 10,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 66,
        id_kriteria: 2,
        id_subkriteria: 8,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 67,
        id_kriteria: 2,
        id_subkriteria: 8,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 68,
        id_kriteria: 2,
        id_subkriteria: 6,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 69,
        id_kriteria: 2,
        id_subkriteria: 10,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 70,
        id_kriteria: 2,
        id_subkriteria: 8,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 71,
        id_kriteria: 2,
        id_subkriteria: 10,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 72,
        id_kriteria: 2,
        id_subkriteria: 10,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 73,
        id_kriteria: 2,
        id_subkriteria: 7,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 74,
        id_kriteria: 2,
        id_subkriteria: 6,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 75,
        id_kriteria: 2,
        id_subkriteria: 6,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 76,
        id_kriteria: 2,
        id_subkriteria: 6,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 77,
        id_kriteria: 2,
        id_subkriteria: 6,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 78,
        id_kriteria: 2,
        id_subkriteria: 9,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 79,
        id_kriteria: 2,
        id_subkriteria: 6,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 80,
        id_kriteria: 2,
        id_subkriteria: 10,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 81,
        id_kriteria: 2,
        id_subkriteria: 9,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 82,
        id_kriteria: 2,
        id_subkriteria: 8,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 83,
        id_kriteria: 2,
        id_subkriteria: 6,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 84,
        id_kriteria: 2,
        id_subkriteria: 9,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 85,
        id_kriteria: 2,
        id_subkriteria: 9,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 86,
        id_kriteria: 2,
        id_subkriteria: 7,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 87,
        id_kriteria: 2,
        id_subkriteria: 9,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 88,
        id_kriteria: 2,
        id_subkriteria: 8,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 89,
        id_kriteria: 2,
        id_subkriteria: 6,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 90,
        id_kriteria: 2,
        id_subkriteria: 9,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 91,
        id_kriteria: 2,
        id_subkriteria: 7,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 92,
        id_kriteria: 2,
        id_subkriteria: 8,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 93,
        id_kriteria: 2,
        id_subkriteria: 8,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 94,
        id_kriteria: 2,
        id_subkriteria: 7,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 95,
        id_kriteria: 2,
        id_subkriteria: 10,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 96,
        id_kriteria: 2,
        id_subkriteria: 9,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 97,
        id_kriteria: 2,
        id_subkriteria: 10,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 98,
        id_kriteria: 2,
        id_subkriteria: 6,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 99,
        id_kriteria: 2,
        id_subkriteria: 9,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 100,
        id_kriteria: 2,
        id_subkriteria: 6,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 1,
        id_kriteria: 3,
        id_subkriteria: 13,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 2,
        id_kriteria: 3,
        id_subkriteria: 15,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 3,
        id_kriteria: 3,
        id_subkriteria: 14,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 4,
        id_kriteria: 3,
        id_subkriteria: 15,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 5,
        id_kriteria: 3,
        id_subkriteria: 13,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 6,
        id_kriteria: 3,
        id_subkriteria: 14,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 7,
        id_kriteria: 3,
        id_subkriteria: 13,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 8,
        id_kriteria: 3,
        id_subkriteria: 11,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 9,
        id_kriteria: 3,
        id_subkriteria: 15,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 10,
        id_kriteria: 3,
        id_subkriteria: 13,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 11,
        id_kriteria: 3,
        id_subkriteria: 12,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 12,
        id_kriteria: 3,
        id_subkriteria: 14,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 13,
        id_kriteria: 3,
        id_subkriteria: 15,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 14,
        id_kriteria: 3,
        id_subkriteria: 12,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 15,
        id_kriteria: 3,
        id_subkriteria: 15,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 16,
        id_kriteria: 3,
        id_subkriteria: 14,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 17,
        id_kriteria: 3,
        id_subkriteria: 12,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 18,
        id_kriteria: 3,
        id_subkriteria: 11,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 19,
        id_kriteria: 3,
        id_subkriteria: 11,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 20,
        id_kriteria: 3,
        id_subkriteria: 15,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 21,
        id_kriteria: 3,
        id_subkriteria: 13,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 22,
        id_kriteria: 3,
        id_subkriteria: 13,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 23,
        id_kriteria: 3,
        id_subkriteria: 13,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 24,
        id_kriteria: 3,
        id_subkriteria: 12,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 25,
        id_kriteria: 3,
        id_subkriteria: 14,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 26,
        id_kriteria: 3,
        id_subkriteria: 11,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 27,
        id_kriteria: 3,
        id_subkriteria: 13,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 28,
        id_kriteria: 3,
        id_subkriteria: 13,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 29,
        id_kriteria: 3,
        id_subkriteria: 11,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 30,
        id_kriteria: 3,
        id_subkriteria: 12,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 31,
        id_kriteria: 3,
        id_subkriteria: 14,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 32,
        id_kriteria: 3,
        id_subkriteria: 12,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 33,
        id_kriteria: 3,
        id_subkriteria: 12,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 34,
        id_kriteria: 3,
        id_subkriteria: 11,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 35,
        id_kriteria: 3,
        id_subkriteria: 11,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 36,
        id_kriteria: 3,
        id_subkriteria: 11,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 37,
        id_kriteria: 3,
        id_subkriteria: 12,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 38,
        id_kriteria: 3,
        id_subkriteria: 12,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 39,
        id_kriteria: 3,
        id_subkriteria: 12,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 40,
        id_kriteria: 3,
        id_subkriteria: 15,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 41,
        id_kriteria: 3,
        id_subkriteria: 15,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 42,
        id_kriteria: 3,
        id_subkriteria: 15,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 43,
        id_kriteria: 3,
        id_subkriteria: 13,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 44,
        id_kriteria: 3,
        id_subkriteria: 14,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 45,
        id_kriteria: 3,
        id_subkriteria: 11,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 46,
        id_kriteria: 3,
        id_subkriteria: 11,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 47,
        id_kriteria: 3,
        id_subkriteria: 14,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 48,
        id_kriteria: 3,
        id_subkriteria: 11,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 49,
        id_kriteria: 3,
        id_subkriteria: 12,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 50,
        id_kriteria: 3,
        id_subkriteria: 11,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 51,
        id_kriteria: 3,
        id_subkriteria: 12,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 52,
        id_kriteria: 3,
        id_subkriteria: 15,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 53,
        id_kriteria: 3,
        id_subkriteria: 12,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 54,
        id_kriteria: 3,
        id_subkriteria: 11,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 55,
        id_kriteria: 3,
        id_subkriteria: 15,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 56,
        id_kriteria: 3,
        id_subkriteria: 12,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 57,
        id_kriteria: 3,
        id_subkriteria: 15,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 58,
        id_kriteria: 3,
        id_subkriteria: 15,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 59,
        id_kriteria: 3,
        id_subkriteria: 11,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 60,
        id_kriteria: 3,
        id_subkriteria: 14,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 61,
        id_kriteria: 3,
        id_subkriteria: 11,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 62,
        id_kriteria: 3,
        id_subkriteria: 15,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 63,
        id_kriteria: 3,
        id_subkriteria: 14,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 64,
        id_kriteria: 3,
        id_subkriteria: 15,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 65,
        id_kriteria: 3,
        id_subkriteria: 15,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 66,
        id_kriteria: 3,
        id_subkriteria: 13,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 67,
        id_kriteria: 3,
        id_subkriteria: 14,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 68,
        id_kriteria: 3,
        id_subkriteria: 12,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 69,
        id_kriteria: 3,
        id_subkriteria: 11,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 70,
        id_kriteria: 3,
        id_subkriteria: 11,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 71,
        id_kriteria: 3,
        id_subkriteria: 14,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 72,
        id_kriteria: 3,
        id_subkriteria: 14,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 73,
        id_kriteria: 3,
        id_subkriteria: 14,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 74,
        id_kriteria: 3,
        id_subkriteria: 15,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 75,
        id_kriteria: 3,
        id_subkriteria: 14,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 76,
        id_kriteria: 3,
        id_subkriteria: 12,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 77,
        id_kriteria: 3,
        id_subkriteria: 14,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 78,
        id_kriteria: 3,
        id_subkriteria: 13,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 79,
        id_kriteria: 3,
        id_subkriteria: 11,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 80,
        id_kriteria: 3,
        id_subkriteria: 14,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 81,
        id_kriteria: 3,
        id_subkriteria: 14,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 82,
        id_kriteria: 3,
        id_subkriteria: 14,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 83,
        id_kriteria: 3,
        id_subkriteria: 15,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 84,
        id_kriteria: 3,
        id_subkriteria: 14,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 85,
        id_kriteria: 3,
        id_subkriteria: 13,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 86,
        id_kriteria: 3,
        id_subkriteria: 12,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 87,
        id_kriteria: 3,
        id_subkriteria: 14,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 88,
        id_kriteria: 3,
        id_subkriteria: 14,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 89,
        id_kriteria: 3,
        id_subkriteria: 12,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 90,
        id_kriteria: 3,
        id_subkriteria: 15,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 91,
        id_kriteria: 3,
        id_subkriteria: 13,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 92,
        id_kriteria: 3,
        id_subkriteria: 14,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 93,
        id_kriteria: 3,
        id_subkriteria: 15,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 94,
        id_kriteria: 3,
        id_subkriteria: 13,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 95,
        id_kriteria: 3,
        id_subkriteria: 11,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 96,
        id_kriteria: 3,
        id_subkriteria: 15,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 97,
        id_kriteria: 3,
        id_subkriteria: 15,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 98,
        id_kriteria: 3,
        id_subkriteria: 11,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 99,
        id_kriteria: 3,
        id_subkriteria: 13,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id_alternatif: 100,
        id_kriteria: 3,
        id_subkriteria: 12,
        createdAt: new Date(),
        updatedAt: new Date()
       }
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("tbl_alternatif_values", null, {});
  },
};
