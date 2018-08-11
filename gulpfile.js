'use strict';

const autoprefixer = require('gulp-autoprefixer');
// const csso = require('gulp-csso');
const del = require('del');
const gulp = require('gulp');
// const htmlmin = require('gulp-htmlmin');
const runSequence = require('run-sequence');
// const sass = require('gulp-sass');
const uglify = require('gulp-uglify');
const less = require('gulp-less');
const path = require('path');
const concat = require('gulp-concat');
const image = require('gulp-image');
const cleanCSS = require('gulp-clean-css');

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

/*
‘gulp clean’ — to delete everything in the destination folder
‘gulp styles’ — to minify the CSS file
‘gulp scripts’ — to minify any JS files
‘gulp pages’ — to minify any HTML files
 */
// Gulp task to minify CSS files
// gulp.task('styles', function () {
//   return gulp.src('./system/lib/sass/*.scss')
//     // Compile SASS files
//     .pipe(sass({
//       outputStyle: 'nested',
//       precision: 10,
//       includePaths: ['.'],
//       onError: console.error.bind(console, 'Sass error:')
//     }))
//     // Auto-prefix css styles for cross browser compatibility
//     .pipe(autoprefixer({browsers: AUTOPREFIXER_BROWSERS}))
//     // Minify the file
//     .pipe(csso())
//     // Output
//     .pipe(gulp.dest('./public/css'))
// });

// Gulp task to minify CSS files
// gulp.task('styles', function () {
//   return gulp.src('./system/lib/css/*.css')
//     // Auto-prefix css styles for cross browser compatibility
//     .pipe(autoprefixer({browsers: AUTOPREFIXER_BROWSERS}))
//     // Minify the file
//     .pipe(csso())
//     .pipe(concat('styles.css'))
//     // Output
//     .pipe(gulp.dest('./public/css'))
// });

// Gulp task to minify JavaScript files
gulp.task('scripts', function() {
  return gulp.src(['./system/lib/js/**/*.js',])
    .pipe(uglify())
    .pipe(concat('scripts.js'))
    .pipe(gulp.dest('./public/js'))
});

// Gulp task to minify HTML files
// gulp  pages
// gulp.task('pages', function() {
//   return gulp.src(['./src/**/*.html'])
//     .pipe(htmlmin({
//       collapseWhitespace: true,
//       removeComments: true
//     }))
//     .pipe(gulp.dest('./dist'));
// });

// Optimize CSS
gulp.task('less', function () {
  return gulp.src('./system/lib/less/_main.less')
    .pipe(less({
  		paths: [ path.join(__dirname, 'less', 'includes') ],
    	onError: console.error.bind(console, 'Less error:')
    }))
    .pipe(concat('styles.css'))
    .pipe(gulp.dest('./public/css'));
});

gulp.task('minify-css', function () {
  return gulp.src('./public/css/styles.css')
    .pipe(cleanCSS({ compatibility: AUTOPREFIXER_BROWSERS }))
    .pipe(gulp.dest('./public/css'));
});

// Optimize PNG, JPEG, GIF, SVG images with gulp task.
gulp.task('image', function () {
  gulp.src('./system/lib/css/layout/imagens/**')
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
gulp.task('clean', () => del(['public']));

// Gulp task to minify all files
gulp.task('default', ['clean'], function () {
  runSequence(
    'less',
    'minify-css',
    'scripts',
    'image'
  );
});
