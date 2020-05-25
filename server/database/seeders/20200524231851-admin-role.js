"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    const now = new Date();
    return queryInterface.bulkInsert(
      "roles",
      [
        {
          id: 1,
          name: "ADMIN",
          active: true,
          created_at: now,
          updated_at: now,
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("roles", { id: 1 }, {});
  },
};
