var gulp = require('gulp');
var gutil = require('gulp-util');
var runSequence = require('run-sequence');

gulp.task('prod', function () {
  runSequence('build', 'delay',
              ['css-prod', 'js-prod'], 'delay',
              'inject-prod');
});

gulp.task('build', function () {
    runSequence(['css', 'vendor-css', 'js', 'vendor-js', 'template'], 'delay',
                'inject');
});

gulp.task('develop', function () {
    runSequence('build', 'test-run', 'watch');
});

gulp.task('build-test', function () {
    runSequence('build', 'test-run');
});

gulp.task('test-run', function () {
    runSequence('delay', 'test-concat', 'delay', 'test-jasmine');
});

gulp.task('test', function () {
    runSequence('build', 'test-copy', 'delay', 'test-report');
});

gulp.task('default', require('./task/default.task'));
gulp.task('clean', require('./task/clean.task'));
gulp.task('css', require('./task/css.task'));
gulp.task('vendor-css', require('./task/vendor-css.task'));
gulp.task('css-prod', require('./task/css.task').prod);
gulp.task('js', require('./task/js.task'));
gulp.task('vendor-js', require('./task/vendor-js.task'));
gulp.task('js-prod', require('./task/js.task').prod);
gulp.task('template', require('./task/template.task'));
gulp.task('inject', require('./task/inject.task'));
gulp.task('inject-prod', require('./task/inject.task').prod);
gulp.task('delay', require('./task/delay.task'));
gulp.task('test-copy', require('./task/test-copy.task'));
gulp.task('test-jasmine', require('./task/test-jasmine.task'));
gulp.task('test-concat', require('./task/test-concat.task'));
gulp.task('test-report', require('./task/test-report.task'));
gulp.task('watch', require('./task/watch.task'));
