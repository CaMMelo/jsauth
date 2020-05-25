const { Op } = require("sequelize");
const Role = require("../../../database/models/role");

module.exports = (names) => {
  return new Promise(async (resolve, reject) => {
    if (names.length == 0) {
      return reject({
        status: 400,
        errors: "names must be provided.",
      });
    }

    if (names.some((name) => name.trim() === "")) {
      return reject({
        status: 400,
        errors: "no name should be empty.",
      });
    }

    const has_any =
      (await Role.count({ where: { name: { [Op.in]: names } } })) > 0;

    if (has_any) {
      return reject({
        status: 400,
        errors: "some role has already been defined.",
      });
    }

    const roles = await Role.bulkCreate(names.map((name) => ({ name })));

    return resolve(roles);
  });
};
