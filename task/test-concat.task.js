var gulp = require('gulp');
var concat = require('gulp-concat');

var path = require('../path.config');

var srcFiles = path.frontDir + '/app/*.spec.js';

module.exports = testConcatTask;

function testConcatTask () {
  gulp.src(srcFiles)
    .pipe(concat('spec.js'))
    .pipe(gulp.dest(path.testDir + '/src'));
}
