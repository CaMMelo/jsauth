const validate = async (obj, constraints) => {
  const errors = [];
  for (const field in constraints) {
    for(let i in constraints[field]) {
      const rule = constraints[field][i];
      await rule(obj[field]).catch((message) => {
        errors.push(`${field}: ${message}`);
      });
    }
  }
  return new Promise((resolve, reject) => {
    if (errors.length === 0) {
      resolve(obj);
    } else {
      reject(errors);
    }
  });
};


module.exports = (constraints) => (model) => validate(model, constraints);
