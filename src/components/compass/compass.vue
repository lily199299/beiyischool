<template>
  <div  @click="tips">
    <div class="compass padding-box">
      <h1 class="title border-1px">指南 <a href="#" class="more">更多<Icon type="chevron-right" style="padding-left: 9px"></Icon></a></h1>
    </div>
    <ul class="compass-body padding-box">
      <li class="compass-item">
        <div class="compass-img"><img src="../../common/img/compass-1.png" alt="" width="100px" height="75px"></div>
        <div class="compass-title">2017招商银行总行项目开发岗位社会招聘发岗位社会招聘</div>
      </li>
      <li class="compass-item">
        <div class="compass-img">
          <img src="../../common/img/compass-2.png" alt="" width="100px" height="75px">
        </div>
        <div class="compass-title">2017招商银行总行项目开发岗位社会招聘项目开发岗位社会招聘</div>
      </li>
    </ul>

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
  .compass-body
    .compass-item
      padding-bottom: 13px
      overflow: hidden
      .compass-img
        width: 27%
        float: left
        img
          vertical-align middle
          width: 100%
      .compass-title
        width: 70%
        margin-left: 3%
        line-height: 2
        float: left
        font-size: 15px




</style>
