import { createRouter, createWebHistory } from 'vue-router';
import AboutPage from '@/views/AboutPage';
import HomePage from '@/views/HomePage';

const routes = [
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/about',
    component: AboutPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
