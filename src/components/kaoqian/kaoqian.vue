<template>
  <div>
   <!--{{$route.query.course}}-->
    <ul class="courselist">
      <li class="subject" v-for="item in libName">
        <router-link :to="{ path: '/study/kaoqian/question', query: { libraryId: item.id}}">
          <p class="name">{{item.name}}</p>
          <p class="jindu"><span class="num"><span>231</span>人做过</span> <span class="pro">0/{{ item.questionNum }}</span></p>
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
      this.course = this.$route.query.course.patterns
      console.log(this.course)
      for (var i in this.course) {
        // console.log(this.course[i].libraries)
        if (this.course[i].pattern === 'kaoqian') {
          for (var j in this.course[i].libraries) {
            libName.push(this.course[i].libraries[j])
          }
        }
        console.log(libName)
      }
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
        font-size: 14px
      .jindu
        color: #7e7c7d
        font-size: 13px
        padding 0 16px 15px 16px
        .num
          margin-right 36px
</style>
