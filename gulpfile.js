const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const del = require('del');

const paths = {
  images: {
    src: 'temp/images/**',
    dest: 'public/images/'
  }
};

gulp.task('images', () => {
  return gulp.src(paths.images.src)
    .pipe(imagemin())
    .pipe(gulp.dest(paths.images.dest));
});

gulp.task('clean', () => del(['temp/images/**', '!temp/images']));

gulp.task('default', gulp.series('images', 'clean'));