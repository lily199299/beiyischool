<template>
  <div>
    <a href="#" class="records border-1px">
      <h3 class="record-course">第一章个人理财概述单选</h3>
      <p class="grade"><span>分数：90分</span><span>用时：20分钟</span><span>排名：第3名</span></p>
    </a>
    <a href="#" class="records border-1px">
      <h3 class="record-course">第一章个人理财概述单选</h3>
      <p class="grade"><span>分数：90分</span><span>用时：20分钟</span><span>排名：第3名</span></p>
    </a>
    <a href="#" class="records border-1px">
      <h3 class="record-course">第一章个人理财概述单选</h3>
      <p class="grade"><span>分数：90分</span><span>用时：20分钟</span><span>排名：第3名</span></p>
    </a>
  </div>
</template>

<script type="text/ecmascript-6">
  import Beiyi from '../../common.js'
  import Store from '../../store.js'
  export default {
    created () {
      this.user = Store.fetch('user')
      // 获取我所做过的试卷的答题情况列表
      // 请求地址：http://bay-api.by-edu.com/course/ listmine?userId=d7b1fbbb2b5a4eaea0b2c62be47867dd
      this.$http.get(Beiyi.getUrl() + '/course/listmine?userId=' + this.user.userId).then((res) => {
        console.log(res.body.data)
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
