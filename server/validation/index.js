const ValidateType = (obj, type, key) => {
  return new Promise(async (resolve, reject) => {
    if (
      obj === undefined ||
      obj === null ||
      (typeof type === "string" && typeof obj === type)
    ) {
      return resolve(obj);
    }
    await ValidateSchema(obj, type).then(
      (obj) => resolve(obj),
      (errors) => reject({ [key]: errors })
    );
  });
};

const ValidateSchema = async (obj, schema) => {
  let errors = {};
  const constraints = schema.prototype._constraints;
  for (key in constraints) {
    const type = constraints[key].type;
    const cons = constraints[key].constraints;
    const data = obj[key];
    await ValidateType(data, type, key).then(
      async (data) => {
        for(fn in cons) {
          await cons[fn](data).then(
            () => {},
            (message) => {
              if (!errors[key]) {
                errors[key] = { constraints: [] };
              }
              errors[key].constraints.push(message);
            }
          );
        }
      },
      (message) => {
        errors = message;
      }
    );
  }
  return new Promise((resolve, reject) => {
    if (Object.keys(errors).length === 0) {
      resolve(obj);
    } else {
      reject(errors);
    }
  });
};

module.exports = ValidateSchema;
