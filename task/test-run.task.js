var gulp = require('gulp');
var jasmine = require('gulp-jasmine');

var path = require('../path.config');

var srcFiles = path.frontDir + '/app/**/*.spec.js';


module.exports = testRunTask;
module.exports.srcFiles = srcFiles;

function testRunTask () {
  gulp.src(srcFiles)
    .pipe(jasmine());
}
