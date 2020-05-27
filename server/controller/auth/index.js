const express = require("express");
const RequestHandler = require("../../middleware/request_handler");
const CreateUser = require("./service/create_user");
const Authenticate = require("./service/authenticate");
const LoginModel = require("./service/model/login");
const SignUpModel = require("./service/model/signup");
const app = express();

app.use(express.json());

app.post(
  "/signup",
  RequestHandler((req) => {
    const { name, email, password } = req.body;
    const input = new SignUpModel({ name, email, password });
    return CreateUser(input);
  })
);

app.post(
  "/login",
  RequestHandler((req) => {
    const { email, password } = req.body;
    const input = new LoginModel({ email, password });
    return Authenticate(input);
  })
);

module.exports = (parent) => {
  parent.use("/auth", app);
};
