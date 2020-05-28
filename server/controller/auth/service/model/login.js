const { NotNull } = require("../../../../validation/constraints");
const Validator = require("../../../../validation/constraints/validator");

const constraints = {
  email: [NotNull],
  password: [NotNull],
};

module.exports = ({ email, password }) =>
  Validator({ email, password }, constraints);
