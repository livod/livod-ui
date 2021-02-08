const gulp = require("gulp");
const ts = require("gulp-typescript");
const tsProject = ts.createProject("tsconfig.json");
const merge = require("merge2");
const less = require("gulp-less");
const replace = require("gulp-replace");
const header = require("gulp-header");

gulp.task("compileTs", function () {
  const tsResult = tsProject
    .src()
    .pipe(replace("index.less", "index.css"))
    .pipe(header("/* eslint-disable import/first */\n"))
    .pipe(tsProject());
  return merge([
    tsResult.dts.pipe(gulp.dest("esm")),
    tsResult.js.pipe(gulp.dest("esm")),
  ]);
});

gulp.task("compileLess", function () {
  return gulp
    .src("src/**/*.less") //该任务针对的文件，你需要编译的文件
    .pipe(less()) //该任务调用的模块
    .pipe(gulp.dest("esm")); //将会在css下生成index.css
});

gulp.task("default", gulp.series("compileTs", "compileLess"));
