<template>
    <el-container>
        <el-aside><slot name="left"></slot></el-aside>
        <el-container class="content">
            <el-header><slot name="header"></slot></el-header>
            <el-main><slot name="cont"></slot></el-main>
        </el-container>
    </el-container>
</template>

<script>
    export default {
        name: "vcontainer"
    }
</script>

<style scoped>

</style>