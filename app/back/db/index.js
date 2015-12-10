var mongoose = require('mongoose'),
    config = require('nconf');

var db = {
  init: init,
  models: {}
};

var user,
    isInited = false;

module.exports = db;

function init () {
  if (isInited) {
    return;
  }

  isInited = true;

  user = require('./models/user');
  user.init();
  mongoose.connect(config.get('db:' + config.get('NODE_ENV') + ':uri'), connectCB);
}

function connectCB (err) {
  if (err) {
    var errMsg = err.message || '';
    console.log('Database not connected: ', errMsg);
    return;
  }
  console.log('Database connected');
}
