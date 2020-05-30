require("dotenv").config();
const RequestHandler = require("../../../middleware/request_handler");
const User = require("../../../database/models/user");
const LoginSchema = require("./schema/login");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const Login = (req, login) => {
  return new Promise(async (resolve, reject) => {
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
  });
};


module.exports = RequestHandler(Login, {
  body: LoginSchema,
});
