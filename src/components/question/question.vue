<template>
  <div>
    <!--题目类型-->
    <div class="question">
      <h1 class="question-type">{{questionList.type.title}} <span class="pro"><a v-text="index+1"></a>/<a v-text="length"></a></span></h1>
      <div class="divide"></div>
      <div>
        <p class="question-title">({{questionList.no}}){{questionList.content}}</p>
        <div class="question-list">
          <ul>
            <li v-for="index in questionList.answers">
              <p class="option">
                <span class="suboption">{{index.subOption}}</span><span class="content">{{index.content}}</span>
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!--上一题 题卡 交卷 下一题 -->
    <div class="functionZone">
      <span class="previous" @click="previous">上一题</span>
      <span class="answerSheet">题卡</span>
      <span class="submitPapers">交卷</span>
      <span class="next" @click="next">下一题</span>
    </div>
    <Modal v-model="visible" class-name="vertical-center-modal" title="同学，试学结束啦～">
      <button @click="buyCourse">去购买</button>
      <button @click="backToHome">查看其他</button>
    </Modal>

  </div>
</template>

<script type="text/ecmascript-6">
  import Store from '../../store.js'
  import Beiyi from '../../common.js'
  var answers = []
  var index = 0
  export default {
    data () {
      return {
        url: Beiyi.getUrl(),
        answers,
        index,
        length,
        questionList: {},
        visible: false
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
        for (var answer in this.question) {
          this.answers.push(this.question[answer])
        }
        // 本套试题的题数
        this.length = this.answers.length
        answers = []
        this.questionList = this.question[this.index]
        console.log(this.questionList)
      })
    },
    methods: {
      next () {
        this.index = ++index
        if (this.index === this.length) {
          this.visible = true
        } else {
          this.questionList = this.question[this.index]
        }
        // console.log(this.questionList)
      },
      previous () {
        this.index = --index
        if (this.index === -1) {
          alert('已经是第一题了')
        } else {
          this.questionList = this.question[this.index]
        }
        // console.log(this.questionList)
      },
      buyCourse () {
        alert(1)
      },
      backToHome () {
        alert(1)
      }
    }
  }
</script>

<style lang="stylus" type="text/stylus" rel="stylesheet/stylus">
  .vertical-center-modal
    display: flex
    align-items: center
    justify-content: center
    .ivu-modal
      top:0
    .ivu-modal-body
        display flex
        button
          font-size 16px
          flex:1
  .question
    .question-type
      padding: 15px 16px
      font-size: 18px
      .pro
        float right
    .question-title, .question-list
      padding: 15px 16px
      font-size: 15px
      .option
        padding: 15px 0
        .suboption
          margin-right 10px

  .functionZone
    position: fixed
    bottom: 70px
    display: flex
    width: 100%
    padding: 0 5%;
    background-color: aliceblue
    .previous, .answerSheet, .submitPapers, .next
      display block
      flex: 1
      text-align: center
      height: 40px
      line-height: 40px

</style>
