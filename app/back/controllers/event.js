var express = require('express'),
    router = express.Router();
    Event = require('../models/event');





//server.app.get('/event', onEventsGet);
//server.app.post('/event', onEventPost);
//server.app.put('/event', onEventPut);
//server.app.delete('/event', onEventDelete);

router
    .get('/', function(req, res){
        Event.find(function(err, events) {
            if (err)
                res.send(err);

            res.json(events);
        });
    })
    .post('/', function(req, res){
        var event,
            data = req.body,
            errMesage = validationEvent(data);

        if (!!errMesage) {
            res.status(500).send({ error: errMesage});
            return;
        }
        event = new Event(req.body);

        event.save(function(err, resss) {
            if (err)
                res.send(err);
            res.json(event);
        });
    })
    .get('/:id', function(req, res) {
        Event.findById(req.params.id, function(err, event) {
            if (err)
                res.send(err);
            res.json(event);
        });
    })
    .put('/:id', function(req, res) {
        var data = req.body,
            errMesage = validationEvent(data);

        if (!!errMesage) {
            res.status(500).send({ error: errMesage});
            return;
        }
        Event.findByIdAndUpdate(req.params.id, data, function (err, event) {
            if (err)
                res.send(err);
            res.json(req.body);
        });
    })
    .delete('/:id', function(req, res) {
        Event.findByIdAndRemove(req.params.id, function(err) {
            if (err)
                res.send(err);
            res.send('removed event' + req.params.id);
        });
    });

var validationEvent = function (data) {
    var errMesage = false;
    if (!data.title) {
        errMesage = 'Event title is required!';
    }
    if (!data.date) {
        errMesage = 'Event date is required!';
    }
    if(!data.coordinates) {
        data.coordinates = {};
    }
    if (!data.coordinates.latitude) {
        errMesage = 'Event latitude is required!';
    }
    if (!data.coordinates.longitude) {
        errMesage = 'Event longitude is required!';
    }
    return errMesage;
};
module.exports = router;
