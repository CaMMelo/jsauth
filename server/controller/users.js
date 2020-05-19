const express = require("express");
const app = express();

app.get("/", (req, res) => {
  return res.send("not implemented!");
});

app.get("/:id", (req, res) => {
  return res.send("not implemented!");
});

app.post("/", (req, res) => {
  return res.send("not implemented!");
});

app.put("/:id", (req, res) => {
  return res.send("not implemented!");
});

app.delete("/:id", (req, res) => {
  return res.send("not implemented!");
});

app.patch("/:id/activate", (req, res) => {
  return res.send("not implemented!");
});

app.patch("/:id/deactivate", (req, res) => {
  return res.send("not implemented!");
});

app.patch("/:id/password", (req, res) => {
  return res.send("not implemented!");
});

module.exports = (parent) => {
  parent.use("/users", app);
};
