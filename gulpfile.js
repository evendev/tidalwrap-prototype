var rsync = require('rsyncwrapper').rsync;

var gulp = require('gulp');
var gutil = require('gulp-util');
var shell = require('gulp-shell');


var secrets = require('./secrets.json');


gulp.task('imagePerms', shell.task([
  'chmod -R 755 public/img/*'
]));

gulp.task('compile', shell.task([
  'harp compile'
]));

gulp.task('serve-en', shell.task([
  'NODE_ENV=en harp server'
]));
gulp.task('serve-es', shell.task([
  'NODE_ENV=es harp server'
]));

gulp.task('rsync', function() {
  rsync({
    ssh: true,
    src: './www/',
    dest: secrets.servers.dev.rsyncDest,
    recursive: true,
    syncDest: true,
    args: ['--verbose']
  }, function(error, stdout, stderr, cmd) {
    gutil.log(stdout);
  });
});

gulp.task('deploy', ['compile', 'rsync']);
