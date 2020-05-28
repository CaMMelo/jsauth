const uuid = require("uuid");
const bcrypt = require("bcrypt");
const User = require("../../../database/models/user");

module.exports = (input) => {
  return new Promise(async (resolve, reject) => {
    const id = uuid.v4();
    const password = await bcrypt.hash(input.password, 10);
    const user = await User.create({
      id,
      password,
      name: input.name,
      email: input.email,
    });
    return resolve(user);
  });
};
