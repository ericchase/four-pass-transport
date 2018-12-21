const gulp = require('gulp');
const cmd = require('child_process').exec;
const del = require('del');
const exec = require('gulp-exec');

// globbing patterns are allowed
// ie. 'build/test/**/*'
// negation patterns are allowed
// ie. '!build/test/some-file.js'

gulp.task('ts-compile', function (cb) {
  cmd('npx tsc', function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
});

gulp.task('js-beautify', function () {
  const js_beautify = 'npx js-beautify --config js-beautify.json <%= file.path %> --outfile <%= file.path %>';

  return gulp.src('./build/**/**.js')
             .pipe(exec(js_beautify));
});

gulp.task('build', gulp.series(['ts-compile', 'js-beautify']));

gulp.task('clean', function () {
  return del(['build',
              'test-reports',
              'test-reports-tmp'
             ]);
});

gulp.task('remove-npm', function () {
  return del(['node_modules',
              'package-lock.json'
             ]);
});
