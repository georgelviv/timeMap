var express = require('express'),
    bodyParser = require('body-parser'),
    validator = require('express-validator'),
    helmet = require('helmet'),
    compression = require('compression')
    nconf = require('nconf');

var server = {
  init: init,
  listen: listen
};

var routes,
    auth,
    isInited = false;


module.exports = server;

function init() {
  if (isInited) {
    return;
  }
  isInited = true;

  server.port = nconf.get('PORT');
  server.app = express();
  server.app.use(bodyParser.urlencoded({ extended: false }));
  server.app.use(bodyParser.json());
  server.app.use(helmet());
  server.app.use(compression());
  server.app.use(validator());

  server.app.use(express.static(nconf.get('frontPath') + '/'));
  auth = require('./auth').init();
  routes = require('./routes').init();
}

function listen() {
  server.serverInstance = server.app.listen(server.port, function listenPort() {
    console.log('Listen on port:' + server.serverInstance.address().port);
  });
}
