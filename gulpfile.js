
// npm install browser-sync gulp del --save-dev

var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var del = require('del');

gulp.task('clean', function () {
    return del(['dist/css', 'dist/js', 'dist/img']);
});

gulp.task('default', ['clean'], function () {
    gulp.start('serve'); //, 'scripts', 'images');
});

// process JS files and return the stream.
gulp.task('js', function () {
    return gulp.src('js/*js')
        // .pipe(browserify())
        // .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
});

gulp.task('css', function () {
    return gulp.src('css/*css')
        // .pipe(browserify())
        // .pipe(uglify())
        .pipe(gulp.dest('dist/css'));
});

gulp.task('img', function () {
    return gulp.src('images/*.jpg')
        // .pipe(browserify())
        // .pipe(uglify())
        .pipe(gulp.dest('dist/img'));
});

// create a task that ensures the `js` task is complete before
// reloading browsers
gulp.task('js-watch', ['js', 'css', 'img'], browserSync.reload);

// use default task to launch Browsersync and watch JS files
gulp.task('serve', ['js', 'css', 'img'], function () {

    browserSync.init({
        server: {
            baseDir: "./"
        }
    });

    // add browserSync.reload to the tasks array to make
    // all browsers reload after tasks are complete.
    gulp.watch("js/*.js", ['js-watch']);
    gulp.watch("*.html", browserSync.reload);
    gulp.watch("css/*.css", browserSync.reload);
});

