const SignUpModel = require("./model/sign_up");


const dbModelMapping = new (require("./mapping/db_model"))();
const inputValidator = new (require("./validation/input"))();

module.exports = async (user) => {
  const input = new SignUpModel(user);
  const { valid, errors } = await input.accept(inputValidator);
  return new Promise(async (resolve, reject) => {
    if (valid) {
      const user = await input.accept(dbModelMapping);
      return resolve(user);
    } else {
      return reject({
        status: 400,
        errors,
      });
    }
  });
};
