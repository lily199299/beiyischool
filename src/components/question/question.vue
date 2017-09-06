<template>
  <div>
    <!--{{$route.query.libraryId}}-->
    <!--题目类型-->
    <loading v-show="showLoading"></loading>
    <div v-show="!showLoading">
      <div class="question">
          <!--{{$route.query.libraryName}}-->
        <h1 class="question-type" v-show="!buy">{{questionList.ctype}} <span class="pro"><a>{{questionList.no}}</a>/<a v-text="length"></a></span></h1>
        <div class="divide"></div>
        <div>
          <p class="question-title" v-show="!buy">({{questionList.no}}){{questionList.content}}</p>
          <div class="question-list">
            <ul>
              <li v-for="(item, index) in questionList.answers" @click="answerQuestion(index)">
                <!--单选、判断-->
                <p class="option" v-if="questionType" :class="{ optionActive: item.checked }">
                  <span class="suboption" ref="subOption">{{item.subOption}}</span><span
                  class="content">{{item.content}}</span>
                </p>
                <!--多选-->
                <p class="option" v-if="!questionType" :class="{ optionActive: item.checked }">
                  <span class="suboption" ref="subOption">{{item.subOption}}</span><span
                  class="content">{{item.content}}</span>
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="space"></div>
      <!--上一题 题卡 交卷 下一题 -->
      <div class="functionZone" v-show="!buy">
        <span class="previous" @click="previous"><img v-if="firstQuestion" class="tika" src="./pre.png" alt=""></span>
        <span class="answerSheet">
          <router-link :to="{path: './question/answerSheet', query: { questionList: this.questionList}}"><img class="tika" src="./tika.png" alt=""></router-link>
        </span>
        <span class="submitPapers" @click="submitPapers()"><img class="tika" src="./jiaojuan.png" alt=""></span>
        <span class="next" @click="next" v-if="!lastQuestion"><img class="tika" src="./next.png" alt=""></span>
        <!--<span class="next" @click="next" v-if="lastQuestion" style="color: rgb(242,90,41);">最后一题</span>-->
      </div>
    </div>
    <!--购买弹窗提示 :closable="false"-->
    <Modal v-model="buy" class-name="vertical-center-modal" title="购买课程" :closable="false" :mask-closable="false">
      <div style="font-size: 15px">
        亲爱的童鞋，试学结束了，可以购买课程，也可以试学其他课程哦～
      </div>
      <div slot="footer" style="display: flex;">
        <button @click="studyOther" style="flex: 1;border: none;background: #fff;">
          <router-link to="/find" style="font-weight:bold;font-size: 15px">试学其他课程</router-link>
        </button>
        <button @click="buyCourse" style="flex: 1;border: none;background: #fff;">
          <router-link to="/study" style="color: rgb(242,90,41);font-weight:bold;font-size: 15px">去购买</router-link>
        </button>
      </div>
    </Modal>
    <!--交卷弹窗提示-->
    <Modal v-model="submitPaper" class-name="vertical-center-modal" title="交卷" :closable="false" :mask-closable="false">
      <div style="font-size: 13px">
        这套题目还没有答完哦~
      </div>
      <div slot="footer">
        <router-link to="#" style="color: red;">继续答题</router-link>
        <button @click="studyOther">
          <router-link to="/find">确定交卷</router-link>
        </button>
      </div>
    </Modal>
  </div>
</template>

