const gulp = require('gulp')
const del = require('del')
const replace = require('gulp-replace')
const sass = require('gulp-sass')
// const LessPluginFunctions = require('less-plugin-functions')
var postcss = require('gulp-postcss');
const autoprefixer = require('gulp-autoprefixer')
const cssnano = require('gulp-cssnano'); //压缩css
const babel = require('gulp-babel')
const uglify = require('gulp-uglify')
const jsonminify = require('gulp-jsonminify')
const runSequence = require('run-sequence')
const rename = require('gulp-rename')
const htmlmin = require('gulp-htmlmin')

const SRC_DIR = './src'

// 图片路径，放到公网以后替换此处地址
const IMAGE_DIR = '/images'

gulp.task('clean', () => {
	return del(['./dist/**'])
})

gulp.task('json', () => {
	return gulp.src('./src/**/*.json')
		.pipe(gulp.dest('./dist'))
})

gulp.task('json:build', () => {
	return gulp.src('./src/**/*.json')
		.pipe(jsonminify())
		.pipe(gulp.dest('./dist'))
})

gulp.task('wxml', () => {
	return gulp.src(SRC_DIR + '/**/*.wxml')
		.pipe(replace('$$IMAGE_DIR', IMAGE_DIR))
		.pipe(gulp.dest('./dist'))
})

gulp.task('wxml:build', () => {

	return gulp.src(SRC_DIR + '/**/*.wxml')
		.pipe(replace('$$IMAGE_DIR', IMAGE_DIR))
		.pipe(gulp.dest('./dist'))
})

gulp.task('scripts', () => {
	return gulp.src('./src/**/*.js')
		.pipe(replace('$$IMAGE_DIR', IMAGE_DIR))
		.pipe(babel({
            presets: ['env']
        }))
		.pipe(gulp.dest('./dist'))
})

gulp.task('scripts:build', () => {
	return gulp.src('./src/**/*.js')
		.pipe(replace('$$IMAGE_DIR', IMAGE_DIR))
		.pipe(babel({
            presets: ['env']
        }))
		.pipe(uglify())
		.pipe(gulp.dest('./dist'))
})

gulp.task('styles', () => {
	return gulp.src('./src/**/*.{scss,wxss}')
		// .pipe(less({
		//   plugins: [
		//     // 让Less支持自定义函数
		//     new LessPluginFunctions()
		//   ]
		// }))
		.pipe(sass())
		.pipe(autoprefixer({
			//		    browsers: ['iOS > 7', 'Android > 4']
			cascade: true
		}))
		.pipe(rename(path => path.extname = '.wxss'))
		.pipe(gulp.dest('./dist'))
})
gulp.task('styles:build', () => {
	return gulp.src(['./src/**/*.{scss,wxss}', '!./src/styles/**'])
		// .pipe(less({
		//   plugins: [
		//     // 让Less支持自定义函数
		//     new LessPluginFunctions()
		//   ]
		// }))
		.pipe(sass())
		.pipe(cssnano())
		.pipe(autoprefixer({
			//		    browsers: ['iOS > 7', 'Android > 4']
			cascade: true
		}))
		.pipe(rename(path => path.extname = '.wxss'))
		.pipe(gulp.dest('./dist'))
})

gulp.task('images', () => {
	return gulp.src('./src/**/*.{png,jpg,gif,ico}')
		.pipe(gulp.dest('./dist'))
})

gulp.task('images:build', () => {
	return gulp.src('./src/**/*.{png,jpg,gif,ico}')
		.pipe(gulp.dest('./dist'))
})

gulp.task('watch', () => {
	gulp.watch([SRC_DIR + '/**/*.json'], ['json'])
	gulp.watch([SRC_DIR + '/**/*.wxml'], ['wxml'])
	gulp.watch([SRC_DIR + '/**/*.scss'], ['styles'])
	gulp.watch([SRC_DIR + '/**/*.js'], ['scripts'])
	gulp.watch([SRC_DIR + '/**/*.{png,jpg,gif,ico}'], ['images'])
})

gulp.task('dev', ['clean'], () => {
	runSequence('json', 'wxml', 'scripts', 'styles', 'images', 'watch')
})

gulp.task('build', ['clean'], () => {
	runSequence('json:build', 'wxml:build', 'scripts:build', 'styles:build', 'images:build')
})