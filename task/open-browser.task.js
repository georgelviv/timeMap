var gulp = require('gulp');
var openBrowser = require('gulp-open');

var path = require('../config').path;

var testFiles = [
  path.testDir + '/' + path.testSpecSuffixDir + '/index.html',
  path.coverageDir + '/report-html/index.html'
];

module.exports = openTestTask;

function openTestTask () {
  return gulp.src(testFiles)
  .pipe(openBrowser());
}
