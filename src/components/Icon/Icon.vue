<template>
    <i :class="'lc-icon ' + iconClass"
       :style="{'color':color}"
       @click="handleClick"></i>
</template>

<script>

    export default {
        name: 'Icon',
        props: {
            iconClass: {
                type: String,
                default: ''
            },
            color: {
                type: String,
                default: '#ccc'
            }
        },
        data () {
            return {};
        },
        methods: {
            handleClick () {
                console.log(1234);
                this.$emit('click');
            }
        }
    };
</script>

<style scoped lang="scss">
    .lc-icon {
        display: inline-block;
        font-size: 1rem;
        color: #000;
        vertical-align: middle;
        cursor: pointer;
    }
</style>
