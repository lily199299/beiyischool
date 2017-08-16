<template>
  <div>
    {{$route.query.coureId}}
    <ul class="courselist">
      <li class="subject" v-for="item in libName">
        <router-link :to="{ path: '/study/chapter/question', query: { libraryId: item.id}}">
          <h1 class="name">{{item.name}}</h1>
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
  export default {
    data () {
      return { libName }
    },
    created () {
      this.courses = Store.fetch('courses')
     // console.log(this.courses)
      for (var i in this.courses) {
        var course = this.courses[i]
        console.log(course)
        for (let j in course) {
          var lib = course[j].patterns
          for (var k in lib) {
            for (var l in lib[k].libraries) {
              libName.push(lib[k].libraries[l])
            }
          }
        }
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
      .jindu
        color: #7e7c7d
        font-size: 13px
        padding 0 16px 15px 16px
        .num
          margin-right 36px
</style>
