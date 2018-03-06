<template>
    <div id="app">
        <img src="src/asset/index.png">
        <h1>{{ msg }}</h1>
        <h2>Que voulez vous faire?</h2>
        <div class="menu">
            <li>
                <button type="button" class="btn btn-primary" href="#" @click="onMachinesListClick">Consultez la liste
                    des machines
                </button>
            </li>
            <li>
                <button type="button" class="btn btn-primary" href="#" @click="onMapClick">Afficher la carte</button>
            </li>
        </div>
        <list></list>

        <mapping></mapping>

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
        methods: {
            onMachinesListClick() {
                window.alert('Tu as cliqué sur la liste des machines');
            },

            onMapClick() {
                window.alert('Tu as cliqué sur affiché la map');
            }
        }
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
