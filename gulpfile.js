var gulp         = require('gulp');
    postcss      = require('gulp-postcss');
    autoprefixer = require('autoprefixer');
    cssnext      = require('cssnext');
    browserSync  = require('browser-sync');
    reload       = browserSync.reload;

// Post Css task
gulp.task('css', function(){
    var processors = [
        autoprefixer({browsers : ['last 5 versions']}),
        cssnext
    ];
    return gulp.src('./src/css/*.css')
    .pipe(postcss(processors))
    .pipe(gulp.dest('./dest/css'))
});

//Live-Reload task
gulp.task('browser-sync', function(){
    browserSync({
        server:{
            baseDir: "./"
        }
    });
});

//Watch 
gulp.task('watch',function(){
    gulp.watch('./src/css/*.css',['css', browserSync.reload]);
    gulp.watch('index.html', browserSync.reload);
});

gulp.task('default', ['css', 'browser-sync', 'watch']);