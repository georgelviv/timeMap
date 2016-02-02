var eventFactory = {
  init: init
};

var db,
    isInited = false;

module.exports = eventFactory;

function init () {
  if (isInited) {
    return;
  }
  isInited = true;
  db = require('./../../index');
  db.event = {};
  db.event.add = addEvent;
  db.event.get = getEvent;
  db.event.delete = deleteEvent;
  db.event.update = updateEvent;
}

function updateEvent(data, cb) {
  if (!data.id) {
    cb('Event id is required!');
    return;
  }
  db.models.Event.findById(data.id, onFind);

  function onFind(err, event) {
    if (err) {
      cb(err);
      return;
    }
    event.title = data.title;
    event.description = data.description;
    event.save(onSave);

    function onSave(err) {
      if (err) {
        cb(err);
        return;
      }
      cb(null, data);
    }
  }
}

function deleteEvent(id, cb) {
  if (!id) {
    cb('Event id is required!');
    return;
  }
  db.models.Event.findByIdAndRemove(id, onRemoved);
  function onRemoved(err) {
    if (err) {
      cb(err);
      return;
    }
    cb(null, 'removed event:' + id);
  }
}

function getEvent(data, cb) {
  db.models.Event.find({}, onFind);

  function onFind(err, events) {
    if (err) {
      cb(err);
      return;
    }
    cb(null, events);
  }
}

function addEvent(data, cb) {
  if (!data.title) {
    cb('Events title is required!');
    return;
  }
  var event = db.models.Event(data);
  event.save(onSave);

  function onSave(err) {
    if (err) {
      cb(err);
      return;
    }
    var eventData = data;
    eventData._id = event._id;
    cb(null, eventData);
  }
}
