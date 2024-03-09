import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/Home.vue';
import KrozlyisWorldPage from '../views/KrozlyisWorldPage.vue';
import KrozlyisMap from '../views/KrozlyisMaps/KrozlyisMapPage.vue';
import KirielWorldPage from '../views/KirielWorldPage.vue';
import ElarisMap from '../views/KirielMaps/ElarisMapPage.vue';

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
    path: '/krozlyis',
    name: 'Krozlyis',
    component: KrozlyisWorldPage,
  },
  {
    path: '/krozlyis-map',
    name: 'Krozlyis-map',
    component: KrozlyisMap,
  },
  {
    path: '/kiriel',
    name: 'Kiriel',
    component: KirielWorldPage,
  },
  {
    path: '/elaris-map',
    name: 'elaris-map',
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
