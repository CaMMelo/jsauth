const dbConstraintsValidator = new (require("./db_constraints"))();

module.exports = function () {
  this.visitSignUpModel = async (model) => {
    const errors = [];
    if (!model.name) {
      errors.push("name must be provided.");
    }
    if (!model.email) {
      errors.push("email must be provided.");
    } else {
      const db_constraints = await model.accept(dbConstraintsValidator);
      if(!db_constraints.valid) {
        errors.push(...db_constraints.errors);
      }
    }
    if (!model.password) {
      errors.push("password must be provided.");
    }
    return {
      valid: errors.length === 0,
      errors,
    };
  };

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
