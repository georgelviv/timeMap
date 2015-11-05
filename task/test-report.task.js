var gulp = require('gulp');
var inject = require('gulp-inject');
var openBrowser = require('gulp-open');

var path = require('../path.config');

var srcFile = path.testDir + '/template/test-runner.html';

var srcFiles = [
  path.testDir + '/src/jasmine.css',
  path.testDir + '/src/jasmine.js',
  path.testDir + '/src/jasmine-html.js',
  path.testDir + '/src/boot.js',
  path.testDir + '/src/vendor.js',
  path.testDir + '/src/angular-mocks.js',
  path.testDir + '/src/templates.js',
  path.testDir + '/src/app.js',
  path.testDir + '/src/spec.js',
];


module.exports = testTask;
module.exports.srcFiles = srcFile;

function testTask () {
  gulp.src(srcFile)
    .pipe(inject(gulp.src(srcFiles, {read: false}), {
      ignorePath: 'test',
      addRootSlash: false
    }))
    .pipe(gulp.dest(path.testDir))
    .pipe(openBrowser());
}
