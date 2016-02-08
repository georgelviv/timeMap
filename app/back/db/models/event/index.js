var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var eventApi = {
  init: init
};

var db,
    factory,
    isInited = false;

module.exports = eventApi;

function init () {
  if (isInited) {
    return;
  }
  isInited = true;

  defineEventSchema();
  eventApi.model = mongoose.model('Event', eventApi.schema);
  db = require('./../../index');
  db.models.Event = eventApi.model;
  factory = require('./factory');
  factory.init();
}

function defineEventSchema() {
  eventApi.schema = new Schema({
      title: String,
      description: String,
      date: Date
  });
}
