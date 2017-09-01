<template>
  <div>
    <!--缺省页面-->
    <div></div>
    <div>
      <div class="isLearning">
        <h1 class="title border-1px"><span style="padding-left: 16px">在学课程</span></h1>
      </div>
      <ul class="isLearning-body">
        <li class="isLearning-item">
          <div class="isLearning-img"><img src="../../common/img/compass-1.png" alt="" width="100px" height="75px"></div>
          <div class="isLearning-title">2017招商银行总行项目开发岗位社会招聘发岗位社会招聘</div>
        </li>
        <li class="isLearning-item">
          <div class="isLearning-img">
            <img src="../../common/img/compass-2.png" alt="" width="100px" height="75px">
          </div>
          <div class="isLearning-title">2017招商银行总行项目开发岗位社会招聘项目开发岗位社会招聘</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Beiyi from '../../common.js'
  import Store from '../../store.js'
  export default {
    data () {
      return {
        courseLists: []
      }
    },
    created () {
      this.userId = Store.fetch('userId')
      // http://bay-api.by-edu.com/course/list/{userId}
      this.$http.get(Beiyi.getUrl() + '/course/list/' + this.userId).then((res) => {
        console.log(res.body.data)
        this.courseLists = res.body.data
      })
    }
  }
</script>

<style lang="stylus" type="text/stylus" rel="stylesheet/stylus">
  .isLearning-body
    padding: 5px 16px 15px 16px;
    .isLearning-item
      padding-bottom: 10px
      padding-top: 5px
      overflow: hidden
      border-bottom 1px solid #ddd
      .isLearning-img
        width: 27%
        float: left
        img
          vertical-align middle
          width: 100%
      .isLearning-title
        width: 70%
        margin-left: 3%
        line-height: 2
        float: left
        font-size: 14px

</style>
