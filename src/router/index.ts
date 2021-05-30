/*
 * @Author: Fone`峰
 * @Date: 2021-04-02 15:44:28
 * @LastEditors: Fone`峰
 * @LastEditTime: 2021-05-25 15:52:25
 * @Description: file content
 * @Email: qinrifeng@163.com
 * @Github: https://github.com/FoneQinrf
 */
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
const pagesRouter: Array<RouteRecordRaw> = [];

const modulesPage = import.meta.glob('/src/packages/**/index.md');
for (const module in modulesPage) {
  const name = (/packages\/(.*)\/index.md/.exec(module) as any[])[1];
  pagesRouter.push({
    path: '/' + name,
    component: modulesPage[module],
    name
  });
}

const pages = import.meta.glob('/src/views/**/index.md');
for (const module in pages) {
  const name = (/views\/(.*)\/index.md/.exec(module) as any[])[1];
  pagesRouter.push({
    path: '/' + name,
    component: pages[module],
    name
  });
}

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: '/',
    component: () => import('@/views/home/index.vue'),
    redirect: 'intro'
  },
  {
    path: '/',
    name: 'layout',
    component: () => import('@/views/layout/index.vue'),
    children: pagesRouter
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

router.beforeEach((to, from, next) => {
  if (window) {
    document.title = `vvmui${String(
      to.name === '/' ? '' : `-${String(to.name)}`
    )}`;
  }
  next();
});

export default router;
