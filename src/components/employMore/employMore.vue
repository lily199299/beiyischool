<template>
  <div id="zIndex">
    <div style="background-color: rgb(240,240,240);">
      <p style="padding: 15px 16px;">
        <span style="position:relative;display: block;width: 100%;height: 30px;">
          <img style="width: 12px;position:absolute;left: 7px;top: 9px;font-size: 20px;line-height: 30px" src="./search.png" alt="">
          <!--<Icon style="position:absolute;left: 7px;font-size: 20px;line-height: 30px" type="ios-search-strong"></Icon>-->
          <input @click="getFocus" placeholder="搜索招聘资讯，如：北京 中国银行" ref="search" id="search" v-model="search"
                 style="-webkit-appearance: none;outline: none;color: #aca9a9;font-size:12px;text-indent: 27px;display: block;float:left;height: 30px;width: calc(100% - 30px);border-radius: 25px;border: 1px solid #fff;">
          <i @click="openSidebar" style="float: right;padding-top: 5px"><img src="./select.png" alt="" width="20px"></i>
        </span>
      </p>
    </div>
    <!--展开的侧边栏-->
    <transition name="fade" :duration="1000">
      <div v-show="open" @click="selectClose" style="position:fixed;top:0;width: 100%;height: 100%;z-index:100;background-color: rgb(255,255,255)">
        <div class="employStyle">
          <p class="styles">招聘类型</p>
          <ul class="listy">
            <li style="color: #fff;background-color: rgb(242,90,41)">不限</li>
            <li>校招</li>
            <li>实习</li>
            <li>社招</li>
            <li>宣讲会</li>
          </ul>
          <p class="styles">招聘地区</p>
          <ul class="listy">
            <li  style="color: #fff;background-color: rgb(242,90,41)">不限</li>
            <li v-for="(item, index) in getCity" @click="selectCity(item, index)">{{item}}</li>
          </ul>
        </div>
      </div>
    </transition>
    <ul class="fixtop">
      <li class="border-1px"><a href="#" class="fixtitle"><img src="./fixtop.png" alt="">2018工商银行校园招聘1200人公告【汇总】</a>
      </li>
      <li class="border-1px"><a href="#" class="fixtitle"><img src="./fixtop.png" alt="">2018人民银行校园招聘129人公告【汇总】</a></li>
      <li class="border-1px"><a href="#" class="fixtitle"><img src="./fixtop.png" alt="">2018招商银行校园招聘320人公告【汇总】</a></li>
      <li class="border-1px"><a href="#" class="fixtitle"><img src="./fixtop.png" alt="">2018建设银行校园招聘公告【汇总】</a></li>
    </ul>
    <div class="divide"></div>
    <ul class="bulletin-board">
      <li>
        <a href="#">
          <div class="right-title">
            <p style="line-height: 20px;padding-bottom: 10px">2017招商银行总行项目开发岗位社会招聘发岗位社会招聘</p>
            <p class="zone"><span class="employCity">北京</span><span class="publish-time">2017-9-13</span></p>
          </div>
        </a>
      </li>
      <li>
        <a href="#">
          <div class="right-title">
            <p style="line-height: 20px;padding-bottom: 10px">2017招商银行总行项目开发岗位社会招聘发岗位社会招聘</p>
            <p class="zone"><span class="employCity">北京</span><span class="publish-time">2017-9-13</span></p>
          </div>
        </a>
      </li>
    </ul>
    <div class="fixbottom"></div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Beiyi from '../../common.js'
  import Store from '../../store.js'
  export default {
    data () {
      return {
        open: false,
        search: '',
        getCity: [],
        city: '',
        index: 0,
        limit: 5
      }
    },
    created () {
      this.user = Store.fetch('user')
      // http://bay-api.by-edu.com/find/getJobsCity
      this.$http.get(Beiyi.getUrl() + '/find/getJobsCity').then((response) => {
        this.getCity = response.body.data
        console.log(this.getCity)
      })
    },
    methods: {
      getFocus () {
        this.search = this.$refs.search.value
        console.log(this.search)
      },
      openSidebar () {
        this.open = true
      },
      selectClose () {
        this.open = false
      },
      selectCity (city, index) {
        console.log(city + index)
        this.city = city
        // http://bay-api.by-edu.com/find/getjobs?userId=d7b1fbbb2b5a4eaea0b2c62be47867dd&city=贵州&index=0&limit=2
        // http://bay-api.by-edu.com/find/getjobs?city=贵州&index=0&limit=2
        this.$http.get(Beiyi.getUrl() + '/find/getjobs?city=' + this.city + '&index=' + this.index + '&limit=' + this.limit).then((res) => {
          console.log(res)
          this.index = index + 1
          // 请求加载下一页数据
        })
      }
    }
  }
</script>

<style lang="stylus" type="text/stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/common.styl"
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active in below version 2.1.8 */ {
    opacity: 0
  }
  .employStyle
    margin-top 50px
    font-size 15px
    padding: 0 20px
    .styles
      margin-top:49px
      margin-bottom 13px
    .nolimit
      display block
      width: 60px
      height: 32px
      line-height 32px
      text-align center
      background-color rgb(240,240,240)
      border-radius 15px
      padding-bottom 15px
    .listy
      overflow hidden
      width 100%
      li
        width: 60px
        height: 32px
        border-radius 15px
        line-height 32px
        margin-right 5px
        margin-top 7px
        margin-bottom 10px
        float left
        text-align center
        background-color rgb(240,240,240)
  .fixbottom
    position fixed
    bottom 0
    width: 100%
    height 50px
  .fixtop
    padding: 0 16px 15px 16px
    li
      border-1px(rgb(216, 216, 216))
      padding: 5px 0
    .fixtitle
      display block
      height: 30px
      line-height: 30px
      font-size 13px
      color: rgb(43, 38, 37)
      img
        width: 24px
        height 16px
        vertical-align sub
        margin-right 10px

  .bulletin-board
    padding: 0 16px 15px 16px
    li
      width: 100%
      border-1px(rgb(216, 216, 216))
      a
        display block
        /*height: 50px*/
        font-size 14px
        color: rgb(43, 38, 37)
        overflow hidden
        padding: 8px 0
        .right-title
          .employCity
            color: rgb(128, 124, 123)
            margin-right 18px
          .publish-time
            color: rgb(128, 124, 123)
</style>
