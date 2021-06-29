<template>
    <el-button :style="{background:global.gradientColor}" class="confirmBtn" @click="handle">{{label}}</el-button>
</template>

<script>
    export default {
        name: "vconfirmbtn",
        props:['label'],
        methods:{
            handle(){
                this.$emit('onClick')
            }
        }
    }
</script>

<style scoped>
    .confirmBtn{
        color: white;
        border: none;
    }
</style>