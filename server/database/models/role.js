const { Model, DataTypes } = require("sequelize");

class Role extends Model {
  static init(sequelize) {
    super.init(
      {
        name: DataTypes.STRING,
        active: DataTypes.BOOLEAN,
      },
      {
        sequelize
      }
    );
  }

  static associate(models) {
    // define associations
  }
}

module.exports = Role;
