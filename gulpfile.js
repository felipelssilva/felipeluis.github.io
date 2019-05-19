'use strict';

const autoprefixer = require('gulp-autoprefixer'),
      csso = require('gulp-csso'),
      del = require('del'),
      gulp = require('gulp'),
      runSequence = require('run-sequence'),
      less = require('gulp-less'),
      path = require('path'),
      concat = require('gulp-concat'),
      image = require('gulp-image'),
      cleanCSS = require('gulp-clean-css'),
      minify = require('gulp-minify'),
      babel = require("gulp-babel");
      

// Set the browser that you want to support
const AUTOPREFIXER_BROWSERS = [
  'ie >= 10',
  'ie_mob >= 10',
  'ff >= 30',
  'chrome >= 34',
  'safari >= 7',
  'opera >= 23',
  'ios >= 7',
  'android >= 4.4',
  'bb >= 10'
];

// Gulp task to minify CSS files
// gulp.task('css', function () {
//   return gulp.src('./src/css/**/*.css')
//     .pipe(autoprefixer({browsers: AUTOPREFIXER_BROWSERS}))
//     .pipe(csso())
//     .pipe(concat('styles_2.css'))
//     .pipe(gulp.dest('./public/custom/css'))
// });

// Gulp task to minify JavaScript files
gulp.task('js', function() {
  return gulp.src(['./src/js/*.js',])
    .pipe(concat('scripts.js'))
    .pipe(gulp.dest('./public/js'))
});

gulp.task('minifyJs', function () {
  return gulp.src('./public/js/*.js')
    .pipe(concat('scripts.js'))
    .pipe(minify())
    .pipe(gulp.dest('./public/js'))
});

// Optimize CSS
gulp.task('less', function () {
  return gulp.src('./src/less/main.less')
    .pipe(less({
  		paths: [ path.join(__dirname, 'less', 'includes') ],
    	onError: console.error.bind(console, 'Less error:')
    }))
    .pipe(concat('styles.css'))
    .pipe(gulp.dest('./public/custom/css'));
});

gulp.task('minifyCss',  function () {
  return gulp.src('./public/css/*.css')
    .pipe(cleanCSS({ compatibility: AUTOPREFIXER_BROWSERS }))
    .pipe(gulp.dest('./public/css'));
});

// Optimize PNG, JPEG, GIF, SVG images with gulp task.
gulp.task('img', function () {
  gulp.src('./src/img/**')
    .pipe(image({
		pngquant: true,
		optipng: false,
		zopflipng: true,
		jpegRecompress: true,
		mozjpeg: true,
		guetzli: false,
		gifsicle: true,
		svgo: true,
    	onError: console.error.bind(console, 'Image error:')
    }))
    .pipe(gulp.dest('./public/img'));
});

// gulp.task('fonts', function () {
//   gulp.src('./src/fonts/*')
//     .pipe(gulp.dest('./public/fonts'));
// });

gulp.task('pdf', function () {
  gulp.src('./src/pdf/*')
    .pipe(gulp.dest('./public/pdf'));
});

gulp.task('bootstrap', function () {
  gulp.src('./node_modules/bootstrap/dist/**/*')
    .pipe(gulp.dest('./public/vendors/bootstrap'));
});

gulp.task('jquery', function () {
  gulp.src('./node_modules/jquery/dist/**/*')
    .pipe(gulp.dest('./public/vendors/jquery'));
});

gulp.task('sweetalert', function () {
  gulp.src('./node_modules/sweetalert2/dist/**/*')
    .pipe(gulp.dest('./public/vendors/sweetalert'));
});

gulp.task('fontawesomeCss', function () {
  gulp.src('./node_modules/font-awesome/css/*')
    .pipe(gulp.dest('./public/vendors/fontawesome/css'));
});

gulp.task('fontawesomeFonts', function () {
  gulp.src('./node_modules/font-awesome/fonts/*')
    .pipe(gulp.dest('./public/vendors/fontawesome/fonts'));
});

gulp.task('popperJs', function () {
  gulp.src('./node_modules/popper.js/dist/*.js')
    .pipe(gulp.dest('./public/vendors/popper.js'));
});
// Clean output directory
gulp.task('clean', function clean() { del.sync(['public']) } );

// Gulp task to minify all files
gulp.task('default', ['clean'], function () {
  runSequence(
    'jquery',
    'bootstrap',
    'sweetalert',
    'fontawesomeCss',
    'fontawesomeFonts',
    'popperJs',
    'less',
    'js',
    'img',
    'pdf',
    'minifyCss',
    'minifyJs'
  );
});