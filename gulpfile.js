'use strict';

var gulp = require('gulp');
var metal = require('gulp-metal');
var path = require('path');
var runSequence = require('run-sequence');

metal.registerTasks({
	bundleCssFileName: 'westyle-demos.css',
	bundleFileName: 'westyle-demos.js',
	moduleName: 'westyle-demos'
});

gulp.task('copy:deps', function() {
	let copyNodeModules = (from, to) => gulp
		.src(path.join('node_modules/', from))
		.pipe(gulp.dest(to));

	return merge(
		copyNodeModules('/metal-toast/src/**/*.soy', 'build/vendor/metal/metal-toast'),
		copyNodeModules('/metal-input-matrix/src/**/*.soy', 'build/vendor/metal/metal-input-matrix'),
		copyNodeModules('/westyle/**', 'build/vendor/westyle')
	);
});

gulp.task('vendor-westyles', function() {
	return gulp.src(['node_modules/westyle/build/**'])
		.pipe(gulp.dest('build/vendor/westyle'));
});

gulp.task('build', ['vendor-westyles', 'build:js']);