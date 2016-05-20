var express = require('express');
var router = express.Router();

var db = require('./../../db');

router.route('/event')
.get(onEventsGet)
.post(onEventPost)

router.route('/event/:id')
.put(onEventPut)
.delete(onEventDelete);

module.exports = router;

function onEventDelete(req, res) {
  var id = req.params.id;
  if (!id) {
    cb(res, 'Event id is required!');
    return;
  }

  db.models.Event.findByIdAndRemove(id, onRemoved);

  function onRemoved(err) {
    if (err) {
      cb(res, err);
      return;
    }
    cb(res, null, 'removed event:' + id);
  }
}

function onEventPut(req, res) {
  var data = {
    id: req.params.id,
    title: req.body.title,
    description: req.body.description,
    date: req.body.date,
    coordinates: req.body.coordinates
  };

  if (!data.id) {
    cb('Event id is required!');
    return;
  }

  db.models.Event.findById(data.id, onFind);

  function onFind(err, event) {
    if (err) {
      cb(res, err);
      return;
    }
    event.title = data.title;
    event.description = data.description;
    event.date = data.date;
    event.coordinates = date.coordinates;
    event.save(onSave);

    function onSave(err) {
      if (err) {
        cb(res, err);
        return;
      }
      cb(res, null, data);
    }
  }
}

function onEventPost(req, res) {
  var data = {
    title: req.body.title,
    description: req.body.description,
    date: req.body.date,
    coordinates: req.body.coordinates
  };

  if (!data.title) {
    cb(res, 'Event title is required!');
    return;
  }

  if (!data.date) {
    cb(res, 'Event date is required!');
    return;
  }

  if (!data.coordinates.latitude) {
    cb(res, 'Event latitude is required!');
    return;
  }

  if (!data.coordinates.longitude) {
    cb(res, 'Event longitude is required!');
    return;
  }

  var event = db.models.Event(data);
  event.save(onSave);

  function onSave(err) {
    if (err) {
      cb(res, err);
      return;
    }
    var eventData = data;
    eventData._id = event._id;
    cb(res, null, eventData);
  }

}

function onEventsGet(req, res) {
  db.models.Event.find({}, onFind);

  function onFind(err, events) {
    if (err) {
      cb(res, err);
      return;
    }
    cb(res, null, events);
  }
}

function cb(res, err, data) {
  if (err) {
    res.status(500).send(err);
    return;
  }
  res.json(data);
}
