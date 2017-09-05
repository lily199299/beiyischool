<template>
  <div>
    <!--缺省页面-->
    <div></div>
    <div>
      <div class="isLearning">
        <h1 class="title border-1px"><span style="padding-left: 16px;font-weight: 500;">在学课程</span></h1>
      </div>
      <ul class="isLearning-body">
        <li class="isLearning-item" v-for="(item, index) in courseLists">
          <div class="isLearning-img"><img :src="item.img" alt="" width="100px" height="75px"></div>
          <div class="isLearning-title">{{item.name}}</div>
          <div class="isLearning-title" style="color: rgb(242,90,41);">已学30%</div>
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
      this.user = Store.fetch('user')
      // http://bay-api.by-edu.com/course/list/{userId}
      this.$http.get(Beiyi.getUrl() + '/course/list/' + this.user.userId).then((res) => {
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
