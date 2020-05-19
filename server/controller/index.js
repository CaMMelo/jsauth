const fs = require("fs");
const path = require("path");

// make sure all controllers are imported automatically
module.exports = (app) => {
  const dir = path.join(__dirname);
  let controllers = [];
  fs.readdirSync(dir)
    .filter((dir) => !/^index.js$/.test(dir))  // remove index.js file
    .forEach((file) => {
      file = path.join(dir, file);
      require(file)(app);
    });
};
