var path = require('path'),
    config = require('nconf'),
    server = require('./index'),
    db = require('./../db');
    // User = require('./models/user').User;

var route = {
  init: init
};

var isInited = false;

module.exports = route;

function init() {
  if (isInited) {
    return;
  }
  isInited = true;


  server.app.get('/hello', onHello);

  server.app.get('*', handle404);
}

function handle404(req, res) {
  res.redirect('/#' + req.url);
}

function onHello(req,res) {
  var user = new db.models.User({
    username: 'Petro' + Math.floor((Math.random() * 100) + 1),
    age: Math.floor((Math.random() * 80) + 1)
  });
  user.save(function(err, user){
    if (err){
      console.log(err);
      res.send(500, 'something went wrong...');
    }else{
      res.send(user.introducing());
    }
  });
}
