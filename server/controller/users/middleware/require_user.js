const { uuid_regex } = require("../regex");
const User = require("../../../database/models/user");

module.exports = async (req, res, next) => {
  const { id } = req.params;
  if (!uuid_regex.test(id)) {
    return res.status(400).send("invalid id.");
  }
  const user = await User.findByPk(id);
  if (!user) {
    return res.status(404).send("not found.");
  }
  req.user = user;
  return next();
}