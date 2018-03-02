var gulp = require('gulp');
var mainBowerFiles = require('gulp-main-bower-files');
// Include plugins
var concat = require('gulp-concat');
var inject = require('gulp-inject');
var webserver = require('gulp-webserver');
var exit = require('gulp-exit');
var wait = require('gulp-wait');

//var uglify = require('gulp-uglify-es').default;
//var rename = require('gulp-rename');
//var sass = require('gulp-ruby-sass');
//var copy = require('gulp-copy');
//var strip = require('gulp-strip-comments');  vadi error
//Concat JS & minify
/*gulp.task('bootstrap', function(){
    gulp.src('src/bower_components/bootstrap/dist/css/bootstrap.css')
      .pipe(gulp.dest('src/css/'));
    gulp.src('src/bower_components/bootstrap/dist/js/bootstrap.js')
      .pipe(gulp.dest('src/js/'));
});*/

gulp.task('copy', function() {
   gulp.src('src/bower_components/jquery/dist/jquery.js')
   .pipe(gulp.dest('build/js'));
   gulp.src('src/images/*')
   .pipe(gulp.dest('build/images'))
});

gulp.task('scripts', function() {
    return gulp.src(['src/bower_components/popper.js/dist/umd/popper.js', 'src/bower_components/bootstrap/dist/js/bootstrap.js', /*'src/bower_components/bootstrap/js/dist/*.js',*/ 'src/js/*.js'])
      .pipe(concat('main.js'))
      //.pipe(rename('main.min.js'))
      //.pipe(strip().on('error', console.error.bind(console)))
     // .pipe(rename({suffix: '.min'}))
     // .pipe(uglify().on('error', console.error.bind(console)))
      .pipe(gulp.dest('build/js'))
});


gulp.task('css', function(){
	return gulp.src(['src/bower_components/bootstrap/dist/css/bootstrap-reboot.min.css', 'src/bower_components/bootstrap/dist/css/*min.css', 'src/css/*.css'])
		.pipe(concat('main.css'))
        .pipe(gulp.dest('build/css'));
});

gulp.task('html', function() {
    gulp.src('src/*.html')
        .pipe(gulp.dest('build'));
});

gulp.task('server',  function(){
	return gulp.src('build')
		.pipe(webserver({
			open: true,
		}))
		.pipe(wait(10000))
		.pipe(exit());
});

gulp.task('copyfonts', function() {
   gulp.src('src/**/*.{ttf,woff,eof,svg}')
   .pipe(gulp.dest('build/fonts'));
});

/*gulp.task('main-bower-files', function(){
	return fulp.src('./bower.json')
	.pipe(mainBowerFiles())
});*/

gulp.task('default', ['copy', 'scripts', 'css', 'html', 'copyfonts']);
gulp.task('startServer', ['server']);