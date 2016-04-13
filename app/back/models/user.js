var mongoose     = require('mongoose'),
    dbConnection = require('./dbConnection'),
    passportLocalMongoose = require('passport-local-mongoose'),
    Schema       = mongoose.Schema;

    var schema = new Schema({
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

    schema.plugin(passportLocalMongoose);

module.exports = mongoose.model('user', schema);


