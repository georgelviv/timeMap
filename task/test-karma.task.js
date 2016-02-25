var gulp = require('gulp');
var gutil = require('gulp-util');
var nconf = require('nconf');
var path = require('path');
var pathConfig = require('../config').path;
var Server = require('karma').Server;

var configConsoleFile = path.join(__dirname, '..', pathConfig.testDir,  '/karma.console.conf.js');
var configHTMLFile = path.join(__dirname, '..', pathConfig.testDir,  '/karma.html.conf.js');

module.exports = testJasmineTask;
module.exports.htmlReport = testHTMLJasmineTask;

function testJasmineTask (done) {
  return new Server({
    configFile: configConsoleFile,
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

function testHTMLJasmineTask (done) {
  return new Server({
    configFile: configHTMLFile,
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
