"use strict";

const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");
const process = require("process");
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || "development";
const config = require(__dirname + "/../config/config.json")[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
  );
}

fs.readdirSync(__dirname)
  .filter((file) => {
    return (
      file.indexOf(".") !== 0 &&
      file !== basename &&
      file.slice(-3) === ".js" &&
      file.indexOf(".test.js") === -1
    );
  })
  .forEach((file) => {
    const model = require(path.join(__dirname, file))(
      sequelize,
      Sequelize.DataTypes
    );
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.tbl_alternatif = require("../models/tbl_alternatif.js")(
  sequelize,
  Sequelize
);
db.tbl_alternatif_value = require("../models/tbl_alternatif_value.js")(
  sequelize,
  Sequelize
);
db.tbl_kriteria = require("../models/tbl_kriteria.js")(sequelize, Sequelize);
db.tbl_subkriteria = require("../models/tbl_subkriteria.js")(
  sequelize,
  Sequelize
);
db.tbl_users = require("../models/tbl_users.js")(sequelize, Sequelize);
db.tbl_centroid = require("../models/tbl_centroid.js")(sequelize, Sequelize);

//ASSOCIATE KRITERIA
db.tbl_alternatif.hasMany(db.tbl_alternatif_value, {
  as: "value_alternatif",
  foreignKey: "id_alternatif",
});

db.tbl_alternatif_value.hasMany(db.tbl_subkriteria, {
  as: "subkriteria",
  foreignKey: "id",
});

db.tbl_alternatif_value.belongsTo(db.tbl_kriteria, {
  as: "kriteria",
  foreignKey: "id_subkriteria",
});

module.exports = db;
