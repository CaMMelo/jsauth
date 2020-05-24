require("dotenv").config();
const jwt = require("jsonwebtoken");
const User = require("../database/models/user");

module.exports = (req, res, next) => {
  const authorization = req.headers.authorization;

  if (!authorization) {
    return res.status(401).send("no authorization header provided.");
  }

  const [scheme, token] = authorization.split(" ");

  if (!/^Bearer$/i.test(scheme)) {
    return res.status(401).send("token error.");
  }

  return jwt.verify(token, process.env.JWT_SECRET, async (error, decoded) => {
    if (error) {
      return res.status(401).send(error);
    }

    const user = await User.findByPk(decoded.id, {
      include: {
        association: "roles",
        through: {
          attributes: [],
        },
      },
    });

    if (!user) {
      return res.status(403).send("unauthorized, user does not exist.");
    }

    req.user = user;
    return next();
  });
};
