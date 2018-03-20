var gulp = require('gulp');
// Include plugins
var concat = require('gulp-concat');
var inject = require('gulp-inject');
var webserver = require('gulp-webserver');
var exit = require('gulp-exit');
var wait = require('gulp-wait');
//kopiranje na jQuery i na site potrebni sliki
gulp.task('copy', function() {
   gulp.src('src/bower_components/jquery/dist/jquery.js')
   .pipe(gulp.dest('build/js'));
   gulp.src('src/images/*')
   .pipe(gulp.dest('build/images'))
});
//kopiranje na potrebnite js funkcii i smestuvanje vo main.js
gulp.task('scripts', function() {
    return gulp.src(['src/bower_components/popper.js/dist/umd/popper.js', 
      'src/bower_components/bootstrap/dist/js/bootstrap.js', 'src/js/*.js'])
      .pipe(concat('main.js'))
      .pipe(gulp.dest('build/js'))
});
//kopiranje na potrebnite stilovi  i smestuvanje vo main.css
gulp.task('css', function(){
	return gulp.src(['src/bower_components/bootstrap/dist/css/bootstrap-reboot.min.css', 
    'src/bower_components/bootstrap/dist/css/*min.css', 'src/css/*.css'])
		.pipe(concat('main.css'))
        .pipe(gulp.dest('build/css'));
});
//kopiranje na site .html datoteki
gulp.task('html', function() {
    gulp.src('src/*.html')
        .pipe(gulp.dest('build'));
});
//startuvanje na server koj avtomatski se isklucuva po 1 minuta
gulp.task('server',  function(){
	return gulp.src('build')
		.pipe(webserver({
			open: true,
		}))
//		.pipe(wait(60000))
//		.pipe(exit());
});
//povikuvanje na funkcii
gulp.task('default', ['copy', 'scripts', 'css', 'html']);
gulp.task('startServer', ['server']);