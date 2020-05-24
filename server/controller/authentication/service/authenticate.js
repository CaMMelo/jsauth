require("dotenv").config();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const LoginModel = require("./model/login");
const User = require("../../../database/models/user");
const inputValidator = new (require("./validation/input"))();

module.exports = (login) => {
  const input = new LoginModel(login);
  const { valid, errors } = input.accept(inputValidator);
  return new Promise(async (resolve, reject) => {
    if (valid) {
      const user = await User.findOne({ where: { email: login.email } });
      if (!user) {
        reject({
          status: 404,
          errors: "user not found.",
        });
      }
      if (!(await bcrypt.compare(login.password, user.password))) {
        reject({
          status: 401,
          errors: "invalid password.",
        });
      }
      const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
        expiresIn: 300,
      });
      resolve(token);
    } else {
      reject({
        status: 400,
        errors,
      });
    }
  });
};
