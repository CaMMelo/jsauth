module.exports = (constraint) => (field) => {
  return new Promise(async (resolve, reject) => {
    if (await constraint.fn(field)) {
      resolve(field);
    } else {
      reject(constraint.message);
    }
  });
};