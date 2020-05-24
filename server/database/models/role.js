const { Model, DataTypes } = require("sequelize");

class Role extends Model {
  static init(sequelize) {
    super.init(
      {
        name: DataTypes.STRING,
        active: DataTypes.BOOLEAN,
      },
      {
        sequelize,
      }
    );
  }

  static associate(models) {
    this.belongsToMany(models.User, {
      through: "user_roles",
      foreignKey: "role_id",
      as: "users",
    });
  }
}

module.exports = Role;
