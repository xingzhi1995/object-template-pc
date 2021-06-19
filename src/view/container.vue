<template>
    <Container>
        <div slot="header">1111</div>
        <div slot="cont">
            <p v-for="i in 100">{{i}}</p>
        </div>
    </Container>
</template>

<script>
    export default {
        name: "container",
    }
</script>

<style scoped>

</style>