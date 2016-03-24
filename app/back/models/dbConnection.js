var mongoose = require('mongoose'),
    config   = require('nconf');

// Build the connection string
//var dbURI = config.get('db:' + config.get('NODE_ENV') + ':uri');
var dbURI = "mongodb://admin:admin@ds027415.mongolab.com:27415/timemap";
console.log(dbURI);

// Create the database connection
mongoose.connect(dbURI);

// When successfully connected
mongoose.connection.on('connected', function () {
    console.log('Mongoose default connection open to ' + dbURI);
});

// If the connection throws an error
mongoose.connection.on('error',function (err) {
    console.log('Mongoose default connection error: ' + err);
});

// When the connection is disconnected
mongoose.connection.on('disconnected', function () {
    console.log('Mongoose default connection disconnected');
});
