<template>
  <div>
    <h2>Liste des machines</h2>
    <machine class="machinestyle" v-for="machine in machines"
             v-bind:key="machine.id"
             v-bind:name="machine.name"
             v-bind:status="machine.status"
             v-bind:checkedAt="machine.checkedAt"> </machine>
  </div>
</template>
<script>
  import Machine from './Machine';

  export default {
    components: {Machine},
    name: 'list',
    props: ['name', 'status', 'checkedAt'],
    data() {
      return {
        machines: [{
          id: 1,
          name: 'Machine 1',
          status: false,
          checkedAt: new Date().toLocaleString()
        },
          {
            id: 2,
            name: 'Machine 2',
            status: true,
            checkedAt: new Date().toLocaleString()
          },
          {
            id: 3,
            name: 'Machine 3',
            status: true,
            checkedAt: new Date().toLocaleString()
          },]
      };
    }
  };
</script>

<style scoped>

</style>
