var gulp =require('gulp');
var less =require('gulp-less');
gulp.task ('less',function(){
	gulp.src('./project/**/*.less')
	.pipe(less())
	.pipe(gulp.dest('./project'));
});
 gulp.task('watch', function(){
	gulp.watch('project/**/*.less',['less']);
 });

gulp.task('default', ['watch']);
