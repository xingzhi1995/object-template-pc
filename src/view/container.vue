<template>
    <Container id="index">
<!--        顶部-->
        <div slot="header" class="c_header">
            <div class="logo_Div"></div>
        </div>
<!--        左侧导航-->
        <Vnavmenu slot="left"></Vnavmenu>
<!--        右侧内容-->
        <div slot="cont" class="c_cont">
            <div v-for="i in 100">
                <p>{{i}}</p>
            </div>
<!--            <router-view></router-view>-->
        </div>
    </Container>
</template>

<script>
    export default {
        name: "container",
        data(){
            return{
                image:require('../assets/image/logo.png')
            }
        }
    }
</script>

<style scoped>
</style>