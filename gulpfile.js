const spawn = require("child_process").spawn;
const gulp = require("gulp");
const css = require("gulp-css");
var ts = require("gulp-typescript");
var tsProject = ts.createProject("tsconfig.json");

/* Build */
gulp.task("build-ts", function() {
  return tsProject
    .src()
    .pipe(tsProject())
    .js.pipe(gulp.dest("app/"));
});

gulp.task("build-css", function() {
  return gulp
    .src(["src/**/*.css"])
    .pipe(css())
    .pipe(gulp.dest("app/"));
});

gulp.task("build", gulp.series("build-css", "build-ts"));

/* Copy */

gulp.task("copy-html", () => {
  return gulp.src("src/*.html").pipe(gulp.dest("app/"));
});

gulp.task("copy-assets", () => {
  return gulp.src("assets/**/*").pipe(gulp.dest("app/assets"));
});

gulp.task("copy", gulp.parallel("copy-html", "copy-assets"));

/* Execute */

const cmd = name => `./node_modules/.bin/${name}`;
const args = more => (Array.isArray(more) ? ["."].concat(more) : ["."]);

gulp.task(
  "start",
  gulp.series("copy", "build", () => {
    spawn(cmd("electron"), args(), { stdio: "inherit" }).on(
      "close",
      (code, signal) => {
        console.log("Process " + signal + " exited with code " + code);
      }
    );
  })
);

gulp.task(
  "release",
  gulp.series("copy", "build", () => {
    spawn(cmd("electron-builder"), args(), { stdio: "inherit" }).on(
      "close",
      (code, signal) => {
        console.log("Process " + signal + " exited with code " + code);
      }
    );
  })
);

gulp.task(
  "test",
  gulp.series("copy", "build", () => {
    spawn(cmd("jest"), args(), { stdio: "inherit" }).on(
      "close",
      (code, signal) => {
        console.log("Process " + signal + " exited with code " + code);
      }
    );
  })
);
