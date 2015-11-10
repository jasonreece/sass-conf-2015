var tasks = [
  'browser-sync',
  'browser-sync-reload',
  'default',
  'jekyll-build',
  'jekyll-rebuild',
  'styles',
  'watch'
];

tasks.forEach(function(task) {
  exports.task = require('./tasks/' + task + '.js');
});
