import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/views/Home.vue';
import SagasLandingPage from '@/views/SagasLandingPage.vue';

import KirielWorldPage from '@/views/KirielWorldPage.vue';
import KrozlyisWorldPage from '@/views/KrozlyisWorldPage.vue';
import NocturaWorldPage from '@/views/NocturaWorldPage.vue';

import AdrelaLereonPage from '@/views/KirielMaps/AdrelaLereonMapPage.vue';
import ElarisPage from '@/views/KirielMaps/ElarisMapPage.vue';
import HH4710Page from '@/views/KirielMaps/HH4710MapPage.vue';
import HH4883Page from '@/views/KirielMaps/HH4883MapPage.vue';
import KrozlyisPage from '@/views/KrozlyisMaps/KrozlyisMapPage.vue';
import YerenGarPage from '@/views/KirielMaps/YerengarMapPage.vue';
import NocturaPage from '@/views/NocturaMaps/NocturaMapPage.vue';

import LastJob from '@/views/Sagas/LastJob.vue';
import UnexpectedAppearance from '@/views/Sagas/UnexpectedAppearance.vue';
import AfterMath from '@/views/Sagas/Aftermath.vue';
import SurfaceJob from '@/views/Sagas/SurfaceJob.vue';

import AleriaPage from '@/views/CharacterPages/Aleria.vue';

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
    component: SagasLandingPage,
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
    name: 'hutchings4710-map',
    component: HH4710Page,
  },
  {
    path: '/hutchings4883-map',
    name: 'hutchings4883-map',
    component: HH4883Page,
  },
  {
    path: '/AdrelaLereon-map',
    name: 'AdrelaLereon-map',
    component: AdrelaLereonPage,
  },
  //sagas
  {
    path: '/last-job',
    name: 'last-job',
    component: LastJob,
  },
  {
    path: '/unexpected-appearance',
    name: 'unexpected-appearance',
    component: UnexpectedAppearance,
  },
  {
    path: '/aftermath',
    name: 'aftermath',
    component: AfterMath,
  },
  {
    path: '/surface-job',
    name: 'surface-job',
    component: SurfaceJob,
  },
  // characters
  {
    path: '/aleria',
    name: 'aleria',
    component: AleriaPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  publicPath: process.env.NODE_ENV === 'production' ? '/final-sub-folder' : '',

  routes: routesList,
  scrollBehavior() {
    // always scroll to top
    return { top: 0 };
  },
});

export default router;
