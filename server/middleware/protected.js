const Role = require("../database/models/role");

module.exports = (roles) => {
  return (req, res, next) => {
    const { user } = req;
    if (!req.user || !req.user.active) {
      return res.status(403).send("unauthorized.");
    }

    const has = user.roles
      .filter((role) => role.active)
      .map((role) => role.name)
      .some((role) => roles.includes(role));

    if (!has) {
      return res.status(403).send("permission denied.");
    }

    return next();
  };
};
