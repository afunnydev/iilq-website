const gulp = require('gulp');
const imagemin = require("gulp-imagemin");
const imageresize = require('gulp-image-resize');
const parallel = require("concurrent-transform");
var runSequence = require('run-sequence');
var newer = require('gulp-newer');
var del = require('del');
var exec = require('child_process').exec;

// image resizing variables
const imagelarge = 2600
const imagefull = 1920;
const imagehalf = 1024;
const imagequart = 600;
const imagethumb = 80;

// resize and optimize images
gulp.task("image-resize", () => {
  return gulp.src("themes/iilq/source-images/*.{jpg,png,jpeg,JPG}")
    .pipe(newer("themes/iilq/static/img"))
    .pipe(imagemin())
    .pipe(imageresize({ width: imagelarge }))
    .pipe(gulp.dest("themes/iilq/static/large/img"))
    .pipe(imageresize({ width: imagefull }))
    .pipe(gulp.dest("themes/iilq/static/img"))
    .pipe(imageresize({ width: imagehalf }))
    .pipe(gulp.dest("themes/iilq/static/half/img"))
    .pipe(imageresize({ width: imagequart }))
    .pipe(gulp.dest("themes/iilq/static/quart/img"))
    .pipe(imageresize({ width: imagethumb }))
    .pipe(gulp.dest("themes/iilq/static/thumb/img"));
});

// hugo production call
gulp.task("hugo", function (cb) {
  exec('hugo --cleanDestinationDir', function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
});

// watching images and resizing
gulp.task("watch", function() {
  gulp.watch('themes/iilq/source-images/*.{jpg,png,jpeg,gif}', function(){ runSequence('clean-image', 'image-resize') });
});

// watching images and resizing
gulp.task("dev",  function(callback) {
  runSequence('clean-image',
              'image-resize',
              'watch');
});

// optimizing images and calling hugo for production
gulp.task("prod",  function(callback) {
  runSequence('image-resize',
              'hugo');
});
