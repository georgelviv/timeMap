var gulp = require('gulp');
var path = require('../path.config');

var srcFiles = [
  path.frontDir + '/vendor/jasmine-core/lib/jasmine-core/jasmine.css',
  path.frontDir + '/vendor/jasmine-core/lib/jasmine-core/jasmine.js',
  path.frontDir + '/vendor/jasmine-core/lib/jasmine-core/jasmine-html.js',
  path.frontDir + '/vendor/jasmine-core/lib/jasmine-core/boot.js',
  path.buildDir + '/vendor.js',
  path.frontDir + '/vendor/angular-mocks/angular-mocks.js',
  path.buildDir + '/templates.js',
  path.buildDir + '/app.js'
];


module.exports = testCopyTask;

function testCopyTask () {
  gulp.src(srcFiles)
    .pipe(gulp.dest(path.testDir + '/src'));
}
