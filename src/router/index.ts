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
  {
    path: '/schedule',
    name: 'Schedule',
    component: () => import('@/pages/schedule/schedule-index.vue'),
  }
];

const baseUrl = process.env.NODE_ENV === 'development' ? '/' : '/blog';
const router = createRouter({
  history: createWebHistory(baseUrl),
  routes,
});
export default router;
