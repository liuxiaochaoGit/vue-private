<template>
    <div class="show">
        <Input type="text" :value="num"
               @click="handleIconClick" prevIcon='lc-plus1'
               prevIconColor='red'
               @prevIconClick="prev"
               maxlength="8"
               minlength="2"
               @afterIconClick="after"/>

        <!--<Icon iconClass="lc-heart3" color="red" @click="handleIconClick"></Icon>-->
    </div>
</template>

<script>
    import Input from '@/components/Input/Input';

    export default {
        name: 'show',
        components: {
            Input: Input
        },
        data () {
            return {
                num: 1
            };
        },
        methods: {
            handleIconClick (value) {
                console.log(value);
            },
            after () {
                // this.num--;
                console.log(this.num);
            },
            prev () {
                console.log(this.num);
            }
        }
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h1, h2 {
        font-weight: normal;
    }

    h1 {
        font-size: 2rem;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
</style>
