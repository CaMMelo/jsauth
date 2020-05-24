const SignUpModel = require("../model/sign_up");
const User = require("../../../database/models/user");

const dbModelMapping = new (require("./mapping/db_model"))();
const inputValidator = new (require("./validator/input"))();

module.exports = async (user) => {
  const input = new SignUpModel(user);
  const { valid, errors } = await input.accept(inputValidator);
  return new Promise(async (resolve, reject) => {
    if (valid) {
      let user = await input.accept(dbModelMapping);
      return resolve(await User.create(user));
    } else {
      reject({
        status: 400,
        errors,
      });
    }
  });
};
