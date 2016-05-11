var gulp = require('gulp'),
    gutil = require('gulp-util'),
    bower = require('bower'),
    concat = require('gulp-concat'),
    sass = require('gulp-sass'),
    minifyCss = require('gulp-minify-css'),
    rename = require('gulp-rename'),
    sh = require('shelljs'),
    typescript = require('gulp-typescript'),
    tslint = require('gulp-tslint'),
    sourcemaps = require('gulp-sourcemaps'),
    del = require('del'),
    Config = require('./gulpfile.config'),
    merge = require('merge2'),
    angularFilesort = require('gulp-angular-filesort'),
    tsProject = typescript.createProject('tsconfig.json');

var config = new Config();

function swallowError (error) {
  console.log(error.toString());
  this.emit('end');
}

gulp.task('ts-lint', function () {
    return gulp.src(config.allTypeScript)
      .pipe(tslint())
      .pipe(tslint.report('prose'));
});

gulp.task('compile', function () {
  var sourceTsFiles = [config.allTypeScript,                //path to typescript files
                       config.libraryTypeScriptDefinitions]; //reference to library .d.ts files

  var tsResult = gulp.src(sourceTsFiles)
                     .pipe(sourcemaps.init())
                     .pipe(typescript(tsProject));

  return tsResult
    .pipe(gulp.dest(config.buildDir + '/built'));
});

gulp.task('filesort-js', ['compile'], function() {
  return gulp.src([config.buildDir + '/built/**/*.js'])
    .pipe(angularFilesort())
    .pipe(concat('app.js'))
    .pipe(gulp.dest(config.buildDir));
})

gulp.task('clean', function (cb) {
  var getFiles = [
        config.buildDir
     ];

  del(getFiles, cb);
});

gulp.task('sass', function(done) {

  var sassSettings = {
    includePaths: [ 'www/assets/styles' ]
  }

  return gulp.src(config.allSassFiles)
    .pipe(sass(sassSettings))
    .on('error', swallowError)
    .pipe(concat('app.css'))
    .pipe(gulp.dest(config.buildDir));
});

gulp.task('watch', function() {
  gulp.watch([config.allTypeScript], ['default']);
  gulp.watch([config.allSassFiles], ['sass']);
});

gulp.task('install', ['git-check'], function() {
  return bower.commands.install()
    .on('log', function(data) {
      gutil.log('bower', gutil.colors.cyan(data.id), data.message);
    });
});

gulp.task('git-check', function(done) {
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

gulp.task('default', [
  'ts-lint', 
  'compile', 
  'filesort-js', 
  'sass']);






