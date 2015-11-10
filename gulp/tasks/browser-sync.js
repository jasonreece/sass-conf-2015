var gulp = require('gulp');
var browserSync = require('browser-sync');

gulp.task('browser-sync', ['styles', 'jekyll-build'], function() {
  browserSync({
    server: {
      baseDir: '_site'
    },
    open: false,
    port: 4000
  });
});
