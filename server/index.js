require("dotenv").config();
require("./database")();

const express = require("express");
app = express();
require("./controller")(app);

app.use("*", (req, res) => {
  return res.status(404).send("Sorry but I cant do that.");
});

port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
