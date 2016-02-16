var gulp = require('gulp');
var gutil = require('gulp-util');
var nconf = require('nconf');
var concat = require('gulp-concat');
var jshint = require('gulp-jshint');
var jscs = require('gulp-jscs');
var ngAnnotate = require('gulp-ng-annotate');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');
var livereload = require('gulp-livereload');

var path = require('../config').path;

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
    .pipe(jshint.reporter('fail'))
    .on('error', onError)
    .pipe(jscs())
    .pipe(jscs.reporter())
    .pipe(jscs.reporter('fail'))
    .on('error', onError)
    .pipe(sourcemaps.init())
    .pipe(ngAnnotate({
      single_quotes: true
    }))
    .pipe(concat('app.js'))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(path.buildDir))
    .pipe(livereload());

    function onError(error) {
      if (error) {
        if (nconf.get('NODE_ENV') === 'travis') {
          process.exit(1);
          return;
        } else {
          gutil.beep();
        }
      }
    }
}

function jsTaskProd () {
  gulp.src(buildFile)
    .pipe(uglify())
    .pipe(concat('script.js'))
    .pipe(gulp.dest(path.prodDir));
}
