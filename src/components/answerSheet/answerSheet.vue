<template>
  <div>
    <h1 class="subjectName">{{titleName}}</h1>
    <div class="divide"></div>
    <div class="numList">
      <span class="questionNo" @click="locationQuestionNo(index)" v-for="(questionitem, index) in this.question">
        <span  class="questionNum" :class="{bgColor: questionitem.status}">{{questionitem.no}}</span>
      </span>
    </div>
    <div class="space"></div>
    <!--<div class="sheetSubmit" @click="submitPapers()">交卷</div>-->
    <div class="sheetSubmit">交卷</div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Store from '../../store.js'
  import Beiyi from '../../common.js'
  export default {
    data () {
      return {
        showLoading: false
      }
    },
    created () {
      // 读取用户信息
      this.user = Store.fetch('user')
      // 从缓存读取题目列表
      this.question = Store.fetch('question')
      // 从缓存读取用户答案
      this.answer = Store.fetch('answer')
      // 从缓存读取试题名称
      this.titleName = Store.fetch('tipName')
    },
    methods: {
      locationQuestionNo (index) {
        console.log(index)
        Store.save('questionno', index)
        this.$router.push({path: '/study/tip/question'})
      }
      // 交卷
//      submitPapers () {
//        this.showLoading = true
//        var mywa = JSON.stringify(this.answer)
//        // http://bay-api.by-edu.com/question/postquestions?userId=104ebf7e3d304d3a8d79e76f9c6f8d65&answer=’[1:{A:B,R:B},2:{A:C,R:C},3:{A:C,R:D},4:{A:BD,R:D},5:{A:ABCDE,R:D}]’&libraryId=12&time=1276
//        this.$http.post(Beiyi.getUrl() + '/question/postquestions', {
//          userId: this.user.userId,
//          time: 1276,
//          answer: mywa,
//          libraryId: Store.fetch('libraryId')}
//        ).then((res) => {
//          // 接收后台返回数据并缓存
//          console.log(res.body.data)
//          this.responseAnswer = res.body.data
//          Store.save('responseAnswer', this.responseAnswer)
//          if (this.questionList.no < this.length) {
//            this.submitPaper = true
//          }
//          // 交卷的时候，跳转到答题报告页面
//          this.$router.push({path: '/study/tip/question/answerReport'})
//        }).catch((res) => {
//          // console.error(res.body.data)
//        })
//      }
    }
  }
</script>

<style lang="stylus" type="text/stylus" rel="stylesheet/stylus">
  .subjectName
    padding: 20px 16px
    font-size 15px
    text-align center

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
      .bgColor
        background-color rgb(242, 90, 41)
        color: #fff !important
        border: none !important
  .sheetSubmit
    position fixed
    bottom 0
    z-index 100
    width: 100%
    height: 55px
    line-height 55px
    text-align center
    font-size 16px
    background-color #fff
    color: #fff
</style>
