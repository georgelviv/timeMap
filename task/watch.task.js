var gulp = require('gulp');
var livereload = require('gulp-livereload');

var path = require('../path.config');

module.exports = watchTask;

function watchTask() {
	livereload.listen();
	gulp.watch(require('./inject.task').srcFiles, ['inject']);
  gulp.watch(require('./css.task').srcFiles, ['css']);
	gulp.watch(require('./js.task').srcFiles, ['js', 'test']);
	gulp.watch(require('./test.task').srcFiles, ['test']);
	gulp.watch(require('./template.task').srcFiles, ['template']);
}
