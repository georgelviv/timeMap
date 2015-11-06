var gulp = require('gulp');
var clean = require('gulp-clean');
var path = require('../path.config');

var sourcePath = [
  path.buildDir,
  path.prodDir,
  path.testDir + '/build'
];

module.exports = cleanTask;

function cleanTask () {
    return gulp.src(sourcePath, {read: false})
          .pipe(clean());
}
