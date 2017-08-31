<template>
  <div>
    <!--微信头像-->
    <div class="login-headImg">
      <div class="head">
        <img :src="imgUrl" alt="">
      </div>
      <p class="nickName">{{name}}</p>
    </div>
    <div class="userPhone">
      <p style="font-size: 16px">绑定手机，领取新人学习大礼包</p>
      <label for="phone" style="display: block;position:relative;">
        <Icon type="iphone" class="iphone"></Icon>
        <input placeholder="输入11位大陆手机号码" id="phone" ref="phone" v-model="phone" class="phone">
      </label>
      <label for="password" style="display: block;position:relative;">
        <Icon type="ios-unlocked-outline" class="pwd" style="font-size: 26px"></Icon>
        <input placeholder="输入验证码" id="password" ref="code" v-model="code" class="password">
        <span class="getCode" @click="getCode" v-show="show" ref="code">获取验证码</span>
        <span class="getCode count" v-show="!show" ref="code">重新发送{{count}}</span>
      </label>
    </div>
    <!--<div v-show="showTip" style="width: 100%;padding: 15px 16px;text-align: center;color: rgb(242,90,41)">{{message}}</div>-->
    <div class="bindPhone" @click="bindPhone">绑定手机</div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Store from '../../store.js'
  import Beiyi from '../../common.js'
  const TIME_COUNT = 60
  export default {
    data () {
      return {
        phone: '',
        code: '',
        message: '',
        count: '',    // 记录倒计时
        show: true,
        timer: null,   // 初始化计时器
        showTip: false
      }
    },
    created () {
      if (Beiyi.getQueryString('userId') !== null) {
        console.log('login')
        this.userId = Beiyi.getQueryString('userId')
        console.log(this.userId)
        Store.save('userId', this.userId)
        if (Beiyi.getQueryString('name') !== null) {
          this.name = Beiyi.getQueryString('name')
          Store.save('name', this.name)
        }
        if (Beiyi.getQueryString('imgUrl') !== null) {
          this.imgUrl = Beiyi.getQueryString('imgUrl')
          Store.save('imgUrl', this.imgUrl)
        }
      }
    },
    methods: {
      getCode () {
        this.phone = this.$refs.phone.value
        this.code = this.$refs.code.value
        // 验证码倒计时
        if (!this.timer) {
          this.count = TIME_COUNT
          this.show = false
          this.timer = setInterval(() => {
            if (this.count > 0 && this.count <= TIME_COUNT) {
//              this.$refs.code.innerText = '重新发送(' + this.count + ')'
              this.count--
            } else {
              this.show = true
              clearInterval(this.timer)
//              this.$refs.code.innerText = '获取验证码'
              this.timer = null
            }
          }, 1000)
        }
        console.log(this.phone + 'ddd' + this.code)
        // 获取验证码
        //  http://bay-api.by-edu.com/login/sendcode?userId=d7b1fbbb2b5a4eaea0b2c62be47867dd&phone=18785099458
        this.$http.post(Beiyi.getUrl() + '/login/sendcode?userId=' + this.userId + '&phone=' + this.phone).then((res) => {
          // alert(res.body.data)
          this.message = res.body.data
          Store.save('userInfo', this.message)
          console.log(this.message)
          this.showTip = true
//          this.$Modal.success({
//            title: '通知',
//            desc: this.message,
//            duration: 2
//          })
        })
      },
      bindPhone () {
        // 获取验证码之后,提交绑定号码
        // http://bay-api.by-edu.com/login/submitphone?userId=d7b1fbbb2b5a4eaea0b2c62be47867dd&code=6543&phone=18785099458
        this.$http.post(Beiyi.getUrl() + '/login/submitphone?userId=' + this.userId + '&code=' + this.code + '&phone=' + this.phone).then((res) => {
          console.log(res.body.data)
          if (res.body.data.flag === true) {
            Store.save('phone', res.body.data.cellPhone)
            Store.save('imgUrl', res.body.data.imgUrl)
            Store.save('name', res.body.data.name)
            console.log(Store.save('name', res.body.data.name))
            Store.save('openId', res.body.data.openId)
            this.$router.push({path: '/find'})
//            this.$router.push({path: '/study'})
          } else {
            alert(res.body.data.message)
          }
        })
      }
    }
  }
</script>

<style lang="stylus" type="text/stylus" rel="stylesheet/stylus">
  .vertical-center-modal
    display: flex
    align-items: center
    justify-content: center
    .ivu-modal
      top: 0
    .ivu-modal-body
      display flex
      button
        font-size 16px
        flex: 1

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
    .iphone, .pwd
      position: absolute
      left: 8px
      font-size: 34px
      line-height: 45px
      color: dimgrey
    .phone, .password
      display block
      outline: none
      width: 100%
      margin: 20px 0
      height: 45px
      border: 1px solid rgb(216, 216, 216)
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
      background: rgb(242, 90, 41)
      border-radius: 5px
      color: #fff
      font-size: 13px
      padding: 0 10px
    .count
      background: rgb(190, 191, 192)

  .bindPhone
    position: fixed
    bottom 0
    z-index: 1000
    width: 100%
    height 55px
    line-height 55px
    text-align center
    background-color rgb(242, 90, 41)
    color: #fff
    font-size 16px


</style>
