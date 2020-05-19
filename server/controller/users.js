const express = require("express");
const app = express();

app.get("/", (req, res) => {
  //
});

app.get("/:id", (req, res) => {
  //
});

app.post("/", (req, res) => {
  //
});

app.put("/:id", (req, res) => {
  //
});

app.delete("/:id", (req, res) => {
  //
});

app.patch("/:id/activate", (req, res) => {
  //
});

app.patch("/:id/deactivate", (req, res) => {
  //
});

app.patch("/:id/password", (req, res) => {
  //
});

module.exports = (parent) => {
  parent.use("/users", app);
};
