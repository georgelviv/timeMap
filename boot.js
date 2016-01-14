var pathConfig = require('./config').path;
var config = require('./' + pathConfig.backendDir + '/config');
var server = require('./' + pathConfig.backendDir + '/server');
var db = require('./' + pathConfig.backendDir + '/db');

config.init();
db.init();
server.init();
server.listen();

process.on('SIGINT', onExit);

function onExit () {
  console.log('Bye bye');
}
