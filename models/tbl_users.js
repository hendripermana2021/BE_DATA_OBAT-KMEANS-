'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tbl_users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  tbl_users.init({
    name_user: DataTypes.STRING,
    sex: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    real_password: DataTypes.STRING,
    role_id: DataTypes.STRING,
    accesstoken: DataTypes.TEXT,
    refreshtoken: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'tbl_users',
  });
  return tbl_users;
};