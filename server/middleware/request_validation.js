const SchemaValidation = require("../validation");

module.exports = (schema) => async (req, res, next) => {
  await SchemaValidation(req, schema).then(
    () => {
      next();
    },
    (message) => {
      res.status(400).send(message);
    }
  );
};
