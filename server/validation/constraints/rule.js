module.exports = (constraint) => (field) => {
  return new Promise(async (resolve, reject) => {
    if (await constraint.fn(field)) {
      resolve();
    } else {
      reject(constraint.message);
    }
  });
};