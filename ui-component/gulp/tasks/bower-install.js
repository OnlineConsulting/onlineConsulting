var gulp = require('gulp'),
    gUtil = require('gulp-util'),
    bower = require('bower');

gulp.task('bower:install', function bowerInstall(done) {
    bower.commands.install()
         .on('log', function(data) {
             gUtil.log('bower', gUtil.colors.cyan(data.id), data.message);
         })
         .on('end', function ended() {
             done();
         });
});