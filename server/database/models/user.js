"use strict";
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      uuid: DataTypes.STRING,
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      active: DataTypes.BOOLEAN,
      password: DataTypes.STRING,
    },
    {}
  );
  User.associate = function (models) {
    // associations can be defined here
  };
  return User;
};
