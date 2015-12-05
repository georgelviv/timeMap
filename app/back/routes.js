var path = require('path');
var server = require('./server');
var pathConfig = require('../../path.config');

var route = {
  init: init,
};
var isInited = false;

module.exports = route;

function init() {
  if (isInited) {
    return;
  }
  isInited = true;

  server.app.get('/articles', function (req, res) {
    res.sendFile(path.join(__dirname, '..', '..', pathConfig.buildDir, 'index.html'));
  });
}
