/*
 * @Author: Fone`峰
 * @Date: 2021-04-02 12:04:14
 * @LastEditors: Fone`峰
 * @LastEditTime: 2021-05-25 13:50:53
 * @Description: file content
 * @Email: qinrifeng@163.com
 * @Github: https://github.com/FoneQinrf
 */
import { createApp } from 'vue';
import App from './App.vue';
import '@/style/index.scss';
import router from './router';
import vvmui from '@/vvmui';
import '@/../lib/style.css';
import '@/utils/touch';

createApp(App).use(router).use(vvmui).mount('#app');
