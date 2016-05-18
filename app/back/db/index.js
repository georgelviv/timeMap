var mongoose = require('mongoose'),
    config = require('nconf');

var db = {
  init: init,
  models: {},
};

var user,
    isInited = false;

module.exports = db;

function init () {
  if (isInited) {
    return;
  }

  isInited = true;
  db.models.User = require('./models/user');
  db.models.Event = require('./models/event');
  mongoose.connect(config.get('db:' + config.get('NODE_ENV') + ':uri'), cbConnect);
}

function cbConnect (err) {
  if (err) {
    var errMsg = err.message || '';
    console.log('Database not connected: ', errMsg);
    return;
  }
  db.dbInstance = mongoose.connection.db;
  console.log('Database connected');
}
