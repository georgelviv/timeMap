var gulp = require('gulp');
var concat = require('gulp-concat');
var jshint = require('gulp-jshint');
var jscs = require('gulp-jscs');
var ngAnnotate = require('gulp-ng-annotate');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');
var livereload = require('gulp-livereload');

var path = require('../path.config');

var srcFiles = [
  path.frontDir + '/app/**/*.module.js',
  path.frontDir + '/app/**/*.js',
  '!' + path.frontDir + '/app/**/*.spec.js'
];
var buildFile = [
  path.buildDir + '/vendor.js',
  path.buildDir + '/template.js',
  path.buildDir + '/app.js'
];

module.exports = jsTask;
module.exports.prod = jsTaskProd;
module.exports.srcFiles = srcFiles;

function jsTask () {
  gulp.src(srcFiles)
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'))
    .pipe(jscs())
    .pipe(jscs.reporter())
    .pipe(sourcemaps.init())
    .pipe(ngAnnotate({
      single_quotes: true
    }))
    .pipe(concat('app.js'))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(path.buildDir))
    .pipe(livereload());
}

function jsTaskProd () {
  gulp.src(buildFile)
    .pipe(uglify())
    .pipe(concat('script.js'))
    .pipe(gulp.dest(path.prodDir));
}
