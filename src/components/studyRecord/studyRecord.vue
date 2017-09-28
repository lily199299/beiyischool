<template>
  <div>
    <loading v-show="showLoading"></loading>
    <div v-show="!showLoading">
      <a href="javascript:void(0)" class="records border-1px" v-for="item in studyRecord">
        <h3 class="record-course">{{item.libraryName}}</h3>
        <p class="grade"><span>分数：{{item.score}}分</span><span>用时：{{item.consumedTime}}秒</span><span>排名：第{{item.rankNo}}名</span></p>
      </a>
    </div>

  </div>
</template>

<script type="text/ecmascript-6">
  import Beiyi from '../../common.js'
  import Store from '../../store.js'
  import loading from '../../components/loading/loading.vue'
  export default {
    data () {
      return {
        showLoading: false,
        studyRecord: [],
        time: 0
      }
    },
    components: {loading},
    created () {
      this.showLoading = true
      this.user = Store.fetch('user')
      this.responseAnswer = Store.fetch('responseAnswer')
      // 获取我所做过的试卷的答题情况列表
      // 请求地址：http://bay-api.by-edu.com/course/getuserLibrarys?userId=d7b1fbbb2b5a4eaea0b2c62be47867dd&time=0
      this.$http.get(Beiyi.getUrl() + '/course/getuserLibrarys?userId=' + this.user.userId + '&time=' + this.time).then((res) => {
        console.log(res.body.data)
        this.showLoading = false
        this.studyRecord = res.body.data
      })
    }
  }
</script>

<style lang="stylus" type="text/stylus" rel="stylesheet/stylus">
@import "../../common/stylus/common.styl"
.records
  display block
  padding:15px 16px 0 16px
  color: rgb(43,38,37)
  border-1px(rgb(216, 216, 216))
  .record-course
    font-size 15px
    padding-bottom 10px
  .grade
    padding-bottom 5px
    color: rgb(128,124,123)
    span
      margin-right 10px
</style>
