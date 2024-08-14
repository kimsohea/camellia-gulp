export const scripts = () => {
  return app.gulp
    .src([app.path.src.scripts])
    .pipe(app.gulp.dest(app.path.build.scripts))
    .pipe(app.plugins.browsersync.stream());
};
