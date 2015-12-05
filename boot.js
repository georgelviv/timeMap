var pathConfig = require('./path.config');
var server = require('./' + pathConfig.backendDir + '/server');
var routes = require('./' + pathConfig.backendDir + '/routes');

server.init();
routes.init();
server.listen();
