const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

gulp.task('sass', function () {
    return gulp.src('./docs/portfolio/css/style.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./docs/css'));
});

gulp.task('watch', function () {
    gulp.watch('./docs/portfolio/css/style.scss', gulp.series('sass'));
    gulp.watch('./docs/portfolio/css/core/**', gulp.series('sass'));
    gulp.watch('./docs/portfolio/css/fonts/**', gulp.series('sass'));
    gulp.watch('./docs/portfolio/css/layout/**', gulp.series('sass'));
    gulp.watch('./docs/portfolio/css/utils/**', gulp.series('sass'));
});
