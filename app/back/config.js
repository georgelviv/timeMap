var nconf = require('nconf'),
    path = require('path'),
    NODE_ENV = nconf.get('NODE_ENV') || 'development';

var config = {
  init: init
};


module.exports = config;

function init () {
  nconf.argv()
      .env()
      .file({ file: path.join(__dirname + '/../../config.json')});

  nconf.set('NODE_ENV', NODE_ENV);

  if (NODE_ENV === 'development') {
    nconf.set('frontPath', nconf.get('path').buildDir);
  } else {
    nconf.set('frontPath', nconf.get('path').prodDir);
  }

  console.log('Mode: ' + nconf.get('NODE_ENV'));
}
