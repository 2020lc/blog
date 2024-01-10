import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/pages/home/home-index.vue'),
  },
  {
    path: '/other',
    name: 'Other',
    component: () => import('@/pages/other/other-index.vue'),
  },
];

const baseUrl = process.env.NODE_ENV === 'development' ? '/' : '/blog';
console.log(baseUrl);
const router = createRouter({
  history: createWebHistory(baseUrl),
  routes,
});
export default router;
