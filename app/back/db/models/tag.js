var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var tagModel = new Schema({
  name: String,
  color: String
});

module.exports = mongoose.model('Tag', tagModel);
