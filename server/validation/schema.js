module.exports = (fields) => {
  function Class(args) {
    Object.keys(fields).forEach((key) => {
      this[key] = args[key];
    });
  }
  Class.prototype._constraints = fields;
  return Class;
};