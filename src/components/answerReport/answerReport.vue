<template>
  <div>
    <h1 class="subjectName"><span style="color: rgb(240,92,41);font-size: 50px">{{responseAnswer.score}}</span>分</h1>
    <div class="ranking">
      <span>用时：{{responseAnswer.consumedTime}}</span>
      <span>正确率：{{responseAnswer.rightSum}}/{{question.length}}</span>
      <span>排名：{{responseAnswer.rankNo}}</span>
    </div>
    <div class="divide"></div>
    <div class="numList">
      <span class="questionNo" @click="locationQuestionNo(index)" v-for="(questionitem, index) in this.question">
        <span class="questionNum" :class="{'bgWrong': !questionitem.ar, 'bgRight': questionitem.ar}">{{questionitem.no}}</span>
      </span>
    </div>
    <div class="redo-analysis">
      <span class="redo">重新做题</span>
      <span class="seeanalysis">查看解析</span>
    </div>
    <div class="space"></div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Store from '../../store.js'

  export default {
    data () {
      return {}
    },
    created () {
      // 读取后台返回数据
      this.responseAnswer = Store.fetch('responseAnswer')
     // console.log(this.responseAnswer)
      // 从缓存读取题目列表
      this.question = Store.fetch('question')
      for (var i in this.question) {
        for (var j in this.responseAnswer.answerList) {
          if (parseInt(this.question[i].id) === parseInt(this.responseAnswer.answerList[j].id)) {
            this.question[i].ar = this.responseAnswer.answerList[j].c
          }
        }
      }
      // 从缓存读取用户答案
      this.answer = Store.fetch('answer')
      // 从缓存读取试题名称
      this.titleName = Store.fetch('tipName')
    },
    methods: {
      locationQuestionNo (index) {
       // console.log(index)
        Store.save('questionno', index)
        this.$router.push({path: '/study/tip/question/questionAnalysis'})
      }
    }
  }
</script>

<style lang="stylus" type="text/stylus" rel="stylesheet/stylus">
  .subjectName
    padding: 25px 16px
    font-size 18px
    text-align center

  .ranking
    display flex
    padding: 15px 16px
    span
      display inline-block
      flex: 1
      text-align: center
      font-size 16px

  .numList
    width: 100%
    overflow: hidden
    .questionNo
      display block
      width: 20%
      float: left
      .questionNum
        display: block
        width: 30px
        height: 30px
        font-size 18px
        color: rgb(172, 169, 169)
        text-align: center
        line-height: 30px
        border-radius: 50%
        margin: 15px auto
        border: 1px solid rgb(172, 169, 169)
      .bgWrong
        background-color rgb(242, 90, 41)
        color: #fff
        border: none
      .bgRight
        background-color green
        color: #fff
        border: none

  .redo-analysis
    position fixed
    display flex
    width 100%
    height 50px
    background-color rgb(242, 90, 41)
    bottom 0
    z-index 1000
    .redo
      display inline-block
      flex: 1
      height: 50px
      line-height 50px
      text-align center
      font-size 20px
      color: #fff
      border-right: 1px solid #fff
    .seeanalysis
      display inline-block
      flex: 1
      height: 50px
      line-height 50px
      text-align center
      font-size 20px
      color: #fff
</style>
