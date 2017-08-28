<template>
  <div>
    <!--{{$route.query.patternType}}-->
    <ul class="courselist">
      <li class="subject" v-for="item in libName">
        <router-link :to="{ path: '/study/tip/question', query: { libName: this.libName, libraryName: item.name, libraryId: item.id} }">
          <p class="name">{{item.name}}</p>
          <p class="jindu"><span class="num"><span>231</span>人做过</span> <span
            class="pro">0/{{ item.questionNum }}</span></p>
          <div class="divide"></div>
        </router-link>
      </li>
    </ul>
    <div class="space"></div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Store from '../../store.js'
  // 获取所有的试题题目
  var libName = []
  // var course = this.$route.query.course
  export default {
    data () {
      return {
        libName
      }
    },
    created () {
      Store.save('question', null)
      Store.save('tipName', null)
      Store.save('questionno', 0)
      // 从缓存读取patterns
      this.patterns = Store.fetch('courseLocal')
      console.log(this.patterns)
      for (let i in this.patterns) {
        if (this.patterns[i].pattern === this.$route.query.patternType) {
          for (let j in this.patterns[i].libraries) {
            libName.push(this.patterns[i].libraries[j])
          }
        }
        console.log(libName)
      }
      libName = []
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
        color: rgb(43, 38, 37)
      .jindu
        color: #7e7c7d
        font-size: 13px
        padding 0 16px 15px 16px
        .num
          margin-right 36px
</style>
