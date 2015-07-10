var gulp = require('gulp'),
    connect = require('gulp-connect');

gulp.task('default', function() {
    var app = connect.server({
        root: '.',
        port: 8000,
        livereload: false
    });
});

