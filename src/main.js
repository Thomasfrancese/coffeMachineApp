import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';

import List from './MachinesList.vue';
import Mapping from './MachinesMap.vue';
import Machine from './Machine.vue';

//Vue.component('list', List);
//Vue.component('mapping', Mapping);

Vue.use(VueRouter);

const routes = [
  {path: '/machinelist', component: List},
  {path: '/machinemap', component: Mapping},
  {path: '/machine', component: Machine}
];

const router = new VueRouter({
       routes
  });

new Vue(
  {
    el: '#app',
    render: h => h(App),
    router,
  });

