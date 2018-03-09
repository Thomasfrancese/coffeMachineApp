import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import * as VueGoogleMaps from 'vue2-google-maps';
import Keymap from './key.js';

import List from './MachinesList.vue';
import Mapping from './MachinesMap.vue';
import Machine from './Machine.vue';
import Test from './Test.vue';


Vue.component("mapping", Mapping);
Vue.component("machine", Machine);
Vue.component("test", Test);

Vue.use(VueRouter);
Vue.use(VueGoogleMaps, {
  load: {
    key: Keymap.key,
    libraries: 'places'
  }
});

const routes = [
  {path: './', component: App},
  {path: '/machines', component: List},
  {path: '/machinemap', component: Mapping},
  {path: '/machine', component: Machine},
  {path: '/test', component: Test}
];

const router = new VueRouter(
  {
    routes
  });

new Vue(
  {
    el: '#app',
    render: h => h(App),
    router
  });

