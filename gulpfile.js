'use string'

const { src, dest, watch, series, parallel } = require('gulp');
const scss = require('gulp-sass')(require('sass'));
const avif = require('gulp-avif');
const webp = require('gulp-webp');
const autoprefixer = require('gulp-autoprefixer');
const concat = require('gulp-concat');
const rename = require('gulp-rename');
const uglify = require('gulp-uglify');
const cleanCss = require('gulp-clean-css');
const newer = require('gulp-newer');
const clean = require('gulp-clean');





function styles(){
    return src('app/scss/style.scss')
        .pipe(scss())
        .pipe(autoprefixer({
			cascade: false
		}))
        .pipe(rename('style-dark.css'))
        .pipe(dest('app/css'))
        .pipe(src('app/css/style-dark.css'))
        .pipe(cleanCss())
        .pipe(rename('style.min.css'))
        .pipe(dest('app/css'))
}


function scripts(){
    return src(['node_modules/jquery/dist/jquery.js',
        'node_modules/slick-carousel/slick/slick.js',
        'app/js/main.js'])
        .pipe(concat('scripts.js'))
        .pipe(dest('app/js'))
        .pipe(src('app/js/scripts.js'))
        .pipe(uglify())
        .pipe(rename('scripts.min.js'))
        .pipe(dest('app/js'))

}

function imagesConv(){
    return src('app/images/*.*')
        .pipe(newer('app/images/avif'))
        .pipe(avif({quality: 50}))
        .pipe(dest('app/images/avif'))
}


function watching(){
    watch(['app/scss/**/*.scss'],styles)
    watch(['app/js/main.js'], scripts)
    watch(['app/images/*.*'], imagesConv)
}


function build(){
    return src(['app/css/*',
            'app/*.html',
            'app/js/*',
            'app/images/avif/*',
            'app/images/svg/*'  
        ],{base: 'app'})
        .pipe(dest("dist"))
}


function cleanC(){
    return src('dist')
        .pipe(clean())
}


exports.styles = styles;
exports.scripts = scripts;
exports.imagesConv = imagesConv;
exports.watching = watching;
exports.build = build;
exports.cleanC = cleanC;

exports.bulding = series(cleanC,build);
exports.default = parallel(styles,scripts,imagesConv,watching);