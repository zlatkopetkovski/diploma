var gulp = require('gulp');
var mainBowerFiles = require('gulp-main-bower-files');

gulp.task('main-bower-files', function(){
	return fulp.src('./bower.json')
	.pipe(mainBowerFiles())
})

gulp.task('default', function() {
  //console.log('hallo');
});