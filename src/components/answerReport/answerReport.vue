<template>
  <div>
    <!--<loading v-show="showLoading"></loading>-->
    <div>
      <h1 class="subjectName"><span style="color: rgb(240,92,41);font-size: 55px;margin-right: 5px">{{responseAnswer.score}}</span>分</h1>
      <div class="ranking">
        <p><span class="littleTip">答题用时</span>{{responseAnswer.consumedTime}}秒</p>
        <p><span class="littleTip">正确率</span>{{responseAnswer.rightSum}}/{{question.length}}</p>
        <p><span class="littleTip">排行榜</span>{{responseAnswer.rankNo}}</p>
      </div>
      <div class="divide"></div>
      <div style="padding: 5px 16px;overflow: hidden">
        <div style="float: left;margin-right: 25px;margin-top: 14px;"><img width="30px" height="30px" src="./ps.png" alt=""></div>
        <div style="float: left;line-height: 20px;">
          <p>点击题号可以查看对应的答案与解析</p>
          <p style="color: rgb(242,90,41);"><span style="display:inline-block;margin-right: 5px;width: 10px;height: 10px;border-radius:50%;background-color: rgb(242,90,41)"></span>您答错了</p>
          <p style="color: rgb(1,161,3);"><span style="display:inline-block;margin-right: 5px;width: 10px;height: 10px;border-radius:50%;background-color: rgb(1,161,3)"></span>您答对了</p>
        </div>
      </div>
      <div class="divide"></div>
      <div class="numList">
      <span class="questionNo" @click="locationQuestionNo(index)" v-for="(questionitem, index) in this.question">
        <span class="questionNum" :class="{'bgWrong': !questionitem.ar, 'bgRight': questionitem.ar}">{{questionitem.no}}</span>
      </span>
      </div>
      <div class="redo-analysis">
        <span class="redo" v-if="!isBuy" @click="buy">去购买</span>
        <span class="redo" v-if="isBuy"@click="keepGo">继续做题</span>
        <router-link to="/study" class="seeanalysis">返回首页</router-link>
      </div>
      <div class="space"></div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Store from '../../store.js'
  import Beiyi from '../../common.js'
  //  import loading from '../../components/loading/loading.vue'
  export default {
//    components: {loading},
    data () {
      return {
        isBuy: false
      }
    },
    created () {
//      Beiyi.forbidBack()
      this.isBuy = Store.fetch('lock')
      this.courseId = Store.fetch('courseId')
      this.user = Store.fetch('user')
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
        this.courseId = Store.fetch('courseId')
        window.location.href = 'http://cb.by-edu.com/createOrder?userId=' + this.user.userId + '&courseId=' + this.courseId
      },
      // 继续做题
      keepGo () {
        this.$router.push({path: '/study'})
      }
    }
  }
</script>

<style lang="stylus" type="text/stylus" rel="stylesheet/stylus">
  .ivu-modal-mask
    /*background: url("../../../src/common/img/maskbg.jpeg")*/
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
    padding: 36px 35px
    font-size 15px
    color: rgb(43,38,37)
    text-align center

  .ranking
    display flex
    padding: 0 16px 15px 16px
    p
      display inline-block
      flex: 1
      border-right: 1px solid rgb(216,216,216)
      text-align: center
      font-size 12px
    p:last-child
      border:none
    .littleTip
      color: rgb(172,169,169)
      font-size 13px
      margin-right 5px
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
        color: #fff !important
        border: none !important
      .bgRight
        background-color rgb(1,161,3)
        color: #fff !important
        border: none !important

  .redo-analysis
    position fixed
    display flex
    width 100%
    height 55px
    background-color rgb(242, 90, 41)
    bottom 0
    z-index 1000
    .redo
      display inline-block
      flex: 1
      height: 55px
      line-height 55px
      text-align center
      font-size 16px
      color: #fff
      border-right: 1px solid #fff
    .seeanalysis
      display inline-block
      flex: 1
      height: 55px
      line-height 55px
      text-align center
      font-size 16px
      color: #fff
</style>
