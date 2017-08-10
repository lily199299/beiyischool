<template>
  <div>
    <ul class="courselist">
      <li class="subject">
        <h1 class="name">{{datas.yinhang}}</h1>
        <p class="jindu"><span class="num">2313人做过</span> <span class="pro">100/200</span></p>
      </li>
      <div class="divide"></div>
      <li class="subject">
        <h1 class="name" @click="dsd">第2章 证券投资基金概述_单选</h1>
        <p class="jindu"><span class="num">1322人做过</span> <span class="pro">100/200</span></p>
      </li>
      <div class="divide"></div>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      datas: {}
    },
    methods: {
      dsd () {
        console.log(this.datas)
      }
    }
  }
</script>

<style lang="stylus" type="text/stylus" rel="stylesheet/stylus">
.courselist
  .subject
    padding: 15px 16px
    .name
      padding-bottom 15px
    .jindu
      color: #7e7c7d
      font-size: 13px
      .num
        margin-right 36px
</style>
