var gulp = require('gulp');
var livereload = require('gulp-livereload');

var path = require('../config').path;

var staticPathPrefix =  '/static';
var srcFiles = path.frontDir + staticPathPrefix + '/**/*.*';

module.exports = staticTask;
module.exports.prod = staticTaskProd;
module.exports.srcFiles = srcFiles;

function staticTask () {
  return gulp.src(srcFiles)
    .pipe(gulp.dest(path.buildDir + staticPathPrefix))
    .pipe(livereload());
}

function staticTaskProd () {
  return gulp.src(srcFiles)
    .pipe(gulp.dest(path.prodDir + staticPathPrefix));
}
