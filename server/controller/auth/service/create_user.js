const uuid = require("uuid");
const bcrypt = require("bcrypt");
const User = require("../../../database/models/user");

const Validator = require("./validation/input");

module.exports = (user) => {
  return new Promise((resolve, reject) => {
    user
      .accept(Validator)
      .then(async () => {
        const id = uuid.v4();
        const password = await bcrypt.hash(user.password, 10);
        const user = await User.create({
          id,
          password,
          name: user.name,
          email: user.email,
        });
        return resolve(user);
      })
      .catch((errors) => {
        reject({
          status: 400,
          errors,
        });
      });
  });
};
