import Vue from 'vue';
import App from './App.vue';
import List from './MachinesList.vue';
import Mapping from './MachinesMap.vue';

// faire nouveau composant
Vue.component('list', List);
Vue.component('mapping', Mapping);

new Vue({
            el: '#app',
            render: h => h(App)
        });

