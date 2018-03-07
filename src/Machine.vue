<template>
  <div>
    <h1>Machine {{name}}</h1>
    <h3 class="on" v-if="status">Status ON</h3>
    <h3 class="off" v-else>Status OFF</h3>
    <h5>Last time checked : {{checkedAt}}</h5>

  </div>
</template>

<script>
  export default {
    name: 'machine',
    data() {
      return {
        name: 'What else ?',
        status: false,
        checkedAt: new Date().toLocaleDateString()
      };
    }
  };
</script>

<style scoped>
  .on {
    color : green;
  }

  .off {
    color : red;
  }
</style>
