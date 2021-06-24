<template>
    <div id="error">
        <VsvgIcon :name="'error'" :fontsize="'20vh'" :color="'black'"></VsvgIcon>
        <div class="errorText">{{global.errorText}}</div>
    </div>
</template>

<script>
    export default {
        name: "error"
    }
</script>

<style scoped>

</style>