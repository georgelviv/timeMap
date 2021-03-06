var server = require('../index'),
    db = require('./../../db'),
    routeEvent = require('./event'),
    routeTag = require('./tag');

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

  // Db related
  server.app.delete('/db', onCleanDB);

  server.app.use('/', routeEvent);
  server.app.use('/', routeTag);
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
