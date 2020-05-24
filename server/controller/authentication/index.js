const express = require("express");
const app = express();
const bcrypt = require("bcrypt");
const User = require("../../database/models/user");

app.use(express.json());

app.post("/", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ where: { email } });
  if (!user) {
    return res.status(404).send("email not found");
  }
  if (!(await bcrypt.compare(password, user.password))) {
    return res.status(403).send("invalid password.");
  }
  return res.send(user);
});

module.exports = (parent) => {
  parent.use("/auth", app);
};
