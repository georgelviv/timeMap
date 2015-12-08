var mongoose = require("../libs/mongoose"),
    Schema = mongoose.Schema;

var schema = new Schema({
    username: {
        type: String,
        unique: true
    },
    age: Number
});

schema.methods.introducing = function(){
    return "Hi folks, my name is " + this.username + ", " + "I am " + this.age
};

exports.User = mongoose.model("User", schema);