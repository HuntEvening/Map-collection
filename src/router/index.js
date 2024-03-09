import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/Home.vue';
import KirielWorldPage from '../views/Kiriel.vue';
import ElarisMap from '../views/KirielMaps/Elaris.vue';

const routesList = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
  },
  {
    path: '/sagas',
    name: 'Sagas',
    component: HomePage,
  },
  {
    path: '/about',
    name: 'About',
    component: HomePage,
  },
  {
    path: '/kiriel',
    name: 'Kiriel',
    component: KirielWorldPage,
  },
  {
    path: '/elaris',
    name: 'Elaris',
    component: ElarisMap,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routesList,
  scrollBehavior() {
    // always scroll to top
    return { top: 0 };
  },
});

export default router;
