/*
 * @Author: Fone`峰
 * @Date: 2021-04-02 11:27:52
 * @LastEditors: Fone`峰
 * @LastEditTime: 2021-05-08 14:49:33
 * @Description: file content
 * @Email: qinrifeng@163.com
 * @Github: https://github.com/FoneQinrf
 */
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
const { resolve } = require('path');
import Markdown from 'vite-plugin-md';
import vueJsx from '@vitejs/plugin-vue-jsx';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/fone-vvmui/',
  resolve: {
    alias: [{ find: '@', replacement: resolve(__dirname, './src') }],
    extensions: [
      '.ts',
      '.js',
      '.vue',
      '.jsx',
      '.tsx',
      '.css',
      '.scss',
      '.md',
      '.json'
    ]
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/style/var.scss";`
      }
    }
  },
  plugins: [
    vue({ include: [/\.vue$/, /\.md$/] }),
    Markdown(),
    vueJsx({})
  ],
  build: {
    rollupOptions: {
      input: {
        index: resolve(__dirname, 'index.html'),
        mobile: resolve(__dirname, 'mobile.html')
      }
    }
  }
});
