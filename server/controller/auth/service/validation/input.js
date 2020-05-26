const { email_regex } = require("../../../../utils/regex");
const User = require("../../../../database/models/user");

module.exports = function () {
  this.visitSignUpModel = (model) => {
    return new Promise(async (resolve, reject) => {
      const errors = [];

      if (!model.name) {
        errors.push("name must be provided.");
      }

      if (!model.email) {
        errors.push("email must be provided.");
      } else {
        if (!email_regex.test(model.email)) {
          errors.push("invalid email.");
        }
        const user = await User.findOne({ where: { email: model.email } });
        if (user) {
          errors.push("email must be unique.");
        }
      }

      if (!model.password) {
        errors.push("password must be provided.");
      }

      if (errors.length == 0) {
        resolve(model);
      } else {
        reject(errors);
      }
    });
  };

  this.visitLogInModel = (model) => {
    return new Promise((resolve, reject) => {
      const errors = [];
      if (!model.email) {
        errors.push("email must be provided.");
      }

      if (!model.password) {
        errors.push("password must be provided.");
      }

      if (errors.length == 0) {
        resolve(model);
      } else {
        reject(errors);
      }
    });
  };
};
