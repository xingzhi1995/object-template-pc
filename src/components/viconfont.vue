<template>
<!--  <van-icon class-prefix="ldj" :name="name" :size="fontsize" :color="color" @click="handleIcon"/>-->
  <i class="iconfont" :class="`ldj-${name}`" :style="{fontsize:fontsize,color:color}"></i>
</template>

<script>
  export default {
    name: "VIconfont",
    props:['name','fontsize','color'],
    methods:{
      handleIcon(){
        this.$emit('onClick')
      }
    }
  }
</script>

<style scoped>

</style>
