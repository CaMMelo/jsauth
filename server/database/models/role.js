const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Role = sequelize.define(
    "Role",
    {
      name: DataTypes.STRING,
      active: DataTypes.BOOLEAN,
    },
    {}
  );
  
  Role.associate = function (models) {
    // associations can be defined here
  };

  return Role;
}

