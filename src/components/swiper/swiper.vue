<template>
  <div v-ref:swiper
       direction="horizontal"
       :mousewheel-control="true"
       :pagination-visible="true"
       :pagination-clickable="true"
       :loop="true"
       @slide-change-start="onSlideChangeStart"
       @slide-change-end="onSlideChangeEnd">
    <div>Page 1</div>
    <div>Page 2</div>
    <div>Page 3</div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Vue from 'vue'
  import Swiper from 'vue-swiper'
  Vue.use(Swiper)
  export default {
    methods: {
      onSlideChangeStart (currentPage) {
        console.log('onSlideChangeStart', currentPage)
      },
      onSlideChangeEnd (currentPage) {
        console.log('onSlideChangeEnd', currentPage)
      }
    }
  }
</script>

<style lang="stylus" type="stylesheet/stylus">

</style>
