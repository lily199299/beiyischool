<template>
  <div>
    <div class="padding-box">
      <h1 class="title1">最新课程</h1>
      <ul class="advertise">
        <li class="adv-item" v-for="item in hotcourse">
          <router-link :to="{ path: '/study', query: { id: item.id } }" style="display: block;height: 100%;"> <img :src="item.img" alt="" width="100%" height="100%"></router-link>

        </li>
      </ul>
    </div>
    <div class="divide"></div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Beiyi from '../../common.js'
  import Store from '../../store.js'
  export default {
    data () {
      return {
        hotcourse: []
      }
    },
    created () {
      this.user = Store.fetch('user')
      // http://bay-api.by-edu.com/find/gethotcourse?userId=d7b1fbbb2b5a4eaea0b2c62be47867dd
      this.$http.get(Beiyi.getUrl() + '/find/gethotcourse?userId=' + this.user.userId).then((res) => {
        console.log(res.body.data)
        this.hotcourse = res.body.data
        Store.save('hotcourse', this.hotcourse)
      })
    }
  }
</script>

<style lang="stylus" type="text/stylus" rel="stylesheet/stylus">
  .padding-box
    padding:0 16px 15px 16px
    .title1
      padding: 15px 0
      font-weight: 500
      font-size: 16px
      color: rgb(43,38,37)
    .advertise
      display: flex
      width:100%
      .adv-item
        flex:1
        &:first-child
          margin-right: 14px
</style>
