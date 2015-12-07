var mongoose = require("mongoose"),
    config = require("../config");

mongoose.connect(config.get("mongoose:" + config.get('NODE_ENV') + ":uri"));

module.exports = mongoose;