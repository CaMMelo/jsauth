"use strict";
const bcrypt = require("bcrypt");

const id = "cb1ea12c-9320-48e4-9249-153532026e4a";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const now = new Date();
    const password = await bcrypt.hash("admin", 10);
    return queryInterface.bulkInsert(
      "users",
      [
        {
          id,
          name: "admin",
          email: "admin@admin",
          password,
          active: true,
          created_at: now,
          updated_at: now,
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', { id }, {});
  }
};
