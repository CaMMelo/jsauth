const express = require("express");
const RequestHandler = require("../../utils/request_handler");
const CreateUser = require("./service/create_user");
const app = express();

app.use(express.json());

app.post(
  "/",
  RequestHandler((req) => {
    const { name, email, password } = req.body;
    return CreateUser({ name, email, password });
  })
);

module.exports = (parent) => {
  parent.use("/users", app);
};
