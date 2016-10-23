/**
 * Created by hxghxg527 on 2016/10/22.
 */

var gulp = require('gulp'),
    sequence = require('gulp-sequence'),
    sass = require('gulp-sass'),
    rename = require('gulp-rename'),
    clean = require('gulp-clean'),
    notify = require("gulp-notify"),
    autoprefixer = require('autoprefixer'),
    postcss = require('gulp-postcss'),
    sourcemaps = require('gulp-sourcemaps'),
    minifyHtml = require('gulp-minify-html'),
    ngHtml2Js = require('gulp-ng-html2js'),
    uglify = require('gulp-uglify'),
    csso = require('gulp-csso'),
    concat = require('gulp-concat'),
    change = require('gulp-change'),
    configJson = require('./src/sra.config.json'),
    execFile = require('child_process').execFile,
    filter = require('gulp-filter'),
    browserSync = require('browser-sync').create(),
    reload = browserSync.reload;

//function to handle errors
function handleError() {
    var args = Array.prototype.slice.call(arguments);
    notify.onError({
        title: 'compile error',
        message: '<%=error.message %>'
    }).apply(this, args);
    this.emit();
}

gulp.task('compile_scss_dev', function () {
    gulp.src('./src/scss/sra.import.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .on('error', handleError)
        .pipe(postcss([autoprefixer({
            browsers: ['iOS 7', '> 5%']
        })]))
        .pipe(rename('sra.css'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./src/compiledFiles'))
        .pipe(filter('**/*.css')) // Filtering stream to only css files
        .pipe(reload({
            stream: true
        }));
});

gulp.task('compress_css_dev', function () {
    gulp.src('./src/compiledFiles/sra.css')
        .pipe(csso())
        .on('error', handleError)
        .pipe(rename('sra.min.css'))
        .pipe(gulp.dest('./src/compiledFiles'));
});

gulp.task('concat_js_dev', function () {
    gulp.src('./src/js/**/*.js')
        .pipe(sourcemaps.init())
        .pipe(concat('sra.js', {
            newLine: ';\r\n'
        }))
        .on('error', handleError)
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./src/compiledFiles'))
        .pipe(reload({
            stream: true
        }));
});

gulp.task('compress_js_dev', function () {
    gulp.src('./src/compiledFiles/sra.js')
        .pipe(uglify())
        .on('error', handleError)
        .pipe(rename('sra.min.js'))
        .pipe(gulp.dest('./src/compiledFiles'));
});

gulp.task('concat_js_lib_dev', function () {
    gulp.src([
        './bower_modules/jquery/dist/jquery.min.js',
        './bower_modules/angular/angular.min.js',
        './bower_modules/angular-ui-router/release/angular-ui-router.min.js'
    ])
        .pipe(concat('third-party-libs.js', {
            newLine: ';\r\n'
        }))
        .pipe(gulp.dest('./src/compiledFiles'));
});

gulp.task('cache_tpl_html_dev', function () {
    gulp.src('./src/tpl/**/*.html')
        .pipe(minifyHtml({
            empty: true,
            spare: true,
            quotes: true
        }))
        .pipe(ngHtml2Js({
            moduleName: "sra.templateCache",
            prefix: ""
        }))
        .pipe(concat("html2Template.js"))
        .pipe(gulp.dest("./src/js/templateCache"));
});

gulp.task('clean_scripts_dev', function () {
    return gulp.src('./src/compiledFiles/**/*')
        .pipe(clean());
});

//===release task start

// gulp.task('clean_folders_release', function() {
//     return gulp.src('./release')
//         .pipe(clean());
// });

gulp.task('move_files_release', function () {
    gulp.src('./src/compiledFiles/**/*')
        .pipe(gulp.dest('./release/compiledFiles'));

    gulp.src('./src/icons/**/*')
        .pipe(gulp.dest('./release/icons'));

    gulp.src('./src/json/**/*')
        .pipe(gulp.dest('./release/json'));

    gulp.src('./src/thirdPartyPlugins/**/*')
        .pipe(gulp.dest('./release/thirdPartyPlugins'));

    gulp.src('./src/*.html')
        .pipe(gulp.dest('./release'));
});

var configJsonEnvironmentReg = new RegExp('"' + configJson.environment + '"');

gulp.task('move_config_json_for_qa_release', function () {
    return gulp.src('./src/sra.config.json')
        .pipe(change(function (content) {
            return content.replace(configJsonEnvironmentReg, '\"qa\"');
        }))
        .pipe(gulp.dest('./release'));
});

gulp.task('move_config_json_for_staging_release', function () {
    return gulp.src('./src/sra.config.json')
        .pipe(change(function (content) {
            return content.replace(configJsonEnvironmentReg, '\"staging\"');
        }))
        .pipe(gulp.dest('./release'));
});

gulp.task('move_config_json_for_liveUS_release', function () {
    return gulp.src('./src/sra.config.json')
        .pipe(change(function (content) {
            return content.replace(configJsonEnvironmentReg, '\"liveUS\"');
        }))
        .pipe(gulp.dest('./release'));
});

gulp.task('move_config_json_for_liveCN_release', function () {
    return gulp.src('./src/sra.config.json')
        .pipe(change(function (content) {
            return content.replace(configJsonEnvironmentReg, '\"liveCN\"');
        }))
        .pipe(gulp.dest('./release'));
});

// release:
gulp.task('_releaseCommon', sequence('move_files_release'));

gulp.task('releaseQA', sequence('_releaseCommon', 'move_config_json_for_qa_release'));
gulp.task('releaseStaging', sequence('_releaseCommon', 'move_config_json_for_staging_release'));
gulp.task('releaseLiveUS', sequence('_releaseCommon', 'move_config_json_for_liveUS_release'));
gulp.task('releaseLiveCN', sequence('_releaseCommon', 'move_config_json_for_liveCN_release'));

//===release task end

gulp.task('watch', ['dev'], function () {
    gulp.watch('./src/js/**/*.js', ['concat_js_dev']);
    gulp.watch('./src/compiledFiles/sra.js', ['compress_js_dev']);

    gulp.watch('./bower_modules/**/*.js', ['concat_js_lib_dev']);

    gulp.watch('./src/scss/**/*.scss', ['compile_scss_dev']);
    gulp.watch('./src/compiledFiles/sra.css', ['compress_css_dev']);

    gulp.watch('./src/tpl/**/*.html', ['cache_tpl_html_dev']);
});

gulp.task('test-unit', function (cb) {
    execFile('./phantomjs', ['./tests/phantom/run-tests.js'],
        function (err, stdout, stderr) {
            if (err && err.code === 'ENOENT') {
                console.error('\nThe tests did NOT run!\n');
                console.log('Please download phantomjs for your platform from http://phantomjs.org/download.html');
                console.log('Then place the phantomjs binary in this directory or in your PATH');
                return;
            } else {
                console.log(stderr);
            }
            console.log(stdout);
            cb(err);
        });
});

gulp.task('dev-js', sequence('cache_tpl_html_dev', 'concat_js_dev', 'compress_js_dev', 'concat_js_lib_dev'));
gulp.task('dev-css', sequence('compile_scss_dev', 'compress_css_dev'));
gulp.task('dev', sequence('dev-js', 'dev-css'));
gulp.task('test', sequence('dev-js', 'test-unit'));

// for browser-sync
gulp.task('sync-js-watch', ['concat_js_dev'], reload);
gulp.task('serve', function () {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    gulp.watch('src/js/**/*.js', ['sync-js-watch']);
    gulp.watch('src/compiledFiles/sra.js', ['compress_js_dev']);

    gulp.watch('bower_modules/**/*.js', ['concat_js_lib_dev']);

    gulp.watch('src/scss/**/*.scss', ['compile_scss_dev']);
    gulp.watch('src/compiledFiles/sra.css', ['compress_css_dev']);

    gulp.watch('src/tpl/**/*.html', ['cache_tpl_html_dev']);
    gulp.watch('src/tpl/**/*.html').on("change", reload);
});

gulp.task('default', function () {
    gulp.start('dev');
});
