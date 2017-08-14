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
    <router-view :datas="datas"></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
  import Store from './store.js'
  import Beiyi from './common.js'
  console.log(Beiyi)
  var userId = '2'
  export default {
    data () {
      return {
        datas: {}, // 请求的所有数据
        url: Beiyi.getUrl(), // url
        userId
      }
    },
    watch: {
      datas: {
        handler: function (items) {
          console.log(items)
          Store.save(items)   // 观察／存入缓存
        },
        deep: true
      }
    },
    created () {
      this.$http.get(this.url + '/course/list?userId=104ebf7e3d304d3a8d79e76f9c6f8d65').then((response) => {
       // console.log(response)
        response = response.body.data
        this.datas = response
        this.jijin = this.datas.jijin
        this.yinhang = this.datas.yinhang
        this.zhengquan = this.datas.zhengquan
        this.kuaiji = this.datas.kuaiji
        this.zhucekuaijishi = this.datas.zhucekuaijishi
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
    background-color rgb(240, 240, 240)
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
