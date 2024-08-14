import concat from "gulp-concat";
import uglify from "gulp-uglify-es";
import fileinclude from "gulp-file-include";
import imagemin from "gulp-imagemin";
import newer from "gulp-newer";
import ifPlugin from "gulp-if";
import browsersync from "browser-sync";
import { deleteAsync } from "del";

export const plugins = {
  concat: concat,
  uglify: uglify.default,
  fileinclude: fileinclude,
  imagemin: imagemin,
  newer: newer,
  if: ifPlugin,
  browsersync: browsersync,
  del: deleteAsync,
};
