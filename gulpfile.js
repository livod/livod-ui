var gulp = require("gulp");
var ts = require("gulp-typescript");
var tsProject = ts.createProject("tsconfig.json");
var merge = require("merge2");
var less = require("gulp-less");
var replace = require("gulp-replace");
gulp.task("compileTs", function () {
  const tsResult = tsProject
    .src()
    .pipe(replace("index.less", "index.css"))
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
