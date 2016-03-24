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
        var event = new Event(),
            data = req.body,
            errMesage;

        if (!data.title) {
            errMesage = 'Event title is required!';
        }
        if (!data.date) {
            errMesage = 'Event date is required!';
        }
        if (!data.coordinates.latitude) {
            errMesage = 'Event latitude is required!';
        }
        if (!data.coordinates.longitude) {
            errMesage = 'Event longitude is required!';
        }
        if (!!errMesage) {
            res.status(500).send({ error: errMesage});
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
            event.save(function(err) {
                if (err)
                    res.send(err);

                res.json({data: event });
            });
    });
module.exports = router;
