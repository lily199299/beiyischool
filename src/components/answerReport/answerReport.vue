<template>
  <div>
    <!--<loading v-show="showLoading"></loading>-->
    <div>
      <h1 class="subjectName"><span style="color: rgb(240,92,41);font-size: 50px">{{responseAnswer.score}}</span>分</h1>
      <div class="ranking">
        <span>用时：{{responseAnswer.consumedTime}}</span>
        <span>正确率：{{responseAnswer.rightSum}}/{{question.length}}</span>
        <span>排名：{{responseAnswer.rankNo}}</span>
      </div>
      <div class="divide"></div>
      <div style="padding: 10px 16px;overflow: hidden">
        <div style="float: left;margin-right: 25px"><img width="30px" height="30px" src="./ps.png" alt=""></div>
        <div style="float: left;">
          <p>1.点击题号可以查看对应的答案与解析</p>
          <p>2.橙色表示：您答错了</p>
          <p>3.绿色表示：您答对了</p>
        </div>
      </div>
      <div class="divide"></div>
      <div class="numList">
      <span class="questionNo" @click="locationQuestionNo(index)" v-for="(questionitem, index) in this.question">
        <span class="questionNum" :class="{'bgWrong': !questionitem.ar, 'bgRight': questionitem.ar}">{{questionitem.no}}</span>
      </span>
      </div>
      <div class="redo-analysis">
        <span class="redo" @click="buy">去购买</span>
        <router-link to="/study" class="seeanalysis">返回首页</router-link>
      </div>
      <div class="space"></div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Store from '../../store.js'
//  import loading from '../../components/loading/loading.vue'
  export default {
//    components: {loading},
    data () {
      return {
      }
    },
    created () {
      this.courseId = Store.fetch('courseId')
      this.userId = Store.fetch('userId')
//      this.showLoading = true
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
      },
      buy () {
        window.location.href = 'http://cb.by-edu.com/createOrder?userId=' + this.userId + '&courseId=' + this.courseId
      }
    }
  }
</script>

<style lang="stylus" type="text/stylus" rel="stylesheet/stylus">
  .ivu-modal-mask
    background: url("../../../src/common/img/maskbg.jpeg")
    background-position-x: center
    background-position-y: center
    filter blur(2px)
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
      font-size 16px
      color: #fff
      border-right: 1px solid #fff
    .seeanalysis
      display inline-block
      flex: 1
      height: 50px
      line-height 50px
      text-align center
      font-size 16px
      color: #fff
</style>
