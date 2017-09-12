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
          <div class="wrong learn"><img src="./bei-cuoti.png" alt="">
            <router-link to="">我的错题</router-link>
          </div>
          <div class="history learn"><img src="./bei-record.png" alt="">
            <router-link to="/mine/studyRecord">学习记录</router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="divide"></div>
    <div class="beiyi-micro">
      <p>
        <img class="iconstyle" src="./bei-class.png" alt="">
        <router-link to="">贝易小班</router-link>
      </p>
    </div>
    <div class="divide"></div>
    <div class="system">
      <div class="notice border-1px">
        <p>
          <img class="iconstyle"  src="./bei-notice.png" alt="">
          <router-link to="">通知</router-link>
        </p>
      </div>
      <div class="myCourse border-1px">
        <p>
          <img class="iconstyle"  src="./bei-mycourse.png" alt="">
          <router-link to="/mine/myCourse">我的课程</router-link>
        </p>
      </div>
      <div class="money border-1px">
        <p>
          <img class="iconstyle" src="./bei-money.png" alt="">
          <router-link to="">钱包</router-link>
        </p>
      </div>
      <div class="discount border-1px">
        <p>
          <img class="iconstyle" src="./bei-discount.png" alt="">
          <router-link to="">优惠券</router-link>
        </p>
      </div>
    </div>
    <div class="divide"></div>
    <div class="settings">
      <p><img class="iconstyle" src="./bei-setting.png" alt="">
        <router-link to="/mine/setting">设置</router-link>
      </p>
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
      this.user = Store.fetch('user')
      this.name = this.user.name
      this.imgUrl = this.user.imgUrl
    }
  }
</script>

<style lang="stylus" type="text/stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/common.styl"
  a
    font-family: 'PingFang SC', 'STHeiti', 'Helvetica-Light', arial, sans-serif
  .iconstyle
    width: 20px
    height: 20px
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
      font-size: 15px
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
          img
            width:20px
            vertical-align: middle
          a
            color: rgb(43,38,37)
  .beiyi-micro,.settings
    padding: 0 16px
    p
      height 52px
      line-height 52px
      font-size: 15px
      color: rgb(43,38,37)
      a
        display: inline-block
        width: 87%
        color: rgb(43,38,37)
  .system
    padding: 0 16px 16px 16px
    .notice,.myCourse,.money,.discount
      border-1px(rgb(216, 216, 216))
      height: 46px
      line-height 46px
      p
        /*padding-bottom:10px*/
        font-size: 15px
        color: rgb(43,38,37)
        a
          display: inline-block
          width: 87%
          color: rgb(43,38,37)


</style>
