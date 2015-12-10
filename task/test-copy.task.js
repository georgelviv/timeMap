var gulp = require('gulp');
var path = require('../config').path;

var srcFiles = [
  path.frontDir + '/vendor/jasmine-core/lib/jasmine-core/jasmine.css',
  path.frontDir + '/vendor/jasmine-core/lib/jasmine-core/jasmine.js',
  path.frontDir + '/vendor/jasmine-core/lib/jasmine-core/jasmine-html.js',
  path.frontDir + '/vendor/jasmine-core/lib/jasmine-core/boot.js'
];


module.exports = testCopyTask;

function testCopyTask () {
  gulp.src(srcFiles)
    .pipe(gulp.dest(path.testDir + '/build/src'));
}
