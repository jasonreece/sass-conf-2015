var gulp = require('gulp');
var browserSync = require('browser-sync');
var childProcess = require('child_process');

var messages = {
  jekyllBuild: '<span style="color: grey">Running:</span> $ jekyll build'
};

gulp.task('jekyll-build', function (done) {
  browserSync.notify(messages.jekyllBuild);
  return childProcess.spawn('jekyll', ['build', '--config', '_config_production.yml'], {stdio: 'inherit'})
  .on('close', done);
});
