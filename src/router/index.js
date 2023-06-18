import { createRouter, createWebHistory } from 'vue-router';
import AboutComic from '@/views/AboutComic';
import ComicList from '@/views/ComicList';

const routes = [
  {
    path: '/',
    name: 'ComicList',
    component: ComicList,
  },
  {
    path: '/comic/:id',
    name: 'AboutComic',
    component: AboutComic,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
