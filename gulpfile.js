var gulp = require('gulp');
var del = require('del');

gulp.task('clean', function () {
  return del([
    // globbing patterns are allowed
    // ie. 'build/test/**/*'
    // negation patterns are allowed
    // ie. '!build/test/some-file.js'
    'build',
    'test-reports',
    'test-reports-tmp',
  ]);
});
