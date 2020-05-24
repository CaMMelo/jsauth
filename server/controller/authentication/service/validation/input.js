module.exports = function () {
  this.visitLogInModel = (model) => {
    const errors = [];
    if (!model.email) {
      errors.push("email must be provided.");
    }
    if (!model.password) {
      errors.push("password must be provided.");
    }
    return {
      valid: errors.length === 0,
      errors,
    };
  };
};