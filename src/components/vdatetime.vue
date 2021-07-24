<template>
    <el-date-picker v-model="newValue" type="datetime" placeholder="选择日期时间"
                    @change="handleChange" :format="global.jsonp.dateTimeFormat" :value-format="global.jsonp.dateTimeFormat"></el-date-picker>
</template>

<script>
    export default {
        name: "vdatetime",
        props:['value'],
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