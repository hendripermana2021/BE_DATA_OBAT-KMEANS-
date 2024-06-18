'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tbl_alternatif_value extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  tbl_alternatif_value.init({
    id_alternatif: DataTypes.INTEGER,
    id_kriteria: DataTypes.INTEGER,
    id_subkriteria: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'tbl_alternatif_value',
  });
  return tbl_alternatif_value;
};