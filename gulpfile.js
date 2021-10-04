var concat = require('gulp-concat');
var gulp = require('gulp');

gulp.task('default', function() {
  return gulp.src('./prebuild/*.js')
    .pipe(concat('sdk.js'))
    .pipe(gulp.dest('./dist/'));
});