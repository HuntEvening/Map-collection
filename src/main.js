import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { VueShowdown } from 'vue-showdown';

const app = createApp(App);

app.use(router).mount('#app');

app.component('VueShowdown', VueShowdown);

