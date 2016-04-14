var mongoose = require('mongoose'),
    passportLocalMongoose = require('passport-local-mongoose');

var userApi = {
  init: init
};

var db,
    isInited = false;

module.exports = userApi;

function init () {
  if (isInited) {
    return;
  }
  isInited = true;

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

  userApi.model = mongoose.model('User', User);
  db = require('./../index');
  db.models.User = userApi.model;
}
