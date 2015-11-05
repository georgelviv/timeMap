
var path = require('path');
var express = require('express');
var path = require('./path.config');

var server = {};
server.port = process.argv[2] || 3000;
server.app = express();

server.app.use(express.static(path.buildDir + '/'));

server.app.get('/articles', function (req, res) {
  res.sendFile(path.join('./', path.buildDir, 'index.html'));
});

server.serverInstance = server.app.listen(server.port, function listenPort() {
  console.log('Listen on port:' + server.serverInstance.address().port);
});
