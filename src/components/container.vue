<template>
    <el-container>
        <el-aside width="200px">
            <slot name="left"></slot>
        </el-aside>
        <el-container>
            <el-header>
                <slot name="header"></slot>
            </el-header>
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
        text-align: center;
        line-height: 60px;
        padding: 0;
    }
    .el-aside {
        text-align: center;
        line-height: 200px;
    }
    .el-aside,.el-main{
        height: 100vh;
    }
    .el-main {
        text-align: center;
    }
</style>