const express = require("express");
const RequestHandler = require("../../middleware/request_handler");
const SignUp = require("./service/signup");
const Login = require("./service/login");
const LoginModel = require("./service/model/login");
const SignUpModel = require("./service/model/signup");
const app = express();

app.use(express.json());

app.post(
  "/signup",
  RequestHandler(
    ({ input }) => {
      return SignUp(input);
    },
    {
      body: {
        input: SignUpModel,
      },
    }
  )
);

app.post(
  "/login",
  RequestHandler(
    ({ login }) => {
      return Login(login);
    },
    {
      body: {
        login: LoginModel,
      },
    }
  )
);

module.exports = (parent) => {
  parent.use("/auth", app);
};
