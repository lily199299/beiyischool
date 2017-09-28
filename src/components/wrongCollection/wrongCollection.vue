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
        user: {},
        time: 3
      }
    },
    // http://bay-api.by-edu.com/question/getmyerror?userId=29c69d4349ca4ea885595c5e6706d59b&time=3
    created () {
      this.user = Store.fetch('user')
      this.$http.get(Beiyi.getUrl() + '/question/getmyerror?userId=' + this.user.userId + '&time=' + this.time).then((res) => {
        console.log(res.body.data)
      })
    }
  }
</script>

<style lang="stylus" type="text/stylus" rel="stylesheet/stylus">

</style>
