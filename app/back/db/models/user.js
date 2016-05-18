var mongoose = require('mongoose'),
    passportLocalMongoose = require('passport-local-mongoose');

var Schema = mongoose.Schema;
var User = new Schema({
  username: {
    type: String,
    unique: true
  },
  password: String,
  email: String,
  role: {
    type: String,
    default: 'user'
  }
});

User.plugin(passportLocalMongoose);
module.exports = mongoose.model('User', User);;
