import { createRouter, createWebHistory } from 'vue-router'

//路由数组的类型 RouteRecordRaw
const routes = [
  {
    path: "/",
    name: 'home', 
    component: () => import("../view/home/Home.vue"),
  },
  {
    path: "/todolist",
    name: 'TodoList', 
    component: () => import("../view/todoList/TodoList.vue"),
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

