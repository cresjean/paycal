var gulp = require('gulp');

var browserify = require('browserify');
var source = require('vinyl-source-stream');

gulp.task('browserify', function() {
    // Grabs the app.js file
    return browserify('public/app/app.module.js')
        // bundles it and creates a file called main.js
        .bundle()
        .pipe(source('main.js'))

    // bring the uglify back in in production

    // .pipe(streamify(uglify()))

    .pipe(gulp.dest('public/dist/js/'));
});
