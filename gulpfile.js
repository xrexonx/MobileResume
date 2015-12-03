var gulp = require('gulp');
var gutil = require('gulp-util');
var bower = require('bower');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');
var sh = require('shelljs');
var uglify = require('gulp-uglify');
var ngmin = require('gulp-ngmin');

var dest = {
  css: './www/css/',
  js: './www/build/js/'
};

var paths = {
  sass: ['./scss/**/*.scss'],
  js: {
    app: ['./www/js/*.js'],
    controllers: ['./www/js/controllers/*.js'],
    services: ['./www/js/services/*.js'],
    filters: ['./www/js/filters/*.js']
  }
};

gulp.task('default', ['sass']);

gulp.task('sass', function (done) {
  gulp.src('./scss/ionic.app.scss')
    .pipe(sass({
      errLogToConsole: true
    }))
    .pipe(gulp.dest(dest.css))
    .pipe(minifyCss({
      keepSpecialComments: 0
    }))
    .pipe(rename({extname: '.min.css'}))
    .pipe(gulp.dest(dest.css))
    .on('end', done);
});

/*I so love it. yeah*/
gulp.task('scripts', function () {
  for (var key in paths.js) {
    if (paths.js.hasOwnProperty(key)) {
       gulp
        .src(paths.js[key])
        .pipe(concat(key + '.min.js'))
        .pipe(ngmin({dynamic: true}))
        .pipe(uglify())
        .pipe(gulp.dest(dest.js));
    }
  }
});

gulp.task('watch', function () {
  gulp.watch(paths.sass, ['sass']);
});

gulp.task('install', ['git-check'], function () {
  return bower.commands.install()
    .on('log', function (data) {
      gutil.log('bower', gutil.colors.cyan(data.id), data.message);
    });
});

gulp.task('git-check', function (done) {
  if (!sh.which('git')) {
    console.log(
      '  ' + gutil.colors.red('Git is not installed.'),
      '\n  Git, the version control system, is required to download Ionic.',
      '\n  Download git here:', gutil.colors.cyan('http://git-scm.com/downloads') + '.',
      '\n  Once git is installed, run \'' + gutil.colors.cyan('gulp install') + '\' again.'
    );
    process.exit(1);
  }
  done();
});
