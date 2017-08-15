<template>
  <div>
    <ul class="courselist">
      <li class="subject" v-for="item in libName">
        <!-- 带查询参数，下面的结果为 /register?plan=private -->
        <!--  <router-link :to="{ path: '/study/chapter', params: { libraryId: 'private' }}">Register</router-link>-->
        <router-link :to="{ path: '/study/chapter/question', query: { libraryId: item.id}}">
          <h1 class="name">{{item.name}}</h1>
          <p class="jindu"><span class="num">2313人做过</span> <span class="pro">0/{{ item.questionNum }}</span></p>
          <div class="divide"></div>
        </router-link>
      </li>
    </ul>
    <div class="space"></div>
  </div>
</template>

<script type="text/ecmascript-6">
  // 获取所有的试题题目
  var libName = []
  export default {
    data () {
      return {libName}
    },
    props: {
      datas: {}
    },
    created () {
      console.log(this.datas)
      for (var i in this.datas) {
        var course = this.datas[i]
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
