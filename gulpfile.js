var gulp = require('gulp');
var sass = require('gulp-sass');
var uglifycss = require('gulp-uglifycss');
var imagemin = require('gulp-imagemin');
var minify = require('gulp-minify');
//var htmlmin = require('gulp-htmlmin');

sass.compiler = require('node-sass');
//gulp sass
gulp.task('sass', function() {
  return gulp
    .src('./sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});

gulp.task('sass:watch', function() {
  gulp.watch('./sass/*.scss', ['sass']);
});

//gulp css, cu uglify
gulp.task('css', function() {
  gulp
    .src('./css/*.css')
    .pipe(
      uglifycss({
        uglyComments: true
      })
    )
    .pipe(gulp.dest('./dist/'));
});

//gulp imagemin
gulp.task('imagemin', () =>
  gulp
    .src('img/*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/images'))
);

//gulp javascript
gulp.task('minify', function() {
  gulp
    .src(['*.js'])
    .pipe(minify())
    .pipe(gulp.dest('dist'));
});

//gulp htmlmin
/*gulp.task('htmlmin', () => {
  return gulp
    .src('*.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('dist'));
});*/
