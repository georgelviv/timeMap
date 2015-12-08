var path = require('path');
var server = require('./server');
var pathConfig = require('../../path.config');
var User = require("./models/user").User;

var route = {
  init: init
};

var isInited = false;
var mainPage = path.join(__dirname, '..', '..', pathConfig.buildDir, 'index.html');

module.exports = route;

function init() {
  if (isInited) {
    return;
  }
  isInited = true;

  server.app.get('/articles', function (req, res) {
    res.sendFile(mainPage);
  });

  server.app.get("/", function(req,res){
    var user = new User({
      username: "Petro" + Math.floor((Math.random() * 100) + 1),
      age: Math.floor((Math.random() * 80) + 1)
    });
    user.save(function(err, user){
      if (err){
        console.log(err);
        res.send(500,"something went wrong...")
      }else{
        res.send(user.introducing());
      }
    })
  });

  server.app.get('*', function (req, res) {
    // In future should be 404
    res.redirect('/');
  });

}
