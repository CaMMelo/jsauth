const uuid = require("uuid");
const bcrypt = require("bcrypt");
const User = require("../../../../database/models/user");

module.exports = function () {
  this.visitSignUpModel = async (model) => {
    const id = uuid.v4();
    const password = await bcrypt.hash(model.password, 10);
    return await User.create({
      id,
      password,
      name: model.name,
      email: model.email,
    });
  };
};
