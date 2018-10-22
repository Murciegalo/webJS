var gulp = require('gulp'),
    autoprefixer = require('gulp-autoprefixer'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync').create();

//AUTOPREFIXER
// gulp.task('prefix', () => {
//   gulp.src('source/style/style.css')
//         .pipe(autoprefixer({
//             browsers: ['last 2 versions']
//         }))
//         .pipe(gulp.dest('dist'));
// });
//SASS
gulp.task('sass', () => {
  gulp.src('assets/scss/**/*.scss')
       .pipe(sass({ outputStyle: 'expanded' }).on('error', sass.logError))
       .pipe(autoprefixer('last 2 versions' , 'safari 5', 'ie 7-9'))
       .pipe(gulp.dest('./dist'))
});
//BROWSER SYNC.
gulp.task('watch', () => {
  browserSync.init({
          server: {
              baseDir: "./"
          },
          notify: false
            });
          //run it if anything changes
           gulp.watch('assets/scss/**/*.scss', ['sass']) //I'll work here
              // After you detect & update changes on *.scss files, please update browser and CSS files (read-only browsers)
           gulp.watch(['**/*.html' , 'dist/*.css']).on('change' , browserSync.reload);
});
//
