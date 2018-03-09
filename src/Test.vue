<template>
  <div>
    <!--<input v-model="message"/>-->
    <!--<h1>{{message}}</h1>-->
    <!--{{color}}-->
  </div>

</template>

<script>
  export default {

    props: ['color'],
    data() {
      return {
  message: ""
      };
    }
  };
</script>

<style scoped>

</style>
