const express = require("express");
const Authenticate = require("./service/authenticate");
const RequestHandler = require("../../utils/request_handler");
const app = express();

app.use(express.json());

app.post(
  "/",
  RequestHandler((req) => {
    const { email, password } = req.body;
    return Authenticate({ email, password });
  })
);

module.exports = (parent) => {
  parent.use("/auth", app);
};
