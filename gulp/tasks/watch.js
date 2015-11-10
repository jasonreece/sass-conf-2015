var gulp = require('gulp');

gulp.task('watch', function() {
    // styles
    gulp.watch('assets/stylesheets/**/*.scss', [ 'styles', 'jekyll-rebuild']);

    // markup
    gulp.watch(['./**/*.html', '!./.git/**', '!./_site/**', '!./assets/**', '!./gulp/**','!./node_modules/**', '!./bower_components/**'], ['jekyll-rebuild']);

    // markdown
    gulp.watch('_posts/*.md', ['jekyll-rebuild']);
});

