var express = require('express');
var router = express.Router();

var db = require('./../../db');

router.route('/tag')
.get(onTagGet)
.post(onTagPost)

router.route('/tag/:id')
.put(onTagPut)
.delete(onTagDelete);

module.exports = router;

function onTagDelete(req, res) {
  var id = req.params.id;
  if (!id) {
    cb(res, 'Tag id is required!');
    return;
  }

  db.models.Tag.findByIdAndRemove(id, onRemoved);

  function onRemoved(err) {
    if (err) {
      cb(res, err);
      return;
    }
    cb(res, null, 'removed tag:' + id);
  }
}

function onTagPut(req, res) {
  var data = {
    id: req.params.id,
    name: req.body.name,
    color: req.body.color
  };

  if (!data.id) {
    cb('Tag id is required!');
    return;
  }

  db.models.Tag.findById(data.id, onFind);

  function onFind(err, tag) {
    if (err) {
      cb(res, err);
      return;
    }
    tag.name = data.name;
    tag.color = data.color;
    tag.save(onSave);

    function onSave(err) {
      if (err) {
        cb(res, err);
        return;
      }
      cb(res, null, data);
    }
  }
}

function onTagPost(req, res) {
  var data = {
    name: req.body.name,
    color: req.body.color
  };

  if (!data.name) {
    cb(res, 'Tag name is required!');
    return;
  }

  if (!data.color) {
    cb(res, 'Tag color is required!');
    return;
  }

  var tag = db.models.Tag(data);
  tag.save(onSave);

  function onSave(err) {
    if (err) {
      cb(res, err);
      return;
    }
    var tagData = data;
    tagData._id = tag._id;
    cb(res, null, tagData);
  }

}

function onTagGet(req, res) {
  db.models.Tag.find({}, onFind);

  function onFind(err, tags) {
    if (err) {
      cb(res, err);
      return;
    }
    cb(res, null, tags);
  }
}

function cb(res, err, data) {
  if (err) {
    res.status(500).send(err);
    return;
  }
  res.json(data);
}
