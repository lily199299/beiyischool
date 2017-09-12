<template>
  <div>
    <div class="logo">
      <div style="width: 100%;height: 100px;position: relative;overflow: hidden;">
        <img style="display:block;float:left;width:100px;height:100px;position: absolute;top: 0;right: 0;bottom: 0;left: 0;margin: auto"src="./beiyilogo.png" alt="">
      </div>
      <p style="text-align: center;font-size: 20px;margin-top:10px;font-weight: bold;">贝易网校</p>
      <p style="text-align: center;font-size: 15px;margin-top: 15px">v1.0.0</p>
    </div>
    <!--微信公号 联系电话 电子邮箱-->
    <ul class="companyInfo">
      <li class="border-1px">
        <span class="left"><Icon class="wechat" type="ios-people-outline"></Icon>微信公众号</span>
        <span class="right">贝易网校</span>
      </li>
      <li  class="border-1px">
        <span class="left"><Icon class="phone" type="ios-telephone-outline"></Icon>联系电话</span>
        <span class="right">13121148609</span>
      </li>
      <li class="border-1px">
        <span class="left"><Icon class="email" type="ios-email-outline"></Icon>电子邮箱</span>
        <span class="right">liuxueling0909@163.com</span>
      </li>
    </ul>
    <div class="space"></div>
    <div class="companyName">
      <p>贝易(北京)网络技术有限公司</p>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {}
</script>

<style lang="stylus" type="text/stylus" rel="stylesheet/stylus">
@import "../../common/stylus/common.styl"
.wechat,.phone,.email
  font-size: 25px
  margin-right: 15px
  vertical-align: sub
.logo
  padding: 40px 16px
.companyInfo
  li
    font-size 15px
    margin:5px 16px
    overflow hidden
    border-1px(rgb(216, 216, 216))
    span
      height 40px
      line-height 40px
      display block
    .left
      float left
    .right
      float: right
      color: rgb(242,90,41)
.companyName
  position fixed
  bottom 0
  z-index 100
  width: 100%
  height: 150px
  background-color #fff
  p
    margin-top 100px
    text-align center
    font-size 15px
</style>
