var express     = require('express'),
    bodyParser  = require('body-parser'),
    validator   = require('express-validator'),
    passport = require('passport'),
    helmet = require('helmet'),
    compression = require('compression'),
    config      = require('./config'),
    nconf       = require('nconf'),
    controllers = require('./controllers')
    server     = {};
   // app        = express();




    config.init();
    app = express();

app.use(passport.initialize());
app.use(passport.session());


    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());
    app.use(helmet());
    app.use(compression());
    app.use(validator());
    app.use(express.static(nconf.get('frontPath') + '/'));
   // auth = require('./auth').init();
   // routes = require('./routes').init();

app.use('/', require('./controllers'));
    server = {
        port: nconf.get('PORT'),
        listen: listen
    };

function listen() {
    server.serverInstance = app.listen(server.port, function listenPort() {
        console.log('Listen on port:' + server.serverInstance.address().port);
    });
}

module.exports = server;