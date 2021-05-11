/*
 * @Author: Fone`峰
 * @Date: 2021-04-02 11:27:52
 * @LastEditors: Fone`峰
 * @LastEditTime: 2021-05-11 13:09:59
 * @Description: file content
 * @Email: qinrifeng@163.com
 * @Github: https://github.com/FoneQinrf
 */
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
const { resolve } = require('path');
import Markdown from 'vite-plugin-md';
import vueJsx from '@vitejs/plugin-vue-jsx';
import { getLanguage, highlight } from 'highlight.js';
// import {  } from "./src/packages/card/index.vue";

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
    vueJsx({}),
    Markdown({
      markdownItSetup(md) {
        md.options.typographer = true;
        md.options.quotes = '{{}}';
        md.options.html = true;
        md.options.langPrefix = 'language-';
        md.options.highlight = function (str, lang) {
          if (lang && getLanguage(lang)) {
            const { name } = getLanguage(lang);
            return `<pre><code class="hljs ${name}"><span class="copy" value="${str}">复制代码</span>${
              highlight(lang, str, true).value
            }</code></pre>`;
          }
          return `<pre><code class="hljs"><span class="copy" value="${str}">复制代码</span>${md.utils.escapeHtml(
            str
          )}</code></pre>`;
        };
      }
    }),
    // Markdown()
  ],
  build: {
    target: 'es2015',
    cssCodeSplit: false,
    rollupOptions: {
      input: {
        index: resolve(__dirname, 'index.html'),
        mobile: resolve(__dirname, 'mobile.html')
      }
    }
  }
});
