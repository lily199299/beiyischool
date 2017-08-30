<template>
  <div id="app">
    <div class="tab">
      <div class="tab-item">
        <router-link to="/find"><i class="icon-find"></i>发现</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/study"><i class="icon-study"></i>学习</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/mine"><i class="icon-mine"></i>我的</router-link>
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
        datas: {}, // 请求的所有数据
        courses: [],
        course: {}
      }
    },
    created () {
      // 先从缓存获取
      this.userId = Store.fetch('userId')
      this.$http.get(Beiyi.getUrl() + '/course/list?userId=' + this.userId).then((response) => {
        // console.log(response)
        response = response.body.data
        this.datas = response
        this.jijin = this.datas.jijin
        this.yinhang = this.datas.yinhang
        this.zhengquan = this.datas.zhengquan
        this.kuaiji = this.datas.kuaiji
        this.zhucekuaijishi = this.datas.zhucekuaijishi
        for (var i in this.datas) {
          for (var j in this.datas[i]) {
            this.courses.push(this.datas[i][j])
          }
        }
        // 初始化一个默认值并缓存
        this.course = this.courses[4]
      })
    },
    watch: {
      datas: {
        handler: function (items) {
          Store.save('datas', items)   // 观察／存入缓存
          // console.log(Store.fetch('course'))
        },
        deep: true
      },
      courses: {
        handler: function (items) {
          Store.save('courses', items)   // 观察／存入缓存
        },
        deep: true
      },
      course: {
        handler: function (items) {
          Store.save('course', items)   // 观察／存入缓存
        },
        deep: true
      }
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
