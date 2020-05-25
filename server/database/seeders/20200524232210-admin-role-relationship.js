"use strict";

const user_id = "cb1ea12c-9320-48e4-9249-153532026e4a";

module.exports = {
  up: (queryInterface, Sequelize) => {
    const now = new Date();
    return queryInterface.bulkInsert(
      "user_roles",
      [
        {
          user_id,
          role_id: 1,
          created_at: now,
          updated_at: now,
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("user_roles", { role_id: 1, user_id }, {});
  },
};
