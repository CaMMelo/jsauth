const express = require("express");
const RequestHandler = require("../../utils/request_handler");
const CreateUser = require("./service/create_user");
const Authenticate = require("./service/authenticate");
const app = express();

app.use(express.json());

app.post(
  "/signup",
  RequestHandler((req) => {
    const { name, email, password } = req.body;
    return CreateUser({ name, email, password });
  })
);

app.post(
  "/login",
  RequestHandler((req) => {
    const { email, password } = req.body;
    return Authenticate({ email, password });
  })
);

module.exports = (parent) => {
  parent.use("/auth", app);
};
