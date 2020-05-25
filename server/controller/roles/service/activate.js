const { Op } = require("sequelize");
const Role = require("../../../database/models/role");

module.exports = (ids) => {
  return new Promise(async (resolve, reject) => {
    if (ids.length == 0) {
      return reject({
        status: 400,
        errors: "ids must be provided.",
      });
    }

    ids = ids.map((id) => parseInt(id));

    if ((await Role.count({ where: { id: { [Op.in]: ids } } })) != ids.length) {
      return reject({
        status: 400,
        errors: "not found.",
      });
    }

    await Role.update({ active: true }, { where: { id: ids } });

    return resolve(true);
  });
};
