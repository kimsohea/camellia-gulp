export const html = () => {
  return app.gulp
    .src(app.path.src.html)
    .pipe(app.plugins.fileinclude())
    .pipe(app.gulp.dest(app.path.build.html))
    .pipe(app.plugins.browsersync.stream());
};
