<template>
  <div>
    <div class="padding-box">
      <h1 class="title1">最新课程</h1>
      <div class="advertise">
        <div class="adv-item"><img src="../../common/img/adv-1.png" alt="" width="100%"></div>
        <div class="adv-item"><img src="../../common/img/adv-2.png" alt="" width="100%"></div>
      </div>
    </div>
    <div class="divide"></div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {}
</script>

<style lang="stylus" type="text/stylus" rel="stylesheet/stylus">
  .padding-box
    padding:0 16px 15px 16px
    .title1
      padding: 15px 0
      font-weight: 500
      font-size: 18px
    .advertise
      display: flex
      width:100%
      .adv-item
        flex:1
        &:first-child
          margin-right: 14px
</style>
