<template>
  <div>
    <!--微信头像-->
    <div class="login-headImg">
      <div class="head">
        <img src="./head.png" alt="">
      </div>
      <p class="nickName">A0.珊瑚海～～刘雪玲</p>
    </div>
    <div class="userPhone">
      <p style="font-size: 16px">绑定手机，领取新人学习大礼包</p>
      <label for="phone" style="display: block;position:relative;">
        <Icon type="iphone" class="iphone"></Icon>
        <input placeholder="输入11位大陆手机号码"  id="phone" v-model="phoneNumber" class="phone">
      </label>
      <label for="password" style="display: block;position:relative;">
        <Icon type="ios-unlocked-outline" class="pwd" style="font-size: 26px"></Icon>
        <input placeholder="输入验证码" id="password" v-model="password" class="password">
        <span class="getCode">获取验证码</span>
      </label>
    </div>
    <div class="bindPhone" @click="getCode">绑定手机</div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Store from '../../store.js'
  import Beiyi from '../../common.js'
  export default {
    data () {
      return {
        url: Beiyi.getUrl(),
        phoneNumber: '13121148609',
        password: ''
      }
    },
    created () {
      this.phoneNumber =
      console.log(this.phoneNumber)
      console.log(this.password)
    },
    methods: {
      getCode () {
        console.log(this.phoneNumber)
        console.log(this.password)
        // 提交地址
        // http://bay-api.by-edu.com/login/sendcode?userId=d7b1fbbb2b5a4eaea0b2c62be47867dd&phone=18785099458
        this.$http.post(this.url + 'login/sendcode', {
          userId: 'd7b1fbbb2b5a4eaea0b2c62be47867dd',
          phone: this.phoneNumber
        }).then((res) => {
          console.log(res)
        })
      }
    }
  }
</script>

<style lang="stylus" type="text/stylus" rel="stylesheet/stylus">
  .login-headImg
    padding: 26px 0
    margin-top: 30px
    .head
      width: 77px
      height: 77px
      border-radius: 50%
      overflow hidden
      margin: auto
      border 1px solid rgb(229, 223, 223)
      img
        width: 100%
        height: 100%
    .nickName
      padding: 15px 0 10px 0
      text-align: center
      font-size: 15px
  .userPhone
    padding: 55px 16px
    .iphone,.pwd
      position: absolute
      left: 8px
      font-size: 34px
      line-height: 45px
      color: dimgrey
    .phone,.password
      display block
      outline: none
      width: 100%
      margin: 20px 0
      height: 45px
      border: 1px solid rgb(216,216,216)
      border-radius: 7px
      text-indent: 30px
      font-size: 16px
    .getCode
      position: absolute
      right: 5px
      height: 30px
      line-height: 30px
      top: 0
      bottom: 0
      margin: auto
      background: rgb(242,90,41)
      border-radius: 5px
      color: #fff
      font-size: 13px
      padding: 0 10px
  .bindPhone
    position: fixed
    bottom 0
    z-index: 1000
    width: 100%
    height 55px
    line-height 55px
    text-align center
    background-color rgb(242,90,41)
    color: #fff
    font-size 16px


</style>
