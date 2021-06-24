<template>
  <svg class="svgIcon" aria-hidden="true" :style="{width:fontsize,height:fontsize,color:color}">
    <use :xlink:href="`#ldj-${name}`"></use>
  </svg>
</template>

<script>
  export default {
    name: "VSvgIcon",
    props:['name','fontsize','color'],
  }
</script>

<style scoped>

</style>
