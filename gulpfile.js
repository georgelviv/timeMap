var gulp = require('gulp');
var gutil = require('gulp-util');
var runSequence = require('run-sequence');
var nconf = require('nconf');

nconf.env().argv();

gulp.task('prod', function () {
  return runSequence('clean', ['static', 'css', 'vendor-css', 'js', 'vendor-js', 'template'], 'delay',
              'inject', ['css-prod', 'js-prod'], 'delay',
              'inject-prod');
});

gulp.task('build', function () {
    return runSequence(['static', 'css', 'vendor-css', 'js', 'vendor-js', 'template'], 'delay',
                'inject');
});

gulp.task('build-test', function () {
    return runSequence(['static', 'css', 'vendor-css', 'js', 'vendor-js', 'template'], 'delay',
                'inject', 'delay', 'test-concat', 'delay', 'test-karma', 'coveralls');
});

gulp.task('develop', function () {
    return runSequence(['static', 'css', 'vendor-css', 'js', 'vendor-js', 'template'], 'delay',
                'inject', 'delay', 'test-concat', 'delay', 'test-karma', 'watch');
});

gulp.task('test', function () {
    return runSequence(['static', 'css', 'vendor-css', 'js', 'vendor-js', 'template'], 'delay',
                'inject', 'test-copy', 'delay', 'test-report');
});

gulp.task('default', require('./task/default.task'));
gulp.task('static', require('./task/static.task'));
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
gulp.task('coveralls', require('./task/coverallsTask.task'));
gulp.task('test-copy', require('./task/test-copy.task'));
gulp.task('test-concat', require('./task/test-concat.task'));
gulp.task('test-karma', require('./task/test-karma.task'));
gulp.task('test-report', require('./task/test-report.task'));
gulp.task('watch', require('./task/watch.task'));
