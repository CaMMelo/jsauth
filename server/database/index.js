const dbConfig = require("../config/database");
const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");

let sequelize = null;

const load_models = (sequelize) => {
  const dir = path.join(__dirname, "models");
  let models = [];
  fs.readdirSync(dir).forEach((file) => {
    file = path.join(dir, file);
    model = require(file)(sequelize);
    models.push(model);
  });

  models.forEach((model) => {
    model.associate(sequelize.models);
  });
};

module.exports = () => {
  if(!sequelize) {
    sequelize = new Sequelize(dbConfig);
    load_models(sequelize);
  }
  return sequelize;
};
