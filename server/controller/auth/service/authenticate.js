require("dotenv").config();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../../../database/models/user");
const Validator = require("./validation/input");

module.exports = (login) => {
  return new Promise((resolve, reject) => {
    login
      .accept(Validator)
      .then(async () => {
        const user = await User.findOne({ where: { email: login.email } });
        if (!user) {
          return reject({
            status: 404,
            errors: ["user not found."],
          });
        }
        const valid = await bcrypt.compare(login.password, user.password);
        if (!valid) {
          return reject({
            status: 401,
            errors: ["invalid password."],
          });
        }
        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
          expiresIn: parseInt(process.env.JWT_EXPRIRES),
        });
        resolve(token);
      })
      .catch((errors) => {
        reject({
          status: 400,
          errors,
        });
      });
  });
};
