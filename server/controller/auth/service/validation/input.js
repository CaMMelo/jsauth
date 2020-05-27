const Validator = require("../../../../validation/constraints/validator");
const LogInConstraints = require("../model/login/constraints");
const SignUpConstraints = require("../model/signup/constraints");

module.exports = {
  visitLogInModel: Validator(LogInConstraints),
  visitSignUpModel: Validator(SignUpConstraints),
};
