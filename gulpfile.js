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
    tsProject = typescript.createProject('tsconfig.json');

var config = new Config();

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


    return merge([
        tsResult.dts
          .pipe(gulp.dest(config.buildDir)),
        tsResult.js
          .pipe(concat('app.js'))
          .pipe(sourcemaps.write())
          .pipe(gulp.dest(config.buildDir))]);
});

gulp.task('clean', function (cb) {
  var getFiles = [
        config.buildDir
     ];

  // delete the files
  del(getFiles, cb);
});

gulp.task('sass', function(done) {
  gulp.src(config.allSassFiles)
    .pipe(sass())
    .pipe(gulp.dest(config.buildDir))
    .pipe(minifyCss({
      keepSpecialComments: 0
    }))
    .pipe(rename({ extname: '.min.css' }))
    .pipe(gulp.dest(config.buildDir))
    .on('end', done);
});

gulp.task('watch', function() {
  gulp.watch([config.allTypeScript], ['ts-lint', 'compile']);
  // gulp.watch(config.allSassFiles, ['sass']);
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

gulp.task('default', ['sass', 'ts-lint', 'compile']);
