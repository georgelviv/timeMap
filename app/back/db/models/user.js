var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

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

  defineUserSchema();
  userApi.model = mongoose.model('User', userApi.schema);
  db = require('./../index');
  db.models.User = userApi.model;
}

function defineUserSchema() {
  userApi.schema = new Schema({
      username: {
          type: String,
          unique: true
      },
      password: String,
      email: String
  });

  userApi.schema.methods.introducing = introducing;

}
