<template>
  <div>
    <ul class="courselist">
      <li class="subject">
        <p class="name">课程名称</p>
        <p class="jindu">有效期:2017-08-18-2018-08-18</p>
        <div class="divide"></div>
      </li>
    </ul>
    <div class="courseIntro">
      <p class="description">课程简介</p>
      <div class="detail">
        <p>课程名称：课程名称</p>
        <p>开课时间：随时</p>
        <p>总共课时：20课时</p>
        <p>学习时长：1年</p>
        <p>招收人数：200人</p>
        <p>主讲老师：葛老师</p>
        <p>课程费用：1290</p>
      </div>
    </div>
    <div class="fee">
      <span style="color: rgb(242,90,47);font-size: 20px;font-weight: bold">￥1290</span><span>180人已加入学习</span>
    </div>
    <div class="buy" @click="buy">购买本课程</div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    methods: {
      buy () {
        alert('购买课程的支付地址')
      }
    }
  }
</script>

<style lang="stylus" type="text/stylus" rel="stylesheet/stylus">
  .courselist
    .subject
      padding-top: 15px
      a
        display block
      .name
        padding: 0 16px 15px 16px
        font-size: 16px
        font-weight: bold
        color: rgb(43,38,37)
      .jindu
        color: #7e7c7d
        font-size: 13px
        padding 0 16px 15px 16px
        .num
          margin-right 36px
  .courseIntro
    padding: 15px 16px
    .description
      color: rgb(242,90,47)
      font-size: 16px
      font-weight: bold
      padding-bottom: 15px
    .detail
      p
        padding-bottom 15px
        font-size 15px
  .fee
    padding: 20px 16px
    font-size 15px
    border-top:1px solid #ddd
    border-bottom:1px solid #ddd
    span
      margin-right 15px
  .buy
    width: 100%
    height: 60px
    line-height 60px
    position fixed
    bottom: 0
    z-index 10
    background-color rgb(242,90,47)
    text-align center
    font-size 20px
    color: #fff

</style>
