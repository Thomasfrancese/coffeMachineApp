<template>
  <div>
    <h2>Liste des machines</h2>
    <machine class="machinestyle" v-for="machine in machines"
             v-bind:key="machine.id"
             v-bind:name="machine.name"
             v-bind:status="machine.status"
             v-bind:checkedAt="machine.checkedAt"
             v-bind:position="machine.position"> </machine>
  </div>
</template>
<script>
  import axios from 'axios';
  export default {
    name: 'list',
    created() {
      axios.get('https://machine-api-campus.herokuapp.com/api/machines')
           .then(response => {
             // JSON responses are automatically parsed.
             this.machines = response.data
           })
           .catch(e => {
             this.errors.push(e)
           })
    },
    // props: ['name', 'status', 'checkedAt', 'position'],
    data() {
      return {
        machines: [],
        loading: false,
        error: null,
        // machines: [{
        //   id: 1,
        //   name: 'Machine 1',
        //   status: false,
        //   checkedAt: new Date().toLocaleString(),
        //   position: {lat: 10, lng: 10}
        //
        // },
        //   {
        //     id: 2,
        //     name: 'Machine 2',
        //     status: true,
        //     checkedAt: new Date().toLocaleString(),
        //     position: {lat: 9, lng: 11}
        //   },
        //   {
        //     id: 3,
        //     name: 'Machine 3',
        //     status: true,
        //     checkedAt: new Date().toLocaleString(),
        //     position: {lat: 10, lng: 11}
        //   }]
      };
    }
  };
</script>

<style scoped>

</style>
