<template>
  <div>
    <!--题目类型-->
    <div class="question">
      <!--  {{$route.query.libraryName}}-->
      <h1 class="question-type">{{questionList.ctype}} <span class="pro"><a>{{questionList.no}}</a>/<a
        v-text="length"></a></span></h1>
      <div class="divide"></div>
      <div>
        <p class="question-title">({{questionList.no}}){{questionList.content}}</p>
        <div class="question-list">
          <ul>
            <li v-for="(item, index) in questionList.answers">
              <!--单选、判断-->
              <p class="option" v-if="questionType"  :checked="item.checked" :class="{ optionActive: item.checked }">
                <span class="suboption" ref="subOption">{{item.subOption}}</span><span
                class="content">{{item.content}}</span>
              </p>
              <p class="option" v-if="!questionType" :class="{ optionActive: item.checked }">
                <span class="suboption" ref="subOption">{{item.subOption}}</span><span
                class="content">{{item.content}}</span>
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="answer-compare">
      <div class="right-answer">正确答案：{{questionList.right}}</div>
      <div class="my-answer">我的答案：{{questionList.a}}</div>
    </div>
    <div class="analysis">
      <p>答案解析:</p>
      <p>{{questionList.analysis}}</p>
    </div>
    <div class="space"></div>
    <!--上一题 题卡 交卷 下一题 -->
    <div class="functionZone">
      <span class="previous" @click="previous">上一题</span>
      <span class="next" @click="next">下一题</span>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Store from '../../store.js'
  import Beiyi from '../../common.js'

  export default {
    data () {
      return {
        answer: [],
        length,
        responseAnswer: {},
        question: {},
        questionList: {},
        analysis: '',
        visible: false,
        index: 0,
        questionType: false,
        checkRadio: '',  // 单选 判断
        checkedBox: ''   // 多选
      }
    },
    created () {
      // this.tipName = this.$route.query.libraryName
      if (Store.fetch('tipName') === null) {
        Store.save('tipName', this.$route.query.libraryName)
      }
      this.question = Store.fetch('question')
      this.index = Store.fetch('questionno')
      this.length = this.question.length
      Store.save('libraryId', this.$route.query.libraryId)
      // 默认值当前index为0，也就是第一题
      this.questionList = this.question[this.index]
      // 第1题的答案
      // 根据id获得解析
          // 判断单选 多选
      if (this.questionList.ctype === '单选' || this.questionList.ctype === '判断') {
        this.questionType = true
      }
      if (this.questionList.ctype === '多选') {
        this.questionType = false
      }
    },
    watch: {
      answer: {
        handler: function (items) {
          Store.save('answer', items)   // 观察／存入缓存
        },
        deep: true
      }
    },
    methods: {
      // 下一题
      next () {
        this.index = ++this.index
        // 第2题、第3题。。。
        this.questionList = this.question[this.index]
        // 根据id获得解析
        this.analysis = this.questionList.analysis
        this.isActive = -1
//        console.log(this.questionList)
      },
      // 上一题
      previous () {
        this.index = --this.index
        if (this.index === -1) {
          this.index = 0
        } else {
          this.questionList = this.question[this.index]
          console.log(this.questionList.analysis)
          console.log(this.questionList.answers[this.index].questionId)
          this.analysis = this.questionList.analysis
          this.isActive = -1
        }
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
      top: 0
    .ivu-modal-body
      display flex
      button
        font-size 16px
        flex: 1

  .question
    .question-type
      padding: 15px 16px
      font-size: 18px
      .pro
        float right
        a
          color: rgb(242, 90, 41)
    .question-title, .question-list
      padding: 15px 16px
      font-size: 15px
      .option
        display block
        padding: 15px 0
        .suboption
          margin-right 10px
      .optionActive
        color: rgb(242, 90, 41)
  .answer-compare
    display flex
    padding: 15px 16px
    border-top 1px solid #ddd
    border-bottom 1px solid #ddd
    .right-answer
      flex: 1
      text-align center
      color: green
      font-size 16px
    .my-answer
      flex: 1
      text-align center
      color: red
      font-size 16px
  .analysis
    font-size: 16px
    padding: 15px 16px
    p
      line-height: 30px
  .functionZone
    position: fixed
    bottom 0
    z-index 100
    display: flex
    width: 100%
    height: 60px
    line-height 60px
    padding: 0 5%;
    background-color: aliceblue
    .previous, .answerSheet, .submitPapers, .next
      display block
      flex: 1
      text-align: center
      height: 60px
      line-height: 60px

</style>
