<template>
  <div>
    <h1>Carte des machines</h1>

    <gmap-map
      :center="{lat:48, lng:2}"
      :zoom="7"
      style="width: 100%; height: 800px"
    >
    </gmap-map>
  </div>
</template>

<script>
    export default {
        name: 'mapping',
    };
</script>
