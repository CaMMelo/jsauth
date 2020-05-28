const { email_regex } = require("../../../../utils/regex");
const {
  NotNull,
  MinLength,
  Matches,
  Unique,
} = require("../../../../validation/constraints");
const Validator = require("../../../../validation/constraints/validator");
const User = require("../../../../database/models/user");

const constraints = {
  name: [NotNull],
  email: [NotNull, Matches(email_regex), Unique(User, "email")],
  password: [NotNull, MinLength(6)],
};

module.exports = ({ name, email, password }) =>
  Validator({ name, email, password }, constraints);
