/*
 * @Author: Fone`峰
 * @Date: 2021-04-02 11:27:52
 * @LastEditors: Fone`峰
 * @LastEditTime: 2021-04-25 14:15:35
 * @Description: file content
 * @Email: qinrifeng@163.com
 * @Github: https://github.com/FoneQinrf
 */
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
const { resolve } = require('path');
import vueJsx from '@vitejs/plugin-vue-jsx';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [{ find: '@', replacement: resolve(__dirname, './src') }],
    extensions: ['.js', '.vue', '.jsx', '.tsx', '.css', '.scss', '.md', '.json']
  },
  css: {
    postcss: {
      plugins: [
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
      ]
    }
  },
  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/]
    }),
    vueJsx({})
  ],
  build: {
    outDir: resolve(__dirname, './lib'),
    target: 'es2015',
    cssCodeSplit: false,
    rollupOptions: {
      // 请确保外部化那些你的库中不需要的依赖
      external: ['vue'],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: 'Vue'
        }
      }
    },
    lib: {
      entry: 'src/vvmui.ts',
      name: 'vvmui',
      formats: ['es', 'umd']
    }
  }
});
