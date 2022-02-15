module.exports = {};

const withTM = require("next-transpile-modules")(["@themes/ondrejsika-theme"]);
module.exports = withTM(module.exports);
