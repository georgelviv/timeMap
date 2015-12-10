var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var user = {
  init: init
};

var db,
    isInited = false;

module.exports = user;

function init () {
  if (isInited) {
    return;
  }
  isInited = true;

  defineUserSchema();
  user.model = mongoose.model('User', user.schema);
  db = require('./../index');
  db.models.User = user.model;
}

function defineUserSchema() {
  user.schema = new Schema({
      username: {
          type: String,
          unique: true
      },
      age: Number
  });

  user.schema.methods.introducing = introducing;

  function introducing() {
      return 'Hi folks, my name is ' + this.username + ', ' + 'I am ' + this.age;
  }
}
