<template>
  <div>
    <div v-for="(item, index) in advs" class="carousel">
      <img :src="item.img" alt="">
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Beiyi from '../../common.js'
  import Store from '../../store.js'

  export default {
    data () {
      return {
        advs: []
      }
    },
    created () {
      this.user = Store.fetch('user')
      // 获取广告列表
      this.$http.get(Beiyi.getUrl() + '/find/getcanuseads?userId=' + this.user.userId).then((response) => {
        response = response.body.data
        this.advs = response
        Store.save('advs', this.advs)
        console.log(this.advs)
      })
    }
  }
</script>

<style lang="stylus" type="text/stylus" rel="stylesheet/stylus">
.carousel
  width: 100%
  img
    width: 100%
</style>
