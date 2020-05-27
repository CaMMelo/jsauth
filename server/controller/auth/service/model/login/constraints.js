const { NotNull } = require("../../../../../validation/constraints");

module.exports = {
  email: [NotNull],
  password: [NotNull],
};
