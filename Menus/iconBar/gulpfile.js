//gulp file to be required
var gulp = require('gulp'),
    autoprefixer = require('gulp-autoprefixer'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync').create(); //create an instance of browserync

//Tasks to be added
//Whenever 'default' is used, anonymus () will run when 'gulp' is input to the console
gulp.task('default', function(){
  console.log('hello world');
});
//Another task, this time withouth the default
gulp.task('hi',function(){
  console.log('hello world on gulp hi');
});

//AUTOPREFIXER TASK
// gulp.task('prefix', () => {
//     gulp.src('css/style.css')
//           .pipe(autoprefixer({
//             browsers:  [ 'last 2 versions' ]}))
//           .pipe(gulp.dest('dist'));
// });
//SASS TASK
gulp.task('sass', () => {
    gulp.src('scss/**/*.scss')
                      //not a compressed version    if error, show me
         .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
//Once you compilce scss into css , apply autoprefixer on them versions
         .pipe(autoprefixer('last 2 versions', 'safari 5', 'ie 7-9'))
         .pipe(gulp.dest('./dist/'))
});
//WATCH FOR ME MATE , PLEASE
gulp.task('watch', () => {
  browserSync.init({
        server: {
            baseDir: "./"
        },
        notify: false
    });
        //run it if anything changes
   gulp.watch('scss/**/*.scss', ['sass']) //I'll work here
      // After you detect & update changes on *.scss files, please update    browser and CSS files (read-only browsers)
   gulp.watch(['**/*.html' , 'dist/*.css']).on('change' , browserSync.reload);
});
