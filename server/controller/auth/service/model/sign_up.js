module.exports = function ({name, email, password}) {
  this.name = name;
  this.email = email;
  this.password = password;

  this.accept = (visitor) => {
    if(visitor.visitSignUpModel) {
      return visitor.visitSignUpModel(this);
    }
  }
}