var mongoose     = require('mongoose'),
    dbConnection = require('./dbConnection'),
    Schema       = mongoose.Schema;

var schema = new Schema({
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

module.exports = mongoose.model("event", schema);