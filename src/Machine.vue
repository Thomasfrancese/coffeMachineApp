<template>
  <div class="container">
    <h1>{{name}}</h1>
    <h3 class="on" v-if="status">Status ON</h3>
    <h3 class="off" v-else>Status OFF</h3>
    <h5>Last time checked : {{checkedAt}}</h5>

  </div>
</template>

<script>
  export default {
    name: 'machine',
    props: ['name', 'status', 'checkedAt'],
    data() {
      return {
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

  div{
    margin-bottom: 5px;
    padding: 10px;
    border: black solid 1px;

  }
  div:hover{
    background-color: beige;
  }
</style>
