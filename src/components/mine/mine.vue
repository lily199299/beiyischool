<template>
  <div>
    <!--微信头像-->
    <div class="headImg">
      <div class="head">
        <img src="./head.png" alt="">
      </div>
      <p class="nickName">A0.珊瑚海～～刘雪玲</p>
      <div class="learnRecord">
        <div class="record">
          <div class="wrong learn"><i class="icon-find"></i>我的错题</div>
          <div class="history learn"><i class="icon-find"></i>学习记录</div>
        </div>
      </div>
    </div>
    <div class="divide"></div>
    <div class="beiyi-micro">
      <p><i class="icon-find"></i>贝易小班</p>
    </div>
    <div class="divide"></div>
    <div class="system">
      <div class="notice border-1px">
        <p><i class="icon-find"></i>通知</p>
      </div>
      <div class="myCourse border-1px">
        <p><i class="icon-find"></i>我的课程</p>
      </div>
      <div class="money border-1px">
        <p><i class="icon-find"></i>钱包</p>
      </div>
      <div class="discount border-1px">
        <p><i class="icon-find"></i>优惠券</p>
      </div>
    </div>
    <div class="divide"></div>
    <div class="settings">
      <p><i class="icon-find"></i>设置</p>
    </div>
    <div class="divide"></div>
    <div class="space"></div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {}
</script>

<style lang="stylus" type="text/stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/common.styl"
  .space
    height 70px
  .headImg
    padding:26px 0
    .head
      width: 77px
      height: 77px
      border-radius: 50%
      overflow hidden
      margin:auto
      border 1px solid rgb(229,223,223)
      img
        width: 100%
        height: 100%
    .nickName
      padding: 15px 0 30px 0
      text-align: center
    .learnRecord
      .record
        width: 300px
        margin:auto
        display: flex
        .wrong
          border-right: 1px solid #dad5d5
        .learn
          flex: 1
          text-align: center
          i
            display block
            padding-bottom: 10px
  .beiyi-micro,.settings
    padding: 16px
    i
      vertical-align: sub
      padding-right: 15px
  .system
    padding: 0 16px 16px 16px
    .notice,.myCourse,.money,.discount
      border-1px(rgb(216, 216, 216))
      height: 40px
      line-height 40px
      padding: 5px 0
      p
        padding-bottom:10px
      i
        vertical-align: sub
        padding-right: 15px


</style>
