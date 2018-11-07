<template>
    <div>
        <h1>This is login page!</h1>
        <button @click="getState">获取vuex</button>
    </div>
</template>

<script>
    export default {
        name: "login",
        methods:{
            getState(){
                let sss = this.$store.getters.getlist;
                console.log(sss);
            }
        }
    }
</script>

<style scoped lang="scss">

</style>
