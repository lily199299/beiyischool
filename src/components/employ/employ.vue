<template>
  <div @click="tips">
    <div class="employ padding-box">
      <h1 class="title border-1px">招聘资讯
        <router-link to="/find/employMore" class="more">更多
          <Icon type="chevron-right" style="padding-left: 9px"></Icon>
        </router-link >
      </h1>
    </div>
    <div class="employ-detail padding-box">
      <ul>
        <li class="employ-lists">
          <p class="employ-title">2017招商银行总行项目开发岗位社会招聘</p>
          <p class="employ-city"><span class="city">广东</span><span>2017-08-07</span></p>
        </li>
        <li class="employ-lists">
          <p class="employ-title">2017哈尔滨中国银行项目开发岗位社会招聘</p>
          <p class="employ-city"><span class="city">黑龙江</span><span>2017-08-07</span></p>
        </li>
        <li class="employ-lists">
          <p class="employ-title">2017北京银行项目开发岗位校园招聘</p>
          <p class="employ-city"><span class="city">北京</span><span>2017-08-07</span></p>
        </li>
      </ul>
    </div>
    <div class="divide"></div>

    <Modal v-model="showTip" class-name="vertical-center-modal"  :closable="false" :mask-closable="false">
      <div style="width: 100%;font-size: 13px;text-align: center">功能即将开放，敬请期待</div>
      <div slot="footer" style="text-align: center;">
        <span style="flex: 1;text-align:center;background-color: #fff;border: 0;" @click="yesknow">知道了</span>
      </div>
    </Modal>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data () {
      return {
        showTip: false
      }
    },
    methods: {
      tips () {
        this.showTip = true
      },
      yesknow () {
        this.showTip = false
      }
    }
  }
</script>

<style lang="stylus" type="text/stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/common.styl"
  .title
    padding: 15px 0
    font-weight: 500
    font-size: 16px
    color: rgb(43,38,37)
    border-1px(rgb(216, 216, 216))
  .more
    float: right
    font-size 14px
    color: rgb(128,124,123)
  .employ-lists
    padding-bottom: 18px
    .employ-title
      padding-bottom 10px
      font-size: 15px
      color: rgb(43,38,37)
    .employ-city
      color: rgb(128,124,123)
      font-size: 11px
      .city
        margin-right 15px


</style>
