const srcFolder = "./src";
const buildFolder = "./app";

export const path = {
  src: {
    html: [
      `${srcFolder}/html/*.html`,
    ],
    mainScss: `${srcFolder}/assets/scss/main.scss`,
    scss: `${srcFolder}/assets/scss/*.scss`,
    scripts: `${srcFolder}/assets/js/*.js`,
    images: `${srcFolder}/assets/img/*.{jpg,jpeg,gif,png,webp,jfif}`,
    svg: `${srcFolder}/assets/img/*.svg`,
  },
  watch: {
    html: `${srcFolder}/html/*.html`,
    scss: `${srcFolder}/assets/scss/*.scss`,
    scripts: `${srcFolder}/assets/js/*.js`,
    images: `${srcFolder}/assets/img/*.{jpg,jpeg,gif,png,webp,svg}`,
  },
  build: {
    html: buildFolder,
    scss: `${buildFolder}/assets/scss`,
    css: `${buildFolder}/assets/css`,
    scripts: `${buildFolder}/assets/js`,
    images: `${buildFolder}/assets/img`,
  },
  srcFolder: srcFolder,
  buildFolder: buildFolder,
};
