/*
 * @Author: Fone`峰
 * @Date: 2021-04-02 15:44:28
 * @LastEditors: Fone`峰
 * @LastEditTime: 2021-04-07 15:19:53
 * @Description: file content
 * @Email: qinrifeng@163.com
 * @Github: https://github.com/FoneQinrf
 */
import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

const pagesRouter: Array<RouteRecordRaw> = [];

const modulesPage = import.meta.glob('/src/packages/**/demo.vue');
for (const module in modulesPage) {
    const name = (/packages\/(.*)\/demo.vue/.exec(module) as any[])[1];
    pagesRouter.push({
        path: '/' + name,
        component: modulesPage[module],
        name
    })
}

const routes: Array<RouteRecordRaw> = [{
    path: "/",
    name: "/",
    component: () => import("./views/home/index.vue"),
},
{
    path: "/",
    name: "layout",
    component: () => import("./views/layout/index.vue"),
    children: pagesRouter
}
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

router.beforeEach((to, from, next) => {
    if (window) {
        document.title = `vvmui${String(to.name === "/" ? "" : `-${String(to.name)}`)}`
    }
    next();
})

export default router;