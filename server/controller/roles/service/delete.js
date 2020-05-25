const Role = require("../../../database/models/role");

module.exports = (id) => {
  return new Promise(async (resolve, reject) => {
    id = parseInt(id);

    const role = await Role.findByPk(id);

    if (!role) {
      return reject({
        status: 404,
        errors: "role not found.",
      });
    }

    await role.destroy();

    return resolve(role);
  });
};
