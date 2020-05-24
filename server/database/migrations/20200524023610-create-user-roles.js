"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("user_roles", {
      user_id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true,
        references: { model: "users", key: "id" }
      },
      role_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        references: { model: "roles", key: "id" }
      },
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("user_roles");
  },
};
