var gulp            = require('gulp');
var $               = require('gulp-load-plugins')();
var browserSync     = require('browser-sync');
var shell           = require('gulp-shell');
var del             = require('del');
var gutil          = require('gulp-util');
var gzip_options = {
    threshold: '1kb',
    gzipOptions: {
        level: 9
    }
};


// +++++++++++++++++++++++++++++++++++++++
// Gulp tasks to build and run application
// +++++++++++++++++++++++++++++++++++++++

function errorAlert(err) {
  $.notify.onError({
    title: "Gulp Error",
    message: "Check your terminal",
    sound: "Basso"
  })(err);
  gutil.log(gutil.colors.red(err.toString()));
  this.emit("end");
}

// Styles
gulp.task('css', function() {
  return gulp.src('assets/src/css/styleguide.scss')
  .pipe($.plumber({errorHandler: errorAlert}))
  .pipe($.sourcemaps.init())
  .pipe($.sass())
  .pipe($.autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false }))
  .pipe($.cssnano())
  .pipe($.sourcemaps.write('.'))
  .pipe(gulp.dest('assets/dist/css/'))
});

// Scripts
gulp.task('js', function() {
  return gulp.src([
    'assets/src/js/vendor/uswds.min.js',
    'assets/src/js/styleguide.js'
  ])
  .pipe($.plumber({errorHandler: errorAlert}))
  // .pipe($.jshint())
  // .pipe($.jshint.reporter('jshint-stylish'))
  .pipe($.concat('styleguide.js'))
  .pipe($.uglify())
  .pipe(gulp.dest('assets/dist/js/'))
});

// Optimize Images
gulp.task('image-optimize', function() {
  return gulp.src('assets/src/img/**/**/**/**/**/**')
    .pipe($.imagemin({
      optimizationLevel: 8,
      progressive: true
    }))
    .pipe(gulp.dest('assets/dist/img'))
});

// Move Images
gulp.task('images', function() {
  return gulp.src('assets/src/img/**/**/**/**/**/**')
  .pipe(gulp.dest('assets/dist/img'))
})

// Move fonts
gulp.task('fonts', function() {
  return gulp.src('assets/src/fonts/*')
  .pipe(gulp.dest('assets/dist/fonts'))
});

// Clean Dist Folder
gulp.task('clean', function() {
  return del(['assets/dist/*', '_site/*']);
});

// Clean Cache Files

gulp.task('clear', function(done) {
  return $.cache.clearAll(done);
});

gulp.task('setup', ['images', 'fonts']);


gulp.task('default', ['build'], function() {
  browserSync({
  server: {
    baseDir: '_site'
  },
  notify: true
  });
  gulp.watch([
    '*.html',
    '*.md',
    '_layouts/*.html',
    'pages/*.html',
    'pages/*.md',
    '_includes/*.html',
    'thoughts/*.html',
    ], ['build', browserSync.reload]);
  gulp.watch('assets/src/css/*.scss', ['build', browserSync.reload]);
  gulp.watch('assets/src/js/*.js', ['build', browserSync.reload]);
});


//  Rebuild blog when assets has been modified
gulp.task('build',['css', 'js', 'images', 'fonts'], shell.task(['jekyll build']));

//  Rebuild blog when assets has been modified
gulp.task('production',['css', 'js', 'image-optimize', 'fonts'], shell.task(['jekyll build']));
