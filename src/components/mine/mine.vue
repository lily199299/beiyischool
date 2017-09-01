<template>
  <div>
    <!--微信头像-->
    <div class="headImg">
      <div class="head">
        <img :src="imgUrl" alt="">
      </div>
      <p class="nickName">{{name}}</p>
      <div class="learnRecord">
        <div class="record">
          <div class="wrong learn"><img class="iconstyle" src="./bei-cuoti.png" alt="">我的错题</div>
          <div class="history learn"><img class="iconstyle" src="./bei-record.png" alt="">学习记录</div>
        </div>
      </div>
    </div>
    <div class="divide"></div>
    <div class="beiyi-micro">
      <p><img class="iconstyle" src="./bei-class.png" alt="">贝易小班</p>
    </div>
    <div class="divide"></div>
    <div class="system">
      <div class="notice border-1px">
        <p><img class="iconstyle"  src="./bei-notice.png" alt="">通知</p>
      </div>
      <div class="myCourse border-1px">
        <p>
          <img class="iconstyle"  src="./bei-mycourse.png" alt="">
          <router-link to="/mine/myCourse">我的课程</router-link>
        </p>
      </div>
      <div class="money border-1px">
        <p><img class="iconstyle" src="./bei-money.png" alt="">钱包</p>
      </div>
      <div class="discount border-1px">
        <p><img class="iconstyle" src="./bei-discount.png" alt="">优惠券</p>
      </div>
    </div>
    <div class="divide"></div>
    <div class="settings">
      <p><img class="iconstyle" src="./bei-setting.png" alt="">设置</p>
    </div>
    <div class="divide"></div>
    <div class="space"></div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Beiyi from '../../common.js'
  import Store from '../../store.js'
  export default {
    data () {
      return {
        name: '',
        imgUrl: ''
      }
    },
    created () {
      this.name = Store.fetch('name')
      this.imgUrl = Store.fetch('imgUrl')
    }
  }
</script>

<style lang="stylus" type="text/stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/common.styl"
  .iconstyle
    width: 15px
    height: 15px
    vertical-align: sub
    margin-right: 10px
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
          font-size 15px
        .learn
          flex: 1
          text-align: center
          font-size 15px
  .beiyi-micro,.settings
    padding: 16px
    p
      font-size: 15px
  .system
    padding: 0 16px 16px 16px
    .notice,.myCourse,.money,.discount
      border-1px(rgb(216, 216, 216))
      height: 40px
      line-height 40px
      padding: 5px 0
      p
        padding-bottom:10px
        font-size: 15px


</style>
