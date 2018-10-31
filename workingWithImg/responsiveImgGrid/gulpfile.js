var gulp = require('gulp'),
    autoprefixer = require('gulp-autoprefixer'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync').create();

//autoprefixer task
// gulp.task( 'prefix' , () =>{
//    gulp.src('source/style/style.css')
//         .pipe(autoprefixer({
//             browsers: ['last 2 versions']
//           }))
//         .pipe(gulp.dest('dist'))  //compile file into this folder
// }); I don't need this task anymore because I am autoprefixing SCSS files with autoprefixer and I'll be working on scss.
// //sass task
gulp.task('sass', () => {
  gulp.src('assets/scss/**/*.scss')
       .pipe(sass({ outputStyle: 'expanded'}).on('error', sass.logError)) //compile
       .pipe(autoprefixer('last 2 versions', 'safari 5', 'ie 7-9')) //make sure they're all ok for browsers
       .pipe(gulp.dest('./source/style'))
});
//automating processes with watch
gulp.task('watch', () =>{
  browserSync.init({
          server: {
              baseDir: "./"
          },
          notify: false
            });
            //run it if anything changes
      gulp.watch('assets/scss/**/*.scss' , ['sass']);
      // After you detect & update changes on *.scss files, please update browser and CSS files (read-only browsers)
      gulp.watch(['**/*.html' , 'source/style/*.css']).on('change', browserSync.reload);
});
