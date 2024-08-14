import gulp from "gulp";
import { path } from "./gulp/config/path.js";
import { plugins } from "./gulp/config/plugins.js";

import { html } from "./gulp/tasks/html.js";
import { scssCompile, scssCopy } from "./gulp/tasks/styles.js";
import { scripts } from "./gulp/tasks/scripts.js";
import { images } from "./gulp/tasks/images.js";
import { server } from "./gulp/tasks/server.js";
import { reset } from "./gulp/tasks/reset.js";

global.app = {
  isBuild: process.argv.includes("--build"),
  isDev: !process.argv.includes("--build"),
  path: path,
  gulp: gulp,
  plugins: plugins,
};

function watcher() {
  gulp.watch(app.path.watch.html, html);
  gulp.watch(app.path.watch.scss, scssCompile);
  gulp.watch(app.path.watch.scripts, scripts);
  gulp.watch(app.path.watch.images, images);
}

const mainTasks = gulp.parallel(html, scssCompile, scssCopy, scripts, images);

const dev = gulp.series(reset, mainTasks, gulp.parallel(server, watcher));
const build = gulp.series(reset, mainTasks);

export { dev };
export { build };
gulp.task("default", dev);
