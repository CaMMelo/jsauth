const uuid = require("uuid");
const bcrypt = require("bcrypt");

module.exports = function () {
  this.visitSignUpModel = async (model) => {
    const id = uuid.v4();
    const password = await bcrypt.hash(model.password, 10);
    return {
      id,
      password,
      name: model.name,
      email: model.email,
    };
  };
};
