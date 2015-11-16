var gulp = require('gulp');
var concat = require('gulp-concat');

var path = require('../path.config');

var srcFiles = [
  path.buildDir + '/vendor.js',
  path.frontDir + '/vendor/angular-mocks/angular-mocks.js',
  path.buildDir + '/templates.js',
  path.buildDir + '/app.js',
  path.frontDir + '/app/*.spec.js'
];

module.exports = testConcatTask;
module.exports.srcFiles = path.frontDir + '/app/*.spec.js';

function testConcatTask () {
  gulp.src(srcFiles)
    .pipe(concat('spec.js'))
    .pipe(gulp.dest(path.testDir + '/build/src'));
}
