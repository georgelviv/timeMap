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

  // Db related
  server.app.delete('/db', onCleanDB);
  // Events related
  server.app.get('/event', onEventsGet);
  server.app.post('/event', onEventPost);

  server.app.get('*', handle404);
}

function handle404(req, res) {
  res.redirect('/#' + req.url);
}

function onEventPost(req, res) {
  if (!req.body.title) {
    res.status(500).send('Events title is required!');
    return;
  }
  var event = db.models.Event(req.body);
  event.save(onSave);

  function onSave(err) {
    if (err) {
      res.status(500).send(err);
      return;
    }
    res.json(req.body);
  }
}

function onEventsGet(req, res) {
  db.models.Event.find({}, onFind);

  function onFind(err, events) {
    if (err) {
      res.status(500).send(err);
      return;
    }
    res.json(events);
  }
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
