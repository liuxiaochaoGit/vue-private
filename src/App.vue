<template>
    <div id="app">
        <router-link v-for="nav in navList" :key="nav.path" :to="nav.path">{{nav.name}}</router-link>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: 'App',
        data() {
            return {
                activeName:'login',
                navList:[
                    {
                        name:'login',
                        path:'/'
                    },
                    {
                        name:'about',
                        path:'/about'
                    },
                    {
                        name:'main',
                        path:'/main'
                    }
                ]
            }
        },
        methods:{
            handleClick(tab, event) {
                console.log(tab, event);
            }
        }
    }
</script>

<style lang="scss">
    body {
        overflow: hidden;
    }

    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin: 20px;
        font-size: 1rem;
        a{
            margin: 20px;
            text-decoration: none;
        }
    }
</style>
