<template>
  <div>
    <!--{{$route.query.patternType}}-->
    <ul class="courselist" v-if="hasQuestion">
      <li class="subject" v-for="item in libName">
        <router-link :to="{ path: '/study/tip/question', query: { libName: this.libName, libraryName: item.name, libraryId: item.id} }">
          <p class="coursename">{{item.name}}</p>
          <p class="jindu"><span class="num"><span>123</span>人做过</span> <span
            class="pro">{{ item.finNum }}/{{ item.questionNum }}</span></p>
          <div class="divide"></div>
        </router-link>
      </li>
    </ul>
    <div v-if="!hasQuestion">
      <div style="margin-top: 100px;">
        <img src="../../common/img/nothing.png" alt="" style="display: block;margin: auto">
        <p style="margin-top: 20px;text-align: center;font-size: 16px;">暂无题目</p>
      </div>
    </div>
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
        libName,
        hasQuestion: true,
        libraryId: null,
        patternTypes: ''   // 试题类型tip/moni...
      }
    },
    created () {
      this.patternTypes = this.$route.query.patternType
      Store.save('patternTypes', this.patternTypes)
      if (libName.length === 0) {
        this.hasQuestion = false
      } else {
        this.hasQuestion = true
      }
      Store.save('question', null)
      Store.save('tipName', null)
      Store.save('questionno', 0)
      // 从缓存读取patterns
      this.patterns = Store.fetch('courseLocal')
      console.log(this.patterns)
      for (let i in this.patterns) {
        if (this.patterns[i].pattern === this.patternTypes) {
          for (let j in this.patterns[i].libraries) {
            libName.push(this.patterns[i].libraries[j])
          }
        }
//        console.log(libName)
        if (libName.length === 0) {
          this.hasQuestion = false
        } else {
          this.hasQuestion = true
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
      .coursename
        padding: 0 16px 15px 16px
        font-size: 16px
        color: rgb(43, 38, 37)
      .jindu
        color: rgb(128,124,123)
        font-size: 12px
        padding 0 16px 15px 16px
        .num
          margin-right 21px
</style>
