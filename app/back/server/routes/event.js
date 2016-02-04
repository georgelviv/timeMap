var server = require('../index'),
    db = require('./../../db');

var routeEvent = {
  init: init
};

var isInited = false;

module.exports = routeEvent;

function init() {
  if (isInited) {
    return;
  }
  isInited = true;

  server.app.get('/event', onEventsGet);
  server.app.post('/event', onEventPost);
  server.app.put('/event', onEventPut);
  server.app.delete('/event', onEventDelete);

}

function onEventDelete(req, res) {
  db.event.delete(req.query.id, cb.bind(this, res));
}

function onEventPut(req, res) {
  var data = {
    id: req.query.id,
    title: req.body.title,
    description: req.body.description,
    date: req.body.date
  };
  db.event.update(data, cb.bind(this, res));
}

function onEventPost(req, res) {
  var event = {
    title: req.body.title,
    description: req.body.description,
    date: req.body.date
  };
  db.event.add(req.body, cb.bind(this, res));
}

function onEventsGet(req, res) {
  db.event.get('', cb.bind(this, res));
}

function cb(res, err, data) {
  if (err) {
    res.status(500).send(err);
    return;
  }
  res.json(data);
}
