const gulp = require('gulp');
const nunjucksRender = require('gulp-nunjucks-render');

gulp.task('nunjucks', () => {
	// gets .html and .nunjucks files in pages
	return gulp.src('./app/pages/**/*.+(html|nunjucks)')
	// renders template with nunjucks
		.pipe(nunjucksRender({path: ['./app/templates']}))
		// output files in app folder
		.pipe(gulp.dest('./app'))
});
