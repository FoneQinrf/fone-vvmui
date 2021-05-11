/*
 * @Author: Fone`峰
 * @Date: 2021-04-02 12:04:14
 * @LastEditors: Fone`峰
 * @LastEditTime: 2021-05-11 15:30:29
 * @Description: file content
 * @Email: qinrifeng@163.com
 * @Github: https://github.com/FoneQinrf
 */
import { createApp } from 'vue';
import App from './App.vue';
import "@/style/index.scss";
import router from "./router";
import vvmui from "@/vvmui";
import "@/../lib/style.css";

createApp(App).use(router).use(vvmui).mount('#app')
