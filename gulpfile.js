var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');

gulp.task('minify-css', () => {
  return gulp.src('src/css/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('src/css/minify'));
});
 

gulp.task('watch', function() {
    gulp.watch('src/css/*.css', ['minify-css']);
});