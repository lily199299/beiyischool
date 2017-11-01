<template>
  <div>
    <p>我的错题集</p>
  </div>
</template>

<script type="text/ecmascript-6">
  import Beiyi from '../../common.js'
  import Store from '../../store.js'
  import loading from '../../components/loading/loading.vue'
  export default {
    data () {
      return {
        user: {}
      }
    },
    // http://bay-api.by-edu.com/question/getmyerror?userId=29c69d4349ca4ea885595c5e6706d59b&time=3
    // http://bay-api.by-edu.com/question/list/wrongbycourse?userId=d7b1fbbb2b5a4eaea0b2c62be47867dd&courseId=7
    created () {
      this.courseId = Store.fetch('courseId')
      this.user = Store.fetch('user')
      this.$http.get(Beiyi.getUrl() + '/question/list/wrongbycourse?userId=' + this.user.userId + '&courseId=' + this.courseId).then((res) => {
        console.log(res)
      })
    }
  }
</script>

<style lang="stylus" type="text/stylus" rel="stylesheet/stylus">

</style>
