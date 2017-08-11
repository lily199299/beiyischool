<template>
  <div>
    <div class="employ padding-box">
      <h1 class="title border-1px">招聘资讯 <a href="#" class="more">更多</a></h1>
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
  </div>
</template>

<script type="text/ecmascript-6">
  export default {}
</script>

<style lang="stylus" type="text/stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/common.styl"
  .title
    padding: 15px 0
    font-weight: 500
    font-size: 18px
    border-1px(rgb(216, 216, 216))
  .more
    float: right
    font-size 13px
  .employ-lists
    padding-bottom: 18px
    .employ-title
      padding-bottom 10px
      font-size: 14px
    .employ-city
      color: rgb(126,124,125)
      font-size: 14px
      .city
        margin-right 15px


</style>
