<template>
  <!--<div id="app">-->
    <!--<div class="tab">-->
      <!--<div class="tab-item">-->
        <!--<router-link to="/find"><i class="icon-find"></i>发现</router-link>-->
      <!--</div>-->
      <!--<div class="tab-item">-->
        <!--<router-link to="/study"><i class="icon-study"></i>学习</router-link>-->
      <!--</div>-->
      <!--<div class="tab-item">-->
        <!--<router-link to="/mine"><i class="icon-mine"></i>我的</router-link>-->
      <!--</div>-->
    <!--</div>-->
    <!--<router-view></router-view>-->
  <!--</div>-->
  <div id="app">
    <div class="tab">
      <div class="tab-item" :id="1"  @click="selected($event)">
        <router-link ref="routerLink" to="/find">
          <img v-if="!find" src="./common/img/find.png" alt="">
          <img v-if="find" src="./common/img/find-active.png" alt="">
          <p>发现</p>
        </router-link>
      </div>
      <div class="tab-item" :id="2" @click="selected($event)">
        <router-link ref="routerLink" to="/study">
          <img v-if="!study" src="./common/img/study.png" alt="">
          <img v-if="study" src="./common/img/study-active.png" alt="">
          <p>学习</p>
        </router-link>
      </div>
      <div class="tab-item" :id="3" @click="selected($event)">
        <router-link ref="routerLink" to="/mine">
          <img v-if="!mine" src="./common/img/mine.png" alt="">
          <img v-if="mine"  src="./common/img/mine-active.png" alt="">
          <p>我的</p>
        </router-link>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
  import Store from './store.js'
  import Beiyi from './common.js'
  export default {
    data () {
      return {
        find: true,
        study: false,
        mine: false,
        user: {},
        index: ''
      }
    },
    methods: {
      selected (e) {
//        console.log(e)
        console.log(e.currentTarget)
//        debugger
        // index变量存放当前点击的元素
        this.index = e.currentTarget.id   // 1 2 3
        Store.save('index', this.index)
//        console.log(typeof index)
//        console.log(window.location.hash)
        if (parseInt(this.index) === 1) {
          this.find = true
          this.study = false
          this.mine = false
        }
        if (parseInt(this.index) === 2) {
          this.study = true
          this.find = false
          this.mine = false
        }
        if (parseInt(this.index) === 3) {
          this.mine = true
          this.study = false
          this.find = false
        }
      }
    },
    created () {
      // 判断openId是否为空
//      this.user = Store.fetch('user')
//      if (this.user === null) {
//      this.user.openId = 'oMH9vwLinzRct6Zts2c9guOaS3Ac'
//      Store.save('user', this.user)
//      }
      // 本地测试使用
      this.user.openId = 'oMH9vwLinzRct6Zts2c9guOaS3Ac'
      Store.save('user', this.user)
      this.coureId = Store.fetch('courseId')
      this.courseName = Store.fetch('courseName')
      if (this.coureId !== null) {
        this.coureId = Store.fetch('courseId')
      } else {
        Store.save('courseId', 7)
      }
      if (this.courseName !== null) {
        this.courseName = Store.fetch('courseName')
      } else {
        Store.save('courseName', '个人理财')
      }
      if (Beiyi.getQueryString('openId') !== null) {
        this.user.openId = Beiyi.getQueryString('openId')
        Store.save('user', this.user)
      }
//      console.log('------')
      this.user = Store.fetch('user')
      if (this.user === null) {
        this.user = {}
        Store.save('user', this.user)
//        console.log('------' + this.user)
      }
//      console.log('------' + this.user)
      // 获取user基本信息
//      debugger
      this.$http.post(Beiyi.getUrl() + '/login/getUser', {userId: this.user.userId, openId: this.user.openId}).then((res) => {
        this.user = res.body.data
        console.log(this.user)
        Store.save('user', this.user)
        if (this.user === null) {
          window.location.href = 'http://cb.by-edu.com/loginServlet'
        }
        if (!this.user.flag) {
          if (this.user.message === 'phone') {
            this.$router.push({path: '/login'})
            return
          }
          // user 为null
          if (this.user.message === 'user') {
            window.location.href = 'http://cb.by-edu.com/loginServlet'
            return
          }
          // userId 为null
          if (this.user.message === 'user') {
            window.location.href = 'http://cb.by-edu.com/loginServlet'
            return
          }
          window.location.href = 'http://cb.by-edu.com/loginServlet'
          return
        }
      })
    }
  }
</script>
<style lang="stylus" type="text/stylus" rel="stylesheet/stylus">
  .tab
    position: fixed
    bottom: -3px
    display: flex
    width: 100%
    background-color rgb(240, 240, 240)
    border-top: 1px solid rgb(216,216,216)
    z-index: 1
    .tab-item
      flex: 1
      text-align: center
      img
        width: 24px
        height: 24px
        margin-top: 7px
        margin-bottom 5px
      & > a
        display: block
        font-size 14px
        padding-bottom: 5px
        color: rgb(43,38,37)
        &.active
          color: rgb(242, 90, 41)
      i
        display: block
        padding: 5px 0
</style>
