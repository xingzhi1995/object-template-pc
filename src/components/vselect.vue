<template>
    <el-select v-model="newValue" placeholder="请选择" @change="handleChange">
        <el-option v-for="item in options" :key="item.value" :label="item.title" :value="item.value"></el-option>
    </el-select>
</template>

<script>
    export default {
        name: "vselect",
        props:['value','dictCode'],
        model: {
            prop: 'value',  // props接受的变量名称
            event: 'change'  //定义一个方法
        },
        data(){
            return{
                options:[],
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
        },
        mounted() {
        }
    }
</script>

<style scoped>

</style>