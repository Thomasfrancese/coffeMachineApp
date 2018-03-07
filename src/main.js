import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import * as VueGoogleMaps from 'vue2-google-maps'

import List from './MachinesList.vue';
import Mapping from './MachinesMap.vue';
import Machine from './Machine.vue';

//Vue.component('list', List);
//Vue.component('mapping', Mapping);

Vue.use(VueRouter);

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyB4mo4RywE1n5p8mG4uhCleChsD64fQzhE ',
    libraries: 'places', // This is required if you use the Autocomplete plugin
    // OR: libraries: 'places,drawing'
    // OR: libraries: 'places,drawing,visualization'
    // (as you require)
  }
})

const routes = [
  {path: './', component: App},
  {path: '/machines', component: List},
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

