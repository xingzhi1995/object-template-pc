<template>
    <div id="error">
        <Vsvgicon :name="'error'" :width="'30vw'" :height="'30vh'"></Vsvgicon>
        <div class="errorCode">400</div>
        <div class="errorText">{{global.errorText}}</div>
        <Vconfirmbtn :label="'重试'" @onClick="global.cancel()"></Vconfirmbtn>
    </div>
</template>

<script>
    export default {
        name: "error"
    }
</script>

<style scoped>

</style>