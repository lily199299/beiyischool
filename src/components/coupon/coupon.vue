<template>
<div>
  <!--您暂时没有优惠券-->
  <!--有优惠券-->
  <div class="beiyi-coupon">
    <ul>
      <li><img src="./coupon50.png" alt=""></li>
      <li><img src="./coupon100.png" alt=""></li>
    </ul>
  </div>
</div>
</template>

<script type="text/ecmascript-6">
export default {}
</script>

<style lang="stylus" type="text/stylus" rel="stylesheet/stylus">
.beiyi-coupon
  padding 15px 16px
  ul li
    /*margin-bottom: 25px*/
    height: 150px
    position: relative
    overflow: hidden
    img
      width: 260px
      height: 110px
      position: absolute
      top: 0
      bottom 0
      left: 0
      right: 0
      margin auto
</style>
