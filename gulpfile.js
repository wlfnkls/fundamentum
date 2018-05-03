var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var minify = require('gulp-clean-css');

gulp.task('scss', function () {
  return gulp.src('src/scss/*.scss')
    .pipe(concat('scss-files.scss'))
    .pipe(sass())
    .pipe(minify())
    .pipe(rename('styles.min.css'))
    .pipe(gulp.dest('dist/css'))
});

gulp.task('watch:scss', function () {
  gulp.watch('src/scss/*.scss', ['scss']);
});