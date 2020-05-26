const express = require("express");
const RequestHandler = require("../../utils/request_handler");
const CreateUser = require("./service/create_user");
const Authenticate = require("./service/authenticate");
const LoginModel = require("./service/model/login");
const SignUpModel = require("./service/model/sign_up");
const app = express();

app.use(express.json());

app.post(
  "/signup",
  RequestHandler((req) => {
    const { name, email, password } = req.body;
    const input = new LoginModel({ name, email, password });
    return CreateUser(input);
  })
);

app.post(
  "/login",
  RequestHandler((req) => {
    const { email, password } = req.body;
    const input = new SignUpModel({ email, password });
    return Authenticate({ email, password });
  })
);

module.exports = (parent) => {
  parent.use("/auth", app);
};
