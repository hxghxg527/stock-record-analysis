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
    configJson = require('./src/config.json'),
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

gulp.task('compile_scss_dev', function() {
    gulp.src('./src/scss/app.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .on('error', handleError)
        .pipe(postcss([autoprefixer({
            browsers: ['iOS 7', '> 5%']
        })]))
        .pipe(rename('common.css'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./src/css'))
        .pipe(filter('**/*.css')) // Filtering stream to only css files
        .pipe(reload({
            stream: true
        }));
});

gulp.task('compress_css_dev', function() {
    gulp.src('./src/css/common.css')
        .pipe(csso())
        .on('error', handleError)
        .pipe(rename('common.min.css'))
        .pipe(gulp.dest('./src/css'));
});

gulp.task('concat_js_dev', function() {
    gulp.src('./src/js/**/*.js')
        .pipe(sourcemaps.init())
        .pipe(concat('common.js', {
            newLine: ';\r\n'
        }))
        .on('error', handleError)
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./src/scripts'))
        .pipe(reload({
            stream: true
        }));
});

gulp.task('compress_js_dev', function() {
    gulp.src('./src/scripts/common.js')
        .pipe(uglify())
        .on('error', handleError)
        .pipe(rename('common.min.js'))
        .pipe(gulp.dest('./src/scripts'));
});

gulp.task('concat_js_lib_dev', function() {
    gulp.src([
            './src/lib-bower/jquery/dist/jquery.min.js',
            './src/lib-bower/angular/angular.min.js',
            './src/lib-bower/angular-ui-router/release/angular-ui-router.min.js',
            './src/lib-bower/fastclick/lib/fastclick.js',
            './src/lib-bower/js-cookie/src/js.cookie.js',
            './src/lib-bower/iscroll/build/iscroll.js',
            './src/lib-bower/jPlayer/dist/jplayer/jquery.jplayer.min.js',
            './src/lib-customized/rangeslider.js',
            './src/lib-bower/ua-parser-js/dist/ua-parser.min.js'
        ])
        .pipe(concat('libs.js', {
            newLine: ';\r\n'
        }))
        .pipe(gulp.dest('./src/scripts'));
});

gulp.task('concat_js_lib_for_enter', function() {
    gulp.src([
            './src/lib-bower/js-cookie/src/js.cookie.js'
        ])
        .pipe(uglify())
        .pipe(concat('js.cookie.min.js', {
            newLine: ';\r\n'
        }))
        .pipe(gulp.dest('./src/scripts'));
});

gulp.task('cache_tpl_html_dev', function() {
    gulp.src('./src/tpl/**/*.html')
        .pipe(minifyHtml({
            empty: true,
            spare: true,
            quotes: true
        }))
        .pipe(ngHtml2Js({
            moduleName: "pv.templateCache",
            prefix: ""
        }))
        .pipe(concat("html2Template.js"))
        .pipe(gulp.dest("./src/js/templateCache"));
});

gulp.task('clean_scripts_dev', function() {
    return gulp.src('./src/scripts/**/*.js')
        .pipe(clean());
});

//===release task start

// gulp.task('clean_folders_release', function() {
//     return gulp.src('./release')
//         .pipe(clean());
// });

gulp.task('move_files_release', function() {
    gulp.src('./src/scripts/**/*')
        .pipe(gulp.dest('./release/scripts'));

    gulp.src('./src/css/**/*')
        .pipe(gulp.dest('./release/css'));

    gulp.src('./src/icons/**/*')
        .pipe(gulp.dest('./release/icons'));

    gulp.src('./src/json/**/*')
        .pipe(gulp.dest('./release/json'));

    gulp.src('./src/*.html')
        .pipe(gulp.dest('./release'));
});

var configJsonEnvironmentReg = new RegExp('"' + configJson.environment + '"');

gulp.task('move_config_json_for_qa_release', function() {
    return gulp.src('./src/config.json')
        .pipe(change(function(content) {
            return content.replace(configJsonEnvironmentReg, '\"qa\"');
        }))
        .pipe(gulp.dest('./release'));
});

gulp.task('move_config_json_for_staging_release', function() {
    return gulp.src('./src/config.json')
        .pipe(change(function(content) {
            return content.replace(configJsonEnvironmentReg, '\"staging\"');
        }))
        .pipe(gulp.dest('./release'));
});

gulp.task('move_config_json_for_liveUS_release', function() {
    return gulp.src('./src/config.json')
        .pipe(change(function(content) {
            return content.replace(configJsonEnvironmentReg, '\"liveUS\"');
        }))
        .pipe(gulp.dest('./release'));
});

gulp.task('move_config_json_for_liveCN_release', function() {
    return gulp.src('./src/config.json')
        .pipe(change(function(content) {
            return content.replace(configJsonEnvironmentReg, '\"liveCN\"');
        }))
        .pipe(gulp.dest('./release'));
});

gulp.task('move_activity_rendered_files_release', function() {
    gulp.src('./ar/src/script/**/*')
        .pipe(gulp.dest('./release/ar/script'));

    gulp.src('./ar/src/css/**/*')
        .pipe(gulp.dest('./release/ar/css'));

    gulp.src('./ar/src/icon/**/*')
        .pipe(gulp.dest('./release/ar/icon'));

    gulp.src('./ar/src/font/**/*')
        .pipe(gulp.dest('./release/ar/font'));

    gulp.src('./ar/src/tpl/**/*')
        .pipe(gulp.dest('./release/ar/tpl'));

    gulp.src('./ar/src/*.html')
        .pipe(gulp.dest('./release/ar'));

    gulp.src('./ar/src/config.json')
        .pipe(gulp.dest('./release/ar'));
});

// release:
gulp.task('_releaseCommon', sequence('move_files_release', 'move_activity_rendered_files_release'));

gulp.task('releaseQA', sequence('_releaseCommon', 'move_config_json_for_qa_release'));
gulp.task('releaseStaging', sequence('_releaseCommon', 'move_config_json_for_staging_release'));
gulp.task('releaseLiveUS', sequence('_releaseCommon', 'move_config_json_for_liveUS_release'));
gulp.task('releaseLiveCN', sequence('_releaseCommon', 'move_config_json_for_liveCN_release'));

//===release task end

gulp.task('watch', ['dev'], function() {
    gulp.watch('./src/js/**/*.js', ['concat_js_dev']);
    gulp.watch('./src/scripts/common.js', ['compress_js_dev']);

    gulp.watch('./src/lib-bower/**/*.js', ['concat_js_lib_dev']);
    gulp.watch('./src/lib-bower/**/*.js', ['concat_js_lib_for_enter']);

    gulp.watch('./src/scss/**/*.scss', ['compile_scss_dev']);
    gulp.watch('./src/css/common.css', ['compress_css_dev']);

    gulp.watch('./src/tpl/**/*.html', ['cache_tpl_html_dev']);
});

gulp.task('test-unit', function(cb) {
    execFile('./phantomjs', ['./tests/phantom/run-tests.js'],
        function(err, stdout, stderr) {
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

gulp.task('dev-js', sequence('cache_tpl_html_dev', 'concat_js_dev', 'compress_js_dev', 'concat_js_lib_dev', 'concat_js_lib_for_enter'));
gulp.task('dev-css', sequence('compile_scss_dev', 'compress_css_dev'));
gulp.task('dev', sequence('dev-js', 'dev-css'));
gulp.task('test', sequence('dev-js', 'test-unit'));

// for browser-sync
gulp.task('sync-js-watch', ['concat_js_dev'], reload);
gulp.task('serve', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    gulp.watch('src/js/**/*.js', ['sync-js-watch']);
    gulp.watch('src/scripts/common.js', ['compress_js_dev']);

    gulp.watch('src/lib-bower/**/*.js', ['concat_js_lib_dev']);

    gulp.watch('src/lib-customized/**/*.js', ['concat_js_lib_dev']);
    gulp.watch('./src/lib-bower/**/*.js', ['concat_js_lib_for_enter']);

    gulp.watch('src/scss/**/*.scss', ['compile_scss_dev']);
    gulp.watch('src/css/common.css', ['compress_css_dev']);

    gulp.watch('src/tpl/**/*.html', ['cache_tpl_html_dev']);
    gulp.watch('src/tpl/**/*.html').on("change", reload);
});

gulp.task('default', function() {
    gulp.start('dev');
});
