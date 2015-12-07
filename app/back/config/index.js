var nconf = require('nconf'),
    path = require('path');
    NODE_ENV = nconf.get('NODE_ENV') || "development";

nconf.argv().env().file({ file: path.join(__dirname + '/config.json')});

nconf.set('NODE_ENV', NODE_ENV);

module.exports = nconf;