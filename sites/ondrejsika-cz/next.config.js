module.exports = {};

const withTM = require("next-transpile-modules")(["@libs/common","@themes/ondrejsika-theme"]);
module.exports = withTM(module.exports);
