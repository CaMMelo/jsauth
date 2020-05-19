const express = require("express");
const app = express();

app.post("/", (req, res) => {
  // get the authentication here!!!
  return res.send("not implemented!");
});

module.exports = (parent) => {
  parent.use("/auth", app);
};
