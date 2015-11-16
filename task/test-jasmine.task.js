var gulp = require('gulp');
var jasmineBrowser = require('gulp-jasmine-browser');

var path = require('../path.config');

var srcFiles = path.testDir + '/build/src/spec.js';


module.exports = testJasmineTask;
module.exports.srcFiles = srcFiles;

function testJasmineTask () {
  gulp.src(srcFiles)
  .pipe(jasmineBrowser.specRunner({console: true}))
  .pipe(jasmineBrowser.headless())
  .on('error', function () {
    throw new Error();
  });
}
