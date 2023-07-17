const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

gulp.task('sass', function () {
    return gulp.src('./portfolio/css/style.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./portfolio/css'));
});

gulp.task('watch', function () {
    gulp.watch('./portfolio/css/style.scss', gulp.series('sass'));
    gulp.watch('./portfolio/css/core/**', gulp.series('sass'));
    gulp.watch('./portfolio/css/fonts/**', gulp.series('sass'));
    gulp.watch('./portfolio/css/layout/**', gulp.series('sass'));
    gulp.watch('./portfolio/css/utils/**', gulp.series('sass'));
});
