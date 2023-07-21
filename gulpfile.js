const gulp = require('gulp');
const sass = require('gulp-sass');
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');

// Tarefa para compilar o Sass
function compileSass() {
  return gulp
    .src('src/sass/**/*.scss')
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(gulp.dest('dist/css'));
}

// Tarefa para comprimir as imagens
function compressImages() {
  return gulp
    .src('src/images/**/*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/images'));
}

// Tarefa para comprimir o código JavaScript
function compressJS() {
  return gulp
    .src('src/js/**/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'));
}

// Tarefa padrão que executa todas as tarefas
exports.default = gulp.parallel(compileSass, compressImages, compressJS);
