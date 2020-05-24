const { Model, DataTypes } = require("sequelize");

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        active: DataTypes.BOOLEAN,
        password: DataTypes.STRING,
      },
      {
        sequelize,
      }
    );
  }

  static associate(models) {
    this.belongsToMany(models.Role, {
      through: "user_roles",
      foreignKey: "user_id",
      as: "roles",
    });
  }
}

module.exports = User;
