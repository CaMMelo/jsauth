const dbConfig = require("../config/database");
const Sequelize = require("sequelize");

const sequelize = new Sequelize(dbConfig);

module.exports = sequelize;
