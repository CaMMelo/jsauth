const RequestValidation = require("../../middleware/request_validation");
const Schema = require("../../validation/schema");
const SignUpSchema = require("./service/schema/signup");
const LoginSchema = require("./service/schema/login");
const SignUp = require("./service/signup");
const Login = require("./service/login");
const express = require("express");
const app = express();

app.use(express.json());

app.post(
  "/signup",
  RequestValidation(
    Schema({
      body: {
        type: SignUpSchema,
      },
    })
  ),
  SignUp
);

app.post(
  "/login",
  RequestValidation(
    Schema({
      body: {
        type: LoginSchema,
      },
    })
  ),
  Login
);

module.exports = (parent) => {
  parent.use("/auth", app);
};
