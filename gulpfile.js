'use strict';

const autoprefixer = require('gulp-autoprefixer');
const csso = require('gulp-csso');
const del = require('del');
const gulp = require('gulp');
const runSequence = require('run-sequence');
const uglify = require('gulp-uglify');
const less = require('gulp-less');
const path = require('path');
const concat = require('gulp-concat');
const image = require('gulp-image');
const cleanCSS = require('gulp-clean-css');

// Set the browser that you want to support
// const AUTOPREFIXER_BROWSERS = [
//   'ie >= 10',
//   'ie_mob >= 10',
//   'ff >= 30',
//   'chrome >= 34',
//   'safari >= 7',
//   'opera >= 23',
//   'ios >= 7',
//   'android >= 4.4',
//   'bb >= 10'
// ];

// Gulp task to minify CSS files
// gulp.task('css', gulp.parallel('clean'), function () {
//   return gulp.src('./src/css/**/*.css')
//     .pipe(autoprefixer({browsers: AUTOPREFIXER_BROWSERS}))
//     .pipe(csso())
//     .pipe(concat('styles_2.css'))
//     .pipe(gulp.dest('./public/css'))
// });

// Gulp task to minify JavaScript files
// gulp.task('scripts', gulp.parallel('clean'), function() {
//   return gulp.src(['./src/js/main.js',])
//     .pipe(concat('scripts.js'))
//     .pipe(uglify())
//     .pipe(gulp.dest('./public/js'))
// });

// Optimize CSS
// gulp.task('less', gulp.parallel('clean'), function () {
//   return gulp.src('./src/less/creative.less')
//     .pipe(less({
//   		paths: [ path.join(__dirname, 'less', 'includes') ],
//     	onError: console.error.bind(console, 'Less error:')
//     }))
//     .pipe(concat('styles.css'))
//     .pipe(gulp.dest('./public/css'));
// });

gulp.task('minify-css', gulp.parallel('clean'),  function () {
  return gulp.src('./public/css/styles.css')
    .pipe(cleanCSS({ compatibility: AUTOPREFIXER_BROWSERS }))
    .pipe(gulp.dest('./public/css'));
});

// Optimize PNG, JPEG, GIF, SVG images with gulp task.
gulp.task('image', gulp.parallel('clean'), function () {
  gulp.src('./src/img/**')
    .pipe(image({
		pngquant: true,
		optipng: false,
		zopflipng: true,
		jpegRecompress: false,
		mozjpeg: true,
		guetzli: false,
		gifsicle: true,
		svgo: true,
    	onError: console.error.bind(console, 'Image error:')
    }))
    .pipe(gulp.dest('./public/img'));
});

// Clean output directory
// gulp.task('clean', function clean() { del.sync(['public']) } );

// Gulp task to minify all files
// gulp.task('default', ['clean'], function () {
//   runSequence(
//     'less',
//     'minify-css',
//     'css',
//     'scripts',
//     'image'
//   );
// });


var js = function() { 
  return gulp.src(['./src/js/main.js',])
    .pipe(concat('scripts.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./public/js'))
};
js.description = 'Build js into '+paths.dist;

var css = function() { 
  return gulp.src('./src/css/**/*.css')
    .pipe(autoprefixer({browsers: AUTOPREFIXER_BROWSERS}))
    .pipe(csso())
    .pipe(concat('styles_2.css'))
    .pipe(gulp.dest('./public/css'))

// return gulp.src('./src/less/creative.less')
//     .pipe(less({
//       paths: [ path.join(__dirname, 'less', 'includes') ],
//       onError: console.error.bind(console, 'Less error:')
//     }))
//     .pipe(concat('styles.css'))
//     .pipe(gulp.dest('./public/css'));

};
css.description = 'Build css into '+paths.dist;

var img = function() {
  gulp.src('./src/img/**')
    .pipe(image({
      pngquant: true,
      optipng: false,
      zopflipng: true,
      jpegRecompress: false,
      mozjpeg: true,
      guetzli: false,
      gifsicle: true,
      svgo: true,
      onError: console.error.bind(console, 'Image error:')
    }))
    .pipe(gulp.dest('./public/img'));
};
img.description = 'Build img into '+paths.dist;

var build = gulp.parallel(js, css, img);
build.description = 'Build js, css, and into '+paths.dist;

var clean = gulp.once(function(){ del.sync(['public']) });
clean.description = 'Deletes files in '+paths.dist+'. Only runs once per orchestration.';

var default = gulp.series(clean, build);
default.description = 'Clean then build';

module.exports = {
    js: js,
    css: css,
    build: build,
    clean: clean,
    default: default
};

// gulp.task('default', 
//   gulp.series('clean',
//     gulp.parallel(
//       'less', 
//       'css', 
//       'minify-css', 
//       'scripts', 
//       'image'
//     )
//   )
// );

