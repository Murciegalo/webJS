const gulp = require('gulp'),
       autoprefixer = require('gulp-autoprefixer'),
       sass = require('gulp-sass'),
       browserSync = require('browser-sync').create();
//SASS
gulp.task ('sass', () =>{
    gulp.src('src/scss/**/*.scss')
         .pipe(sass( {outputStyle: 'expanded'}).on( 'error', sass.logError))
         //apply autoprefixer now
         .pipe(autoprefixer( 'last 2 versions', 'safari 5', 'ie 7-9'))
         .pipe(gulp.dest('./dist'))
});
//JAVASCRIPT
// gulp.task('js', () => {
//     return gulp.src('src/app/*.js')
//         // .pipe(browserify())
//         // .pipe(uglify())
//         .pipe(gulp.dest('dist/js'));
// });

//Automating now sass & autoprefixer with BrowserSync
gulp.task( 'watch', () =>{
  browserSync.init({
          server: {
              baseDir: "./"  //index.html by default
          },
          notify: false
            });
          //run it if anything changes
           gulp.watch('src/scss/**/*.scss', ['sass']) //I'll work here
           // gulp.watch('src/app/**/*.js', ['js-watch'])
              // After you detect & update changes on *.scss files, please update browser and CSS files (read-only browsers)
           gulp.watch(['**/*.html' , 'dist/*.css' , 'dist/*.js']).on('change' , browserSync.reload);
})
