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
    path: "/example03",
    name: 'example03', 
    component: () => import("../view/example_03/Index.vue"),
  },
  {
    path: "/example04",
    name: 'example04', 
    component: () => import("../view/example_04/Index.vue"),
  },
  {
    path: "/example05",
    name: 'example05', 
    component: () => import("../view/example_05/Index.vue"),
  },
  {
    path: "/example06",
    name: 'example06', 
    component: () => import("../view/example_06/Index.vue"),
  },
  {
    path: "/example07",
    name: 'example07', 
    component: () => import("../view/example_07/Index.vue"),
  },
  {
    path: "/example08",
    name: 'example08', 
    component: () => import("../view/example_08/Index.vue"),
  },
  {
    path: "/example09",
    name: 'example09', 
    component: () => import("../view/example_09/Index.vue"),
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

