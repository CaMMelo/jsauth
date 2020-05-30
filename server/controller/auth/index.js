const RequestValidation = require("../../middleware/request_validation");
const Schema = require("../../validation/schema");
const SignUpModel = require("./service/model/signup");
const SignUp = require("./service/signup");
const express = require("express");
const app = express();

app.use(express.json());

app.post(
  "/signup",
  RequestValidation(
    Schema({
      body: {
        type: SignUpModel,
      },
    })
  ),
  SignUp
);

app.post("/login");

module.exports = (parent) => {
  parent.use("/auth", app);
};
