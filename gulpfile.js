var gulp = require('gulp');
var browserify = require('browserify');
var reactify = require('reactify');
var source = require('vinyl-source-stream');

var DEST_FOLDER = "./js/";

gulp.task('browserify', function() {
    return browserify({
        entries: ['./js/app.js'],
        transform: [reactify],
        debug: true
    })
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(gulp.dest(DEST_FOLDER));
});

gulp.task('default', ['browserify']);