const gulp = require("gulp");
const postcss = require("gulp-postcss");
const mqpacker = require("css-mqpacker");
const autoprefixer = require("autoprefixer");
const stylelint = require("stylelint");
const reporter = require("postcss-reporter");
const cleanCSS = require("gulp-clean-css");
const mode = require("gulp-mode")({
  modes: ["production", "development"],
  default: "development",
  verbose: false,
});

const stylesSrc = "src/**/*.css";

gulp.task("default", function () {
  return gulp.watch(stylesSrc, function () {
    return gulp
      .src(stylesSrc)
      .pipe(postcss([stylelint(), reporter({ clearReportedMessages: true })]))
      .pipe(postcss([mqpacker({ sort: true })]))
      .pipe(
        postcss([
          autoprefixer({
            cascade: false,
          }),
        ])
      )
      .pipe(mode.production(cleanCSS()))
      .pipe(gulp.dest("./dest"));
  });
});
