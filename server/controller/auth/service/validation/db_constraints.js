const User = require("../../../../database/models/user");

module.exports = function () {
  this.visitSignUpModel = async (model) => {
    const errors = [];
    const user = await User.findAll({ where: { email: model.email } });
    if (user.length > 0) {
      errors.push("email already registered.");
    }
    return {
      valid: errors.length === 0,
      errors,
    };
  };
};
