var gulp = require('gulp');
var path = require('path');
var Server = require('karma').Server;

var configFile = path.join(__dirname, '..', '/karma.conf.js');


module.exports = testJasmineTask;

function testJasmineTask (done) {
  return new Server({
    configFile: configFile,
    singleRun: true
  }, done)
  .start();
}
