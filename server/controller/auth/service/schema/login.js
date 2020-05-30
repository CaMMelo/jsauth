const { NotNull } = require("../../../../validation/constraints");
const Schema = require("../../../../validation/schema");

module.exports = Schema({
  email: {
    type: "string",
    constraints: [NotNull],
  },
  password: {
    type: "string",
    constraints: [NotNull],
  },
});
