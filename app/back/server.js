var express = require('express');
var pathConfig = require('../../path.config'),
    config = require("./config");

var server = {
  init: init,
  listen: listen
};
var isInited = false;
module.exports = server;

server.port = process.argv[2] || config.get("port");

function init() {
  if (isInited) {
    return;
  }
  isInited = true;

  server.app = express();
  server.app.use(express.static(pathConfig.buildDir + '/'));
}

function listen() {
  server.serverInstance = server.app.listen(server.port, function listenPort() {
    console.log('Listen on port:' + server.serverInstance.address().port + ", " + config.get('NODE_ENV')+ " mode");
  });
}
