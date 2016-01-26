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
  defineModels();
  mongoose.connect(config.get('db:' + config.get('NODE_ENV') + ':uri'), cbConnect);
}

function defineModels () {
  var userModel, eventModel;
  
  userModel = require('./models/user');
  userModel.init();
  eventModel = require('./models/event');
  eventModel.init();
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
