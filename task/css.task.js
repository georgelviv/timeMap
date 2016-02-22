var gulp = require('gulp');
var stylus = require('gulp-stylus');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
var minifyCss = require('gulp-minify-css');
var livereload = require('gulp-livereload');
var path = require('../config').path;

var srcFiles = path.frontDir + '/styl/main.styl';
var buildFile = [
  path.buildDir + '/vendor.css',
  path.buildDir + '/main.css'
];

module.exports = cssTask;
module.exports.prod = cssTaskProd;
module.exports.srcFiles = path.frontDir + '/styl/**/*.styl';

function cssTask () {
  gulp.src(srcFiles)
    .pipe(sourcemaps.init())
    .pipe(stylus())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(path.buildDir))
    .pipe(livereload());
}

function cssTaskProd () {
  gulp.src(buildFile)
    .pipe(minifyCss({compatibility: 'ie8'}))
    .pipe(concat('main.css'))
    .pipe(gulp.dest(path.prodDir));
}
