const gulp = require('gulp');
const clean = require('gulp-clean');

const sass = require('gulp-sass');
const concatCss = require('gulp-concat-css');
const cssmin = require('gulp-cssmin');

//Limpar a pasta CSS
gulp.task('clean-css', function () {
	
	return gulp.src('assets/dist/css')
	.pipe(clean());

});

//Compilador de CSS para SASS
gulp.task('sass', ['clean-css'], function () {

	return gulp.src('assets/scss/main.scss')
	.pipe(sass())
	.pipe(concatCss('all.min.css'))
	.pipe(cssmin())
    .pipe(gulp.dest('assets/dist/css'));

});

//Tarefa Padrão
gulp.task('default', function () {

	gulp.watch('assets/scss/*.scss', ['sass']);

});