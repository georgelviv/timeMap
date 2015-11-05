var gulp = require('gulp');
var inject = require('gulp-inject');
var livereload = require('gulp-livereload');
var path = require('../path.config');

var srcFile = path.frontDir + '/index.html';

var srcFiles = [
  path.buildDir + '/vendor.css',
  path.buildDir + '/main.css',
  path.buildDir + '/vendor.js',
  path.buildDir + '/templates.js',
  path.buildDir + '/app.js'
];

var srcFilesProd = [
  path.prodDir + '/main.css',
  path.prodDir + '/script.js'
];

module.exports = injectTask;
module.exports.prod = injectTaskProd;
module.exports.srcFiles = srcFile;

function injectTask () {
  gulp.src(srcFile)
    .pipe(inject(gulp.src(srcFiles, {read: false}), {
      ignorePath: 'build',
      addRootSlash: false
    }))
    .pipe(gulp.dest(path.buildDir))
    .pipe(livereload());
}

function injectTaskProd () {
  gulp.src(srcFile)
    .pipe(inject(gulp.src(srcFilesProd, {read: false}), {
      ignorePath: 'prod',
      addRootSlash: false
    }))
    .pipe(gulp.dest(path.prodDir));
}
