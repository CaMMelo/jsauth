module.exports = function ({ email, password }) {
  this.email = email;
  this.password = password;

  this.accept = (visitor) => {
    if(visitor.visitLogInModel) {
      return visitor.visitLogInModel(this);
    }
  }
};
