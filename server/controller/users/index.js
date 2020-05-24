const express = require("express");
const app = express();
const CreateUser = require("./service/create_user");

app.use(express.json());

app.post("/", async (req, res) => {
  const { name, email, password } = req.body;
  return CreateUser({ name, email, password }).then(
    (result) => {
      return res.send(result);
    },
    ({ status, errors }) => {
      return res.status(status).send(errors);
    }
  );
});

module.exports = (parent) => {
  parent.use("/users", app);
};
