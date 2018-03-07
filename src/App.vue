<template>
  <div id="app">
    <router-link to="./"><img class="img" src="src/assets/index.png"></router-link>
    <h1>{{ msg }}</h1>
    <h2>Que voulez vous faire?</h2>
    <div class="menu">
      <router-link to="/machines"><button type="button" class="btn btn-success">Consultez la liste des machines</button></router-link>
      <router-link to="/machinemap"><button type="button" class="btn btn-success">carte des machines</button></router-link>
      <!--<router-link to="/machine"><button>Etat</button></router-link>-->

    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    // component: {List},
    name: 'app',
    data() {
      return {
        msg: 'Bienvenue'
      };
    },
    // methods: {
    //   onMachinesListClick() {
    //     window.alert('Tu as cliqué sur la liste des machines');
    //   },
    //
    //   onMapClick() {
    //     window.alert('Tu as cliqué sur affiché la map');
    //   }
    // }
  };
</script>

<style scoped>
  #app {
    font-family             : 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing  : antialiased;
    -moz-osx-font-smoothing : grayscale;
    text-align              : center;
    color                   : #2c3e50;
    margin-top              : 60px;
  }

  img {
    width  : 200px;
    height : 200px;
  }

  h1, h2 {
    font-weight : normal;
  }

  ul {
    list-style-type : none;
    padding         : 0;
  }

  li {
    display : inline-block;
    margin  : 0 10px;
  }

  a {
    color : #42b983;
  }

  .menu {
    margin-top    : 30px;
    margin-bottom : 20px;
  }

</style>
