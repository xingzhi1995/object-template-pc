<template>
    <el-input :placeholder="placeholder" v-model="newValue" @input="handleChange"></el-input>
</template>

<script>
    import {getAjax} from "../api/api";

    export default {
        name: "vinput",
        props:['placeholder','value'],
        model: {
            prop: 'value',  // props接受的变量名称
            event: 'change'  //定义一个方法
        },
        data(){
            return{
                newValue:this.value
            }
        },
        watch:{
            value:{
                handler(val,val2){
                    this.newValue=val
                }
            }
        },
        methods:{
            handleChange(event){
                this.$emit('change',event)
            }
        }
    }
</script>

<style scoped>

</style>