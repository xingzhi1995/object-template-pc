<template>
    <Container>
        <div slot="header" class="c_header">
            <div class="logo_Div">
                <el-image style="width: 100px; height: 100px" :src="image"></el-image>
            </div>
        </div>
        <div slot="cont" class="c_cont">
<!--            <router-view></router-view>-->
            <Vempty></Vempty>
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