<script type="text/ecmascript-6">
  import Store from '../../store.js'
  import Beiyi from '../../common.js'
  import loading from '../../components/loading/loading.vue'
  export default {
    components: {loading},
    data () {
      return {
        answer: [],
        length,
        responseAnswer: {},
        question: [],
        questionList: {},
        visible: false,
        buy: false,
        submitPaper: false,
        index: 0,
        questionType: false,
        checkRadio: '',  // 单选 判断
        checkedBox: '',   // 多选
        showLoading: false,
        firstQuestion: false,
        lastQuestion: false
      }
    },
    created () {
      this.courseId = Store.fetch('courseId')
      this.user = Store.fetch('user')
      // this.tipName = this.$route.query.libraryName
      console.log(Store.fetch('libName'))
      if (Store.fetch('tipName') === null) {
        Store.save('tipName', this.$route.query.libraryName)
      }
     // Store.save('tipName', this.$route.query.libraryName)
      this.question = Store.fetch('question')
      this.index = Store.fetch('questionno')
      this.showLoading = true
      if (this.question === null) {
        // 请求地址：http://bay-api.by-edu.com/question/list/{userId}/{libraryId}
        // http://bay-api.by-edu.com/question/list/104ebf7e3d304d3a8d79e76f9c6f8d65/1
        this.$http.get(Beiyi.getUrl() + '/question/list/' + this.user.userId + '/' + this.$route.query.libraryId).then((res) => {
          this.question = res.body.data
          this.showLoading = false
          // 如果试学结束了，不再让用户答题，提示购买
          if (this.question.length === 0) {
            this.buy = true
            return
          } else {
            this.buy = false
          }
          Store.save('question', this.question)
          this.length = this.question.length
          // 缓存libraryId
          Store.save('libraryId', this.$route.query.libraryId)
          // 默认值当前index为0，也就是第一题
          this.questionList = this.question[this.index]
          // console.log(this.questionList.answers)
          // 判断单选 多选
          if (this.questionList.ctype === '单选' || this.questionList.ctype === '判断') {
            this.questionType = true
          }
          if (this.questionList.ctype === '多选') {
            this.questionType = false
          }
        })
      } else {
        this.showLoading = false
        this.length = this.question.length
        // 默认值当前index为0，也就是第一题
        this.questionList = this.question[this.index]
        // console.log(this.questionList.answers)
        // 判断单选 多选
        if (this.questionList.ctype === '单选' || this.questionList.ctype === '判断') {
          this.questionType = true
        }
        if (this.questionList.ctype === '多选') {
          this.questionType = false
        }
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
      // 选项答题
      answerQuestion (answerindex) {
//        alert(this.questionList.answers.length)
//        debugger
        for (var l in this.questionList.answers) {
          if (this.questionList.ctype === '单选' || this.questionList.ctype === '判断') {
            this.question[this.index].answers[l].checked = false
          }
          if (parseInt(answerindex) === parseInt(l)) {
            var flagl = this.question[this.index].answers[l].checked
            if (flagl === true) {
              if (this.questionList.ctype === '多选') {
                this.question[this.index].answers[l].checked = false
              }
            } else {
              this.question[this.index].answers[l].checked = true
            }
          }
          if (parseInt(l) === 4) {
            break
          }
        }
        // 选项
        if (this.questionList.ctype === '单选' || this.questionList.ctype === '判断') {
          this.question[this.index].a = this.$refs.subOption[answerindex].innerText
          this.checkRadio = this.question[this.index].a
          // console.log(this.checkRadio)
          var singleAnswer = {}
          singleAnswer.no = this.question[this.index].no
          singleAnswer.id = this.question[this.index].id
          singleAnswer.a = this.checkRadio                  // 用户答案
          singleAnswer.r = this.question[this.index].right  // 正确答案
          console.log(this.answer)
          var singleFlag = false
          for (var i in this.answer) {
            if (this.answer[i].id === singleAnswer.id) {
              singleFlag = true
              this.answer[i] = singleAnswer
            }
          }
          if (!singleFlag) {
            this.answer.push(singleAnswer)
          }
        }
        var checkBoxStr = this.question[this.index].a.toString()
//        console.log(typeof checkBoxStr)
//        console.log(typeof this.question[this.index].a)
        if (this.questionList.ctype === '多选') {
          for (let i = 0; i < this.question[this.index].answers.length; i++) {
            if (parseInt(answerindex) === parseInt(i)) {
              if (this.question[this.index].answers[i].checked === true) {
                checkBoxStr += this.$refs.subOption[answerindex].innerText
              } else {
                checkBoxStr = checkBoxStr.replace(this.$refs.subOption[answerindex].innerText, '')
              }
            }
          }
          this.question[this.index].a = checkBoxStr
          var multipleAnswer = {}
          multipleAnswer.no = this.question[this.index].no
          multipleAnswer.id = this.question[this.index].id
          multipleAnswer.a = this.question[this.index].a                           // 用户答案
          multipleAnswer.r = this.question[this.index].right  // 正确答案
          console.log(this.answer)
          var multipleFlag = false
          for (var j in this.answer) {
            if (this.answer[j].id === multipleAnswer.id) {
              multipleFlag = true
              this.answer[j] = multipleAnswer
            }
          }
          if (!multipleFlag) {
            this.answer.push(multipleAnswer)
          }
        }
//        console.log(this.questionList.answers)
//        console.log('single' + this.question[this.index].a.length)
        if (this.question[this.index].a.length === 0) {
          this.question[this.index].status = false
        } else {
          this.question[this.index].status = true
        }
        Store.save('question', this.question)
      },
      // 下一题
      next () {
        this.firstQuestion = true
        this.index = ++this.index
        if (this.index === this.length - 1) {
          this.lastQuestion = true
        }
        // 答到最后一个题的时候，提示购买课程
        if (this.index === this.length) {
          this.buy = true
        } else {
          // 第2题、第3题。。。
          this.questionList = this.question[this.index]
          this.isActive = -1
          console.log(this.questionList)
        }
      },
      // 上一题
      previous () {
        this.lastQuestion = false
        this.index = --this.index
        if (this.index === -1) {
          this.index = 0
          this.firstQuestion = false
        } else {
          this.questionList = this.question[this.index]
          this.isActive = -1
        }
      },
      // 交卷
      submitPapers () {
        this.showLoading = true
        var mywa = JSON.stringify(this.answer)
        // http://bay-api.by-edu.com/question/postquestions?userId=104ebf7e3d304d3a8d79e76f9c6f8d65&answer=’[1:{A:B,R:B},2:{A:C,R:C},3:{A:C,R:D},4:{A:BD,R:D},5:{A:ABCDE,R:D}]’&libraryId=12&time=1276
        this.$http.post(Beiyi.getUrl() + '/question/postquestions', {
          userId: this.user.userId,
          time: 1276,
          answer: mywa,
          libraryId: this.$route.query.libraryId}
        ).then((res) => {
          // 接收后台返回数据并缓存
          console.log(res.body.data)
          this.responseAnswer = res.body.data
          Store.save('responseAnswer', this.responseAnswer)
//          if (this.questionList.no < this.length) {
//            this.submitPaper = true
//          }
          // 交卷的时候，跳转到答题报告页面
          this.$router.push({path: '/study/tip/question/answerReport'})
        }).catch((res) => {
          // console.error(res.body.data)
        })
      },
      buyCourse () {
        // http://cb.by-edu.com/createOrder?userId=d7b1fbbb2b5a4eaea0b2c62be47867dd&courseId=1
        // 'http://cb.by-edu.com/createOrder?userId='+ this.userId + '&courseId=' +this.courseId
        window.location.href = 'http://cb.by-edu.com/createOrder?userId=' + this.user.userId + '&courseId=' + this.courseId
      },
      studyOther () {
        this.$router.push({path: '/study'})
      }
    }
  }
</script>

<style lang="stylus" type="text/stylus" rel="stylesheet/stylus">
  .tika
    width: 40px;
    height: 40px;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    margin: auto;
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
  .question
    .question-type
      padding: 15px 16px
      font-size: 16px
      color: rgb(240,92,41)
      .pro
        float right
        a
         color: rgb(240,92,41)
    .question-title, .question-list
      padding: 15px 16px
      font-size: 15px
      line-height: 22px
      color: rgb(43,38,37)
      .option
        display block
        padding: 15px 0
        .suboption
          display inline-block
          width 29px
          height: 29px
          text-align center
          line-height 29px
          border: 1px solid rgb(172,169,169)
          border-radius: 50%
          margin-right 10px
      .optionActive
        color: rgb(242, 90, 41)
        span:nth-child(1)
          background-color rgb(242,90,41)
          color: #fff
          border none

  .functionZone
    position: fixed
    bottom 0
    z-index 100
    display: flex
    width: 100%
    height: 60px
    line-height 60px
    padding: 0 5%;
    background-color: #fff
    .previous, .answerSheet, .submitPapers, .next
      position: relative;
      display block
      flex: 1
      text-align: center
      height: 60px
      line-height: 60px
      font-size: 16px
</style>
