var pathConfig = require('./config').path;
var config = require('./' + pathConfig.backendDir + '/config');
var server = require('./' + pathConfig.backendDir + '/server');
var server2 = require('./' + pathConfig.backendDir + '/app');
//var db = require('./' + pathConfig.backendDir + '/db');

config.init();
//db.init();
//server.init();
//server.listen();
server2.listen();

process.on('SIGINT', onExit);

function onExit () {
  console.log('Bye bye');
  process.exit();
}
