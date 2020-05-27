const { email_regex } = require("../../../../../utils/regex");
const {
  NotNull,
  MinLength,
  Matches,
  Unique,
} = require("../../../../../validation/constraints");
const User = require("../../../../../database/models/user");

module.exports = {
  name: [NotNull],
  email: [NotNull, Matches(email_regex), Unique(User, "email")],
  password: [NotNull, MinLength(6)],
};
