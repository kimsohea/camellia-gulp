import dartSass from "sass";
import gulpSass from "gulp-sass";
const sass = gulpSass(dartSass);

export const scssCompile = () => {
  return app.gulp
    .src(app.path.src.mainScss, { sourcemaps: true })
    .pipe(app.plugins.if(app.isBuild, sass({ outputStyle: "compressed" })))
    .pipe(app.plugins.if(app.isDev, sass({ outputStyle: "expanded" })))
    .pipe(app.plugins.concat("app.css"))
    .pipe(app.gulp.dest(app.path.build.css))
    .pipe(app.plugins.browsersync.stream());
};

export const scssCopy = () => {
  return app.gulp
    .src(app.path.src.scss, { sourcemaps: true })
    .pipe(app.gulp.dest(app.path.build.scss));
};
