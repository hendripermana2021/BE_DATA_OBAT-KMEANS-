'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tbl_centroid extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  tbl_centroid.init({
    id_centroid: DataTypes.INTEGER,
    name_cluster: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'tbl_centroid',
  });
  return tbl_centroid;
};