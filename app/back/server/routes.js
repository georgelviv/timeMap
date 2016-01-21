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


  server.app.delete('/db', onCleanDB);
  server.app.get('*', handle404);
}

function handle404(req, res) {
  res.redirect('/#' + req.url);
}

function onCleanDB(req, res) {
  db.dbInstance.dropDatabase(onDrop);
  function onDrop (err, result) {
    if (err) {
      res.status(500).send(err);
      return;
    }
    res.send('Cleaned');
  }

}