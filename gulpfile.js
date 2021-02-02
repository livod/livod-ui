var gulp = require("gulp");
var ts = require("gulp-typescript");
var tsProject = ts.createProject("tsconfig.json");
var merge = require("merge2");

gulp.task("default", function () {
  const tsResult = tsProject.src().pipe(tsProject());
  return merge([
    tsResult.dts.pipe(gulp.dest("esm/@types")),
    tsResult.js.pipe(gulp.dest("esm")),
  ]);
});
