'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('tbl_alternatifs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name_obat: {
        type: Sequelize.STRING
      },
      detail_penyembuhan: {
        type: Sequelize.STRING
      },
      detail_efek: {
        type: Sequelize.STRING
      },
      cluster: {
        type: Sequelize.STRING
      },
      qty_barang: {
        type: Sequelize.INTEGER
      },
      harga_barang: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('tbl_alternatifs');
  }
};