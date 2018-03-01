var gulp = require('gulp');
var mainBowerFiles = require('gulp-main-bower-files');
// Include plugins
var concat = require('gulp-concat');
//var uglify = require('gulp-uglify-es').default;
//var rename = require('gulp-rename');
var sass = require('gulp-ruby-sass');
//var strip = require('gulp-strip-comments');  vadi error
//Concat JS & minify
gulp.task('scripts', function() {
    return gulp.src('src/**/*.js')
      .pipe(concat('main.js'))
      //.pipe(rename('main.min.js'))
      //.pipe(strip().on('error', console.error.bind(console)))
     // .pipe(rename({suffix: '.min'}))
     // .pipe(uglify().on('error', console.error.bind(console)))
      .pipe(gulp.dest('build/js'))
});

 gulp.task('sass', function() {
    return sass('src/**/*.scss', {style: 'compressed'})
        .pipe(concat('sass.css'))
        .pipe(gulp.dest('src/css'));
});
gulp.task('css', function(){
	return gulp.src('src/css/*.css')
		.pipe(concat('main.css'))
        .pipe(gulp.dest('build/css'));
});
/*gulp.task('main-bower-files', function(){
	return fulp.src('./bower.json')
	.pipe(mainBowerFiles())
});*/

gulp.task('default', ['scripts', 'sass', 'css']);