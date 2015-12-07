var path = require('path');
var server = require('./server');
var pathConfig = require('../../path.config');

var route = {
  init: init
};

var isInited = false;
var mainPage = path.join(__dirname, '..', '..', pathConfig.buildDir, 'index.html');

module.exports = route;

function init() {
  if (isInited) {
    return;
  }
  isInited = true;

  server.app.get('/articles', function (req, res) {
    res.sendFile(mainPage);
  });

  server.app.get('*', function (req, res) {
    // In future should be 404
    res.redirect('/');
  });

}
