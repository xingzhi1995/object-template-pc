<template>
    <el-container>
        <el-header>
            <slot name="header"></slot>
        </el-header>
        <el-container>
            <el-aside width="200px">
                <slot name="left"></slot>
            </el-aside>
            <el-main>
                <slot name="cont"></slot>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
    export default {
        name: "vcontainer"
    }
</script>

<style scoped>
    .el-header, .el-footer {
        background-color: #B3C0D1;
        color: #333;
        text-align: center;
        line-height: 60px;
        padding: 0;
    }
    .el-aside {
        background-color: #D3DCE6;
        color: #333;
        text-align: center;
        line-height: 200px;
    }
    .el-aside,.el-main{
        height: 100vh;
    }
    .el-main {
        background-color: #E9EEF3;
        color: #333;
        text-align: center;
    }
</style>