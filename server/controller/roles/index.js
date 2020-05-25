const express = require("express");
const Authenticated = require("../../middleware/authenticated");
const Protected = require("../../middleware/protected");
const RequestHandler = require("../../utils/request_handler");
const Create = require("./service/create");
const Activate = require("./service/activate");
const Deactivate = require("./service/deactivate");
const Delete = require("./service/delete");
const app = express();

app.use(express.json());
app.use(Authenticated, Protected(["ADMIN"]));

app.post(
  "/",
  RequestHandler((req) => {
    const { names } = req.body;
    return Create(names);
  })
);

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

app.delete(
  "/:id/delete",
  RequestHandler((req) => {
    const { id } = req.params;
    return Delete(id);
  })
)

module.exports = (parent) => {
  parent.use("/roles", app);
};
