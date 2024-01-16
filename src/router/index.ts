import { createRouter, createWebHashHistory } from 'vue-router'
const Home = () => import('../views/home/index.vue')
const Message = () => import('../views/message/index.vue')
const Dialog = () => import('../views/dialog/index.vue')
const Sticky = () => import('../views/sticky/index.vue')

export const routes = [
  {
    path: '/',
    component: Home,
    name: '首页',
  },
  {
    path: '/message',
    component: Message,
    name: 'message',
  },
  {
    path: '/dialog',
    component: Dialog,
    name: 'dialog',
  },
  {
    path: '/sticky',
    component: Sticky,
    name: 'sticky',
  },
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes: routes,
})
