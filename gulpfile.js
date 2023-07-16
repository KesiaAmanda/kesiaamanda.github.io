const gulp = require('gulp');
const sass = require('gulp-sass');

gulp.task('sass', function () {
    return gulp.src('caminho/do/seu/arquivo.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('caminho/do/diretorio/de/saida'));
});

gulp.task('watch', function () {
    gulp.watch('caminho/do/seu/arquivo.scss', gulp.series('sass'));
});
