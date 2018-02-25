var gulp = require('gulp');
var mainBowerFiles = require('gulp-main-bower-files');
// Include plugins
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
//var rename = require('gulp-rename');
//Concat JS
gulp.task('scripts', function() {
    return gulp.src('src/js/*.js')
      .pipe(concat('main.js'))
      .pipe(gulp.dest('build/js'));
});
 //Minify JS
/*gulp.task('minifyJs', function() {
    return gulp.src('build/js/main.js')
      .pipe(concat('main.min.js'))
      .pipe(uglify())
      .pipe(gulp.dest('build/js'));
});*/
/*gulp.task('main-bower-files', function(){
	return fulp.src('./bower.json')
	.pipe(mainBowerFiles())
});*/

gulp.task('default', ['scripts', 'minifyJs']);