const ArgumentBuilder = (req, arguments) => {
  return new Promise(async (resolve, reject) => {
    const errors = [];
    const args = {};
    for (let field in arguments) {
      for (let argument in arguments[field]) {
        await arguments[field][argument](req[field]).then(
          (result) => {
            args[argument] = result;
          },
          (err) => {
            errors.push(...err);
          }
        );
      }
    }
    if (errors.length === 0) {
      resolve(args);
    } else {
      reject(errors);
    }
  });
};

module.exports = (callback, args) => {
  return async (req, res) => {
    return await ArgumentBuilder(req, args)
      .then(
        (arguments) => {
          return callback(arguments);
        },
        (errors) => {
          res.status(400).send(errors);
        }
      )
      .then(
        (result) => {
          return res.send(result);
        },
        ({ status, errors }) => {
          res.status(status).send(errors);
        }
      );
  };
};
