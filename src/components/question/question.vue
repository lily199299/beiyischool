<template>
  <div>
    <!--题目类型-->
    <div class="question" v-for="item in question">
      <h1 class="question-type">{{item.type.title}} <span><a>1</a>/<a>100</a></span></h1>
      <div class="divide"></div>
      <div>
        <p class="question-title">［{{item.no}}］.{{item.content}}</p>
        <div class="question-list">
          <ul>
            <li v-for="index in answers">
              <!--<p class="option" v-for="i in index">
                <span class="suboption">{{i.subOption}}</span><span class="content">{{i.content}}</span>
              </p>-->
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Beiyi from '../../common.js'
  var answers = []
  export default {
    data () {
      return {
        question: {},
        url: Beiyi.getUrl(),
        answers
      }
    },
    created () {
      // 请求地址：http://bay-api.by-edu.com/question/list/{userId}/{libraryId}
      // http://bay-api.by-edu.com/question/list/104ebf7e3d304d3a8d79e76f9c6f8d65/1
      this.$http.get(this.url + '/question/list/104ebf7e3d304d3a8d79e76f9c6f8d65/' + this.$route.query.libraryId).then((res) => {
       // console.log(res)
        res = res.body.data
        this.question = res
        // 把数据存入map，对应的有 题号 题目 答案选项 并缓存，点击下一题，再清缓存，加载下一题
       // console.log(this.question)
        for (var answer in this.question) {
          // console.log(this.question[answer].answers)
          this.answers.push(this.question[answer].answers)
        }
        answers = []
      })
    }
  }
</script>

<style lang="stylus" type="text/stylus" rel="stylesheet/stylus">
  .question
    .question-type
      padding: 15px 16px
      font-size: 18px
    .question-title, .question-list
      padding: 15px 16px
      font-size: 15px
      .option
        padding: 15px 0
        .suboption
          margin-right 10px

</style>
