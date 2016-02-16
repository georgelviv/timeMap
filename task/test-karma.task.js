var gulp = require('gulp');
var gutil = require('gulp-util');
var nconf = require('nconf');
var path = require('path');
var Server = require('karma').Server;

var configFile = path.join(__dirname, '..', '/karma.conf.js');


module.exports = testJasmineTask;

function testJasmineTask (done) {
  return new Server({
    configFile: configFile,
    singleRun: true
  }, cb)
  .start();

  function cb(karmaErrorCode) {
    if (karmaErrorCode) {
      if (nconf.get('NODE_ENV') === 'travis') {
        process.exit(1);
        return;
      } else {
        gutil.beep();
      }
    }
    done();
  }
}
