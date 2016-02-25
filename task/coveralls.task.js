var gulp = require('gulp');
var coveralls = require('gulp-coveralls');
var path = require('../config').path;

var srcFile = [path.coverageDir, path.coverageLcovSuffixDir, 'lcov.info'].join('/');

module.exports = coverallsTask;

function coverallsTask () {
  return gulp.src(srcFile)
    .pipe(coveralls());
}
