const express = require("express");
const Authenticated = require("../../middleware/authenticated");
const Protected = require("../../middleware/protected");
const RequestHandler = require("../../utils/request_handler");
const Activate = require("./service/activate");
const Deactivate = require("./service/deactivate");
const app = express();

app.use(express.json());
app.use(Authenticated, Protected(["ADMIN"]));

app.patch(
  "/activate",
  RequestHandler((req) => {
    const { ids } = req.body;
    return Activate(ids);
  })
);

app.patch(
  "/deactivate",
  RequestHandler((req) => {
    const { ids } = req.body;
    return Deactivate(ids);
  })
);

module.exports = (parent) => {
  parent.use("/roles", app);
};
