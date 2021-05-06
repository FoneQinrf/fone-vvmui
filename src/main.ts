/*
 * @Author: Fone`峰
 * @Date: 2021-04-02 11:27:52
 * @LastEditors: Fone`峰
 * @LastEditTime: 2021-05-06 13:46:09
 * @Description: file content
 * @Email: qinrifeng@163.com
 * @Github: https://github.com/FoneQinrf
 */
import { createApp } from 'vue';
import App from './App.vue';
import router from '@/router';
import './style/index.scss';
import Code from './components/code.vue';
import vvmui from "@/vvmui";

const app = createApp(App);
app.use(vvmui);
app.component('Code', Code);

app.use(router).mount('#app');
