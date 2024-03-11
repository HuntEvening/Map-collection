import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/Home.vue';

import KirielWorldPage from '../views/KirielWorldPage.vue';
import KrozlyisWorldPage from '../views/KrozlyisWorldPage.vue';
import NocturaWorldPage from '../views/NocturaWorldPage.vue';

import AdrelaLereonPage from '../views/KirielMaps/AdrelaLereonMapPage.vue';
import ElarisPage from '../views/KirielMaps/ElarisMapPage.vue';
import HH4710Page from '../views/KirielMaps/HH4710MapPage.vue';
import HH4883Page from '../views/KirielMaps/HH4883MapPage.vue';
import KrozlyisPage from '../views/KrozlyisMaps/KrozlyisMapPage.vue';
import YerenGarPage from '../views/KirielMaps/YerengarMapPage.vue';
import NocturaPage from '../views/NocturaMaps/NocturaMapPage.vue';

const routesList = [
  //main pages
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
  //world pages
  {
    path: '/krozlyis',
    name: 'Krozlyis',
    component: KrozlyisWorldPage,
  },
  {
    path: '/kiriel',
    name: 'Kiriel',
    component: KirielWorldPage,
  },
  {
    path: '/noctura',
    name: 'Noctura',
    component: NocturaWorldPage,
  },
  //map pages
  {
    path: '/krozlyis-map',
    name: 'Krozlyis-map',
    component: KrozlyisPage,
  },
  {
    path: '/noctura-map',
    name: 'noctura-map',
    component: NocturaPage,
  },
  {
    path: '/elaris-map',
    name: 'elaris-map',
    component: ElarisPage,
  },
  {
    path: '/yerengar-map',
    name: 'yerengar-map',
    component: YerenGarPage,
  },
  {
    path: '/hutchings4710-map',
    name: 'hh-map',
    component: HH4710Page,
  },
  {
    path: '/hutchings4883-map',
    name: 'hh-map',
    component: HH4883Page,
  },
  {
    path: '/AdrelaLereon-map',
    name: 'AdrelaLereon-map',
    component: AdrelaLereonPage,
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
