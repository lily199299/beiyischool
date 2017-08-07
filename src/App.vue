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
  var appData = {}
  var jijin = {}
  var yinhang = {}
  var zhengquan = {}
  var kuaiji = {}
  var zhucekuaijishi = {}

  export default {
    data () {
      return {
        jijin: {},
        yinhang: {},
        zhengquan: {},
        kuaiji: {},
        zhucekuaijishi: {}
      }
    },
    created () {
      // 必须携带userid
      this.$http.get('http://bay-api.by-edu.com/course/list?userId=104ebf7e3d304d3a8d79e76f9c6f8d65').then((res) => {
        console.log(res)
        appData = res.body.data
        jijin = appData.jijin
        yinhang = appData.yinhang
        zhengquan = appData.zhengquan
        kuaiji = appData.kuaiji
        zhucekuaijishi = appData.zhucekuaijishi
      })
    }
  }
</script>
<style lang="stylus" type="text/stylus" rel="stylesheet/stylus">
  .tab
    position: fixed
    bottom: 0
    display: flex
    width: 100%
    background-color rgb(240,240,240)
    z-index: 1
    .tab-item
      flex: 1
      text-align: center
      & > a
        display: block
        font-size 14px
        padding-bottom: 5px
        &.active
          color: rgb(240, 90, 41)
      i
        display: block
        padding: 5px 0
</style>
