<template>
  <div>
    <div style="background-color: rgb(240,240,240);">
      <p style="padding: 15px 16px;">
        <span style="position:relative;display: block;width: 100%;height: 30px;">
          <img style="width: 12px;position:absolute;left: 7px;top: 9px;font-size: 20px;line-height: 30px" src="./search.png" alt="">
          <!--<Icon style="position:absolute;left: 7px;font-size: 20px;line-height: 30px" type="ios-search-strong"></Icon>-->
          <input type="text" placeholder="搜索招聘资讯，如：北京 中国银行"
                 style="-webkit-appearance: none;outline: none;color: #aca9a9;font-size:12px;text-indent: 27px;display: block;float:left;height: 30px;width: calc(100% - 30px);border-radius: 25px;border: 1px solid #fff;">
          <i @click="openSidebar" style="float: right;padding-top: 5px"><img src="./select.png" alt="" width="20px"></i>
        </span>
      </p>
    </div>
    <!--展开的侧边栏-->
    <!--<transition name="fade" :duration="1000">-->
      <!--<div v-show="open" style="width: 100px;height: 100px;background-color: rebeccapurple">cebian</div>-->
    <!--</transition>-->
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
  export default {
    data () {
      return {
        open: false
      }
    },
    methods: {
      openSidebar () {
        this.open = true
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
