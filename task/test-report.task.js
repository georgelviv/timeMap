var gulp = require('gulp');
var inject = require('gulp-inject');
var openBrowser = require('gulp-open');

var path = require('../path.config');

var srcFile = path.testDir + '/template/test-runner.html';
var pathPrefix = '/build/src/';

var srcFiles = [
  path.testDir + pathPrefix + 'jasmine.css',
  path.testDir + pathPrefix + 'jasmine.js',
  path.testDir + pathPrefix + 'jasmine-html.js',
  path.testDir + pathPrefix + 'boot.js',
  path.testDir + pathPrefix + 'vendor.js',
  path.testDir + pathPrefix + 'angular-mocks.js',
  path.testDir + pathPrefix + 'templates.js',
  path.testDir + pathPrefix + 'app.js',
  path.testDir + pathPrefix + 'spec.js',
];


module.exports = testTask;
module.exports.srcFiles = srcFile;

function testTask () {
  gulp.src(srcFile)
    .pipe(inject(gulp.src(srcFiles, {read: false}), {
      ignorePath: 'test/build',
      addRootSlash: false
    }))
    .pipe(gulp.dest(path.testDir + '/build'))
    .pipe(openBrowser());
}
