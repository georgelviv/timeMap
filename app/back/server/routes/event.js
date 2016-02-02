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
  if (!req.query.id) {
    res.status(500).send('Event id is required!');
    return;
  }
  db.models.Event.findByIdAndRemove(req.query.id, onRemoved);
  function onRemoved(err) {
    if (err) {
      res.status(500).send(err);
      return;
    }
    res.send('removed event:' + req.query.id);
  }
}

function onEventPut(req, res) {
  if (!req.query.id) {
    res.status(500).send('Event id is required!');
    return;
  }
  db.models.Event.findById(req.query.id, onFind);

  function onFind(err, event) {
    if (err) {
      res.status(500).send(err);
      return;
    }
    event.title = req.body.title;
    event.description = req.body.description;
    event.save(onSave);

    function onSave(err) {
      if (err) {
        res.status(500).send(err);
        return;
      }
      res.json(req.body);
    }
  }

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
    var eventData = req.body;
    eventData._id = event._id;
    res.json(eventData);
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
