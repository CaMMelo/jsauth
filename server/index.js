require("dotenv").config();
require("./database")();

const express = require("express");
app = express();
require("./controller")(app);

port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
