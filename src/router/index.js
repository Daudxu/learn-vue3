import { createRouter, createWebHistory } from 'vue-router'

//路由数组的类型 RouteRecordRaw
const routes = [
  {
    path: "/",
    name: 'home', 
    component: () => import("../view/home/Home.vue"),
  },
  {
    path: "/example01",
    name: 'example01', 
    component: () => import("../view/example_01/Index.vue"),
  },
  {
    path: "/example02",
    name: 'example02', 
    component: () => import("../view/example_02/Index.vue"),
  },
  {
    path: "/list",
    name: 'list', 
    component: () => import("../view/list/List.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

