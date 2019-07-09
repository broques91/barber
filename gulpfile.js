const gulp = require('gulp');

// CSS Plugins
const minify = require('gulp-clean-css');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');

// JS Plugins
const uglify = require('gulp-uglify');
const babel = require('gulp-babel');

// Utility Plugins
const concat = require('gulp-concat');
const sourcemaps = require('gulp-sourcemaps');
const imagemin = require('gulp-image');
const bowerupdate = require('gulp-bower');
const del = require('del');

// Browsers Plugins
const browserSync = require('browser-sync');
const reload = browserSync.reload;

// Config
const config_gulp = require('./config_gulp.js');

const config = {
    bowerDir: './src/vendor'
};

// Paths
const paths = {
    scripts: {
        src: 'src/assets/js/**/*.js',
        dest: 'dist/assets/js/',
        map: './'
    },
    styles: {
        src: 'src/assets/scss/**/*.scss',
        dest: 'dist/assets/css/'
    },
    images: {
        src: 'src/assets/img/**/*',
        dest: 'dist/assets/img/'
    },
    fonts: {
        src: 'src/assets/fonts/**/*',
        dest: 'dist/assets/fonts/'
    },
    html: {
        src: '**/*.html'
    }
};

// Clean
const clean = () => { del(['src']); }

// Start
const bower = (done) => {
    bowerupdate({
            cmd: 'update'
        })
        .pipe(gulp.dest(config.bowerDir))
        done();
}

// Scripts
const scripts = (done) => {
    gulp.src(paths.scripts.src)
        .pipe(babel({
            presets: ["@babel/preset-env"]
        }))
        .pipe(sourcemaps.init())
        .pipe(uglify())
        .pipe(concat('scripts.js'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(paths.scripts.dest))
        .pipe(reload({
            stream: true
        }))
        done();
}

// Styles
const styles = (done) => {
    gulp.src(paths.styles.src)
        .pipe(sourcemaps.init())
        .pipe(
            sass({
                errLogToConsole: true,
                outputStyle: "compressed"
            })
        )
        .pipe(
            autoprefixer({
            Browserslist: [
                "last 1 version",
                "> 1%",
                "maintained node versions",
                "not dead"
            ],
            cascade: false
            })
        )
        .pipe(concat('style.css'))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest(paths.styles.dest))
        .pipe(reload({
            stream: true
        }))
        done();
}

// Images
const images = (done) => {
    gulp.src(paths.images.src)
    .pipe(imagemin())
    .pipe(gulp.dest(paths.images.dest))
    .pipe(reload({
        stream: true
    }))
    done();
}

// Vendor
const vendor = (done) => {
    gulp.src(config_gulp.vendorConfig)
        .pipe(sourcemaps.init())
        .pipe(concat('vendor.js'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./dist/assets/js'));
        done();
}

// Live reload
const browsersync = () => {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
}

 const html = () => {
    gulp.src(paths.html.src)
    gulp.watch(paths.html.src).on('change', reload);
 }

// Watch
const watch = () => {
    gulp.watch(paths.scripts.src, scripts);
    gulp.watch(paths.images.src, images);
    gulp.watch(paths.styles.src, styles);
}

// Prod
const prod = gulp.parallel(html, browsersync, watch, vendor, styles, scripts, images);

// Build
const build = gulp.series(clean, gulp.parallel(scripts, styles, images));

// Tasks
exports.clean = clean;
exports.bower = bower;
exports.scripts = scripts;
exports.styles = styles;
exports.images = images;
exports.vendor = vendor;
exports.browsersync = browsersync;
exports.watch = watch;
exports.prod = prod;
exports.build = build;

// Default
gulp.task('default', prod);


