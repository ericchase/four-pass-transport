const gulp = require('gulp');
const del = require('del');

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

gulp.task('remove-npm', function () {
  return del([
    'node_modules',
    'package-lock.json'
  ]);
});
