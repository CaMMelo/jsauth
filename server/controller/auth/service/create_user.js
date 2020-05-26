const uuid = require("uuid");
const bcrypt = require("bcrypt");
const User = require("../../../database/models/user");

const SignUpModel = require("./model/sign_up");

const Validator = new (require("./validation/input"))();

module.exports = (user) => {
  const input = new SignUpModel(user);
  return new Promise((resolve, reject) => {
    input
      .accept(Validator)
      .then(async (res) => {
        const id = uuid.v4();
        const password = await bcrypt.hash(input.password, 10);
        const user = await User.create({
          id,
          password,
          name: input.name,
          email: input.email,
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
