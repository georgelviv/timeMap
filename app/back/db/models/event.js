var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var eventModel = new Schema({
  title: String,
  description: String,
  date: Date,
  author: Number,
  tags: Array,
  coordinates: {
    longitude: String,
    latitude: String
  }
});
module.exports = mongoose.model('Event', eventModel);
