<template>
  <div>
    <h1>Carte des machines</h1>

    <gmap-map
      :center="{lat:48, lng:2}"
      :zoom="7"
      style="width: 100%; height: 800px"
    >
      <gmap-marker v-for="machine in machines"
                   v-bind:key="machine.id"
                   v-bind:position="{lat:Number(machine.latitude),lng:Number(machine.longitude)}">
      </gmap-marker>
    </gmap-map>
  </div>
</template>

<script>
  import axios from 'axios';

  export default {
    name: 'mapping',
    created() {
      axios.get('https://machine-api-campus.herokuapp.com/api/machines')
           .then(response => {
             // JSON responses are automatically parsed.
             this.machines = response.data;
             // console.log(response);
           })
           .catch(e => {
             this.errors.push(e);
           });
    },
    data() {
      return {
        machines: [],
        loading: false,
        error: null,
          // id: 1,
          //   position: {lat: 10, lng: 10}
          // },
          //   {
          //     id: 2,
          //     position: {lat: 12, lng: 9}
      };
    }
  };
</script>
