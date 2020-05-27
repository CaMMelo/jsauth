module.exports = (callback) => {
  return async (req, res) => {
    return callback(req).then(
      (result) => {
        return res.send(result);
      },
      ({ status, errors }) => {
        return res.status(status).send(errors);
      }
    );
  }
};
