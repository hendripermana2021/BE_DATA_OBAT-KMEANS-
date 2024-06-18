'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tbl_alternatif extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  tbl_alternatif.init({
    name_obat: DataTypes.STRING,
    detail_penyembuhan: DataTypes.STRING,
    detail_efek: DataTypes.STRING,
    cluster: DataTypes.STRING,
    qty_barang: DataTypes.INTEGER,
    harga_barang: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'tbl_alternatif',
  });
  return tbl_alternatif;
};