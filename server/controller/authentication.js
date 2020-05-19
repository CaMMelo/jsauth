const express = require("express");
const app = express();

app.post("/", (req, res) => {
  // get the authentication here!!!
});

module.exports = (parent) => {
  parent.use("/auth", app);
};
