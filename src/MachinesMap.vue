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
                   v-bind:position="machine.position">
      </gmap-marker>
    </gmap-map>
  </div>
</template>

<script>

  export default {
    name: 'mapping',

    data() {
      return {
        machines: [{
          loading: false,
          error: null
          // id: 1,
          //   position: {lat: 10, lng: 10}
          // },
          //   {
          //     id: 2,
          //     position: {lat: 12, lng: 9}
        }]
      };
    }
  };
</script>
