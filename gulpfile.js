/*
 * @Author: Fone`峰
 * @Date: 2021-04-07 21:07:39
 * @LastEditors: Fone`峰
 * @LastEditTime: 2021-05-16 13:00:48
 * @Description: file content
 * @Email: qinrifeng@163.com
 * @Github: https://github.com/FoneQinrf
 */
var gulp = require('gulp');
var watch = require('gulp-watch');
var postcss = require('gulp-postcss');
const sass = require('gulp-sass');

gulp.task('default', function () {
  var processors = [
    require('autoprefixer'),
    require('postcss-px-to-viewport')({
      viewportWidth: 750, // 视窗的宽度，对应的是我们设计稿的宽度，一般是750
      viewportHeight: 1334, // 视窗的高度，根据750设备的宽度来指定，一般指定1334，也可以不配置
      unitPrecision: 3, // 指定`px`转换为视窗单位值的小数位数（很多时候无法整除）
      viewportUnit: 'vw', // 指定需要转换成的视窗单位，建议使用vw
      selectorBlackList: ['.vvm-ignore', '.hairlines'], // 指定不转换为视窗单位的类，可以自定义，可以无限添加,建议定义一至两个通用的类名
      minPixelValue: 1, // 小于或等于`1px`不转换为视窗单位，你也可以设置为你想要的值
      mediaQuery: false, // 允许在媒体查询中转换`px`
      propList: ['*', '!font-size']
    }),
    require('postcss-aspect-ratio-mini'),
    require('postcss-write-svg')({
      utf8: false
    })
  ];
  return watch(
    ['./src/style.scss', './src/packages/**/index.scss', './src/style/*.scss'],
    function () {
      gulp
        .src('./src/style.scss')
        .pipe(sass())
        .pipe(postcss(processors))
        .pipe(gulp.dest('lib'));
    }
  );
});
