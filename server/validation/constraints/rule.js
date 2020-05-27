module.exports = (constraint) => (field) => {
  return new Promise((resolve, reject) => {
    if (constraint.fn(field)) {
      resolve();
    } else {
      reject(constraint.message);
    }
  });
};