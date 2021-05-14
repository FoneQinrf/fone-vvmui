/*
 * @Author: Fone`峰
 * @Date: 2021-04-02 11:27:52
 * @LastEditors: Fone`峰
 * @LastEditTime: 2021-05-14 15:37:12
 * @Description: file content
 * @Email: qinrifeng@163.com
 * @Github: https://github.com/FoneQinrf
 */
import { createApp } from 'vue';
import App from './App.vue';
import router from '@/router';
import './style/index.scss';
// import Code from './components/Code.vue';
import Badge from "./components/Badge.vue";
import vvmui from "@/vvmui";

const app = createApp(App);
app.use(vvmui);
app.component('Badge', Badge);
// app.component('Code', Code);

app.use(router).mount('#app');
