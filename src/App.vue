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
        user: {}
      }
    },
    methods: {
      selected (e) {
        console.log(e)
        console.log(e.currentTarget)
//        debugger
        // index变量存放当前点击的元素
        var index = e.currentTarget.id   // 1 2 3
//        console.log(typeof index)
        if (parseInt(index) === 1) {
          this.find = true
          this.study = false
          this.mine = false
        }
        if (parseInt(index) === 2) {
          this.study = true
          this.find = false
          this.mine = false
        }
        if (parseInt(index) === 3) {
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
//        this.user.openId = 'oMH9vwIGBCDM8HjMmzoyeIEDMkUa'
//        Store.save('user', this.user)
//      }
      this.user.openId = 'oMH9vwIGBCDM8HjMmzoyeIEDMkUa'
      Store.save('user', this.user)

      this.coureId = Store.fetch('courseId')
      this.courseName = Store.fetch('courseName')
      if (this.coureId === null) {
        Store.save('courseId', 7)
      }
      if (this.courseName === null) {
        Store.save('selectedCourseName', '个人理财')
      }
      if (Beiyi.getQueryString('openId') !== null) {
        this.user.openId = Beiyi.getQueryString('openId')
        Store.save('user', this.user)
      }
      console.log('------')
      this.user = Store.fetch('user')
      // 获取user基本信息
      this.$http.post(Beiyi.getUrl() + '/login/getUser', {userId: this.user.userId, openId: this.user.openId}).then((res) => {
        this.user = res.body.data
        console.log(this.user)
        Store.save('user', this.user)
        if (this.user.userId === null || this.user.userId === '') {
          window.location.href = 'http://cb.by-edu.com/loginServlet'
          return
        }
        if (this.user.phone === null || this.user.phone === '') {
          this.$router.push({path: '/login'})
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
    z-index: 1
    .tab-item
      flex: 1
      text-align: center
      img
        width: 20px
        height: 20px
        margin: 5px 0
      & > a
        display: block
        font-size 14px
        padding-bottom: 5px
        color: rgb(43,38,37)
        &.active
          color: rgb(240, 90, 41)
      i
        display: block
        padding: 5px 0
</style>
