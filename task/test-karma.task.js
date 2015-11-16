var gulp = require('gulp');
var karma = require('gulp-karma');

var path = require('../path.config');

var srcFiles = path.testDir + '/build/src/spec.js';


module.exports = testJasmineTask;
module.exports.srcFiles = srcFiles;

function testJasmineTask () {
  gulp.src(srcFiles)
  .pipe(karma({
    configFile: 'karma.conf.js',
    action: 'run'
  }))
  .on('error', function (err) {
    console.log(err);
    throw new Error('Karma: test fail');
  });
}
