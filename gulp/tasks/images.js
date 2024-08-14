export const images = () => {
  return app.gulp
    .src(app.path.src.images)
    .pipe(app.plugins.newer(app.path.build.images))
    .pipe(
      app.plugins.if(
        app.isBuild,
        app.plugins.imagemin({
          progressive: true,
          svgPlugins: [{ removeViewBox: false }],
          interlaced: true,
          optimizationLevel: 3,
        })
      )
    )
    .pipe(app.gulp.dest(app.path.build.images))
    .pipe(app.gulp.src(app.path.src.svg))
    .pipe(app.plugins.newer(app.path.build.images))
    .pipe(app.gulp.dest(app.path.build.images))
    .pipe(app.plugins.browsersync.stream());
};
