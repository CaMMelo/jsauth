const { email_regex } = require("../../../../utils/regex");
const User = require("../../../../database/models/user");
const {
  NotNull,
  MinLength,
  Matches,
  Unique,
} = require("../../../../validation/constraints");
const Schema = require("../../../../validation/schema");

module.exports = Schema({
  name: {
    type: "string",
    constraints: [NotNull],
  },
  email: {
    type: "string",
    constraints: [NotNull, Matches(email_regex), Unique(User, "email")],
  },
  password: {
    type: "string",
    constraints: [NotNull, MinLength(6)],
  },
});
