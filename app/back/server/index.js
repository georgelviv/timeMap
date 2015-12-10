var express = require('express'),
    nconf = require('nconf');

var server = {
  init: init,
  listen: listen
};

var routes,
    isInited = false;


module.exports = server;

function init() {
  if (isInited) {
    return;
  }
  isInited = true;

  server.port = process.argv[2] || nconf.get('port');
  server.app = express();
  server.app.use(express.static(nconf.get('frontPath') + '/'));

  routes = require('./routes').init();
}

function listen() {
  server.serverInstance = server.app.listen(server.port, function listenPort() {
    console.log('Listen on port:' + server.serverInstance.address().port);
  });
}
