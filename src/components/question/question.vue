<template>
  <div>
    <!--题目类型-->
    <div class="question">
       <!--{{$route.query.libraryName}}-->
      <h1 class="question-type">{{questionList.ctype}} <span class="pro"><a>{{questionList.no}}</a>/<a
        v-text="length"></a></span></h1>
      <div class="divide"></div>
      <div>
        <p class="question-title">({{questionList.no}}){{questionList.content}}</p>
        <div class="question-list">
          <ul>
            <li v-for="(item, index) in questionList.answers" @click="answerQuestion(index)">
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
    <!--上一题 题卡 交卷 下一题 -->
    <div class="functionZone">
      <span class="previous" @click="previous">上一题</span>
      <span class="answerSheet">
        <router-link
          :to="{path: './question/answerSheet', query: { questionList: this.questionList, tipname: this.tipName}}">题卡</router-link>
      </span>
      <span class="submitPapers" @click="submitPapers">交卷</span>
      <span class="next" @click="next">下一题</span>
    </div>
    <!--购买弹窗提示-->
    <Modal v-model="visible" class-name="vertical-center-modal" title="购买课程" :closable="false">
      <div style="font-size: 15px">
        亲爱的童鞋，试学结束了，可以购买课程，也可以试学其他课程哦～
      </div>
      <div slot="footer">
        <button @click="buyCourse">
          <router-link to="/study" style="color: red;">去购买</router-link>
        </button>
        <button @click="studyOther">
          <router-link to="/find">试学其他课程</router-link>
        </button>
      </div>
    </Modal>
    <!--交卷弹窗提示-->
    <Modal v-model="visible" class-name="vertical-center-modal" title="交卷" :closable="false">
      <div style="font-size: 15px">
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

  export default {
    data () {
      return {
        url: Beiyi.getUrl(),
        answer: [],
        length,
        responseAnswer: {},
        question: {},
        questionList: {},
        visible: false,
        index: 0,
        questionType: false,
        checkRadio: '',  // 单选 判断
        checkedBox: ''   // 多选
      }
    },
    created () {
      this.tipName = this.$route.query.libraryName
      this.question = Store.fetch('question')
      this.index = Store.fetch('questionno')
      if (this.question === null) {
        // 请求地址：http://bay-api.by-edu.com/question/list/{userId}/{libraryId}
        // http://bay-api.by-edu.com/question/list/104ebf7e3d304d3a8d79e76f9c6f8d65/1
        this.$http.get(this.url + '/question/list/104ebf7e3d304d3a8d79e76f9c6f8d65/' + this.$route.query.libraryId).then((res) => {
          this.question = res.body.data
          Store.save('question', this.question)   // 观察／存入缓存
          this.length = this.question.length
          Store.save('libraryId', this.$route.query.libraryId)
          console.log(this.length)
          // 默认值当前index为0，也就是第一题
          this.questionList = this.question[this.index]
          // console.log(this.questionList)
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
        this.length = this.question.length
        console.log(this.length)
        // 默认值当前index为0，也就是第一题
        this.questionList = this.question[this.index]
        // console.log(this.questionList)
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
      },
      responseAnswer: {
        handler: function (items) {
          Store.save('responseAnswer', items)   // 观察／存入缓存
        },
        deep: true
      }
    },
    methods: {
      // 选项答题
      answerQuestion (answerindex) {
        for (let l in this.questionList.answers) {
          if (this.questionList.ctype === '单选' || this.questionList.ctype === '判断') {
            this.question[this.index].answers[l].checked = false
          }
          if (parseInt(answerindex) === parseInt(l)) {
            if (this.question[this.index].answers[l].checked) {
              if (this.questionList.ctype === '多选') {
                this.question[this.index].answers[l].checked = false
              }
            } else {
              this.question[this.index].answers[l].checked = true
            }
          }
          // 判断该选项是否点击过了
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
        console.log(typeof checkBoxStr)
        console.log(typeof this.question[this.index].a)
        if (this.questionList.ctype === '多选') {
          for (let i = 0; i < this.question[this.index].answers.length; i++) {
            if (parseInt(answerindex) === parseInt(i)) {
              if (this.question[this.index].answers[i].checked === true) {
                checkBoxStr += this.$refs.subOption[answerindex].innerText
               // console.log('add' + checkBoxStr)
              } else {
              //  console.log('delbefole' + checkBoxStr)
                checkBoxStr = checkBoxStr.replace(this.$refs.subOption[answerindex].innerText, '')
              //  console.log('deleend' + checkBoxStr)
              //  console.log('aaaa' + this.$refs.subOption[answerindex].innerText)
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
        console.log(this.questionList.answers)
        console.log('single' + this.question[this.index].a.length)
        if (this.question[this.index].a.length === 0) {
          this.question[this.index].status = false
        } else {
          this.question[this.index].status = true
        }
        Store.save('question', this.question)
      },
      // 下一题
      next () {
        this.index = ++this.index
        // 答到最后一个题的时候，提示购买课程
        if (this.index === this.length) {
          this.visible = true
        } else {
          // 第2题、第3题。。。
          this.questionList = this.question[this.index]
          this.isActive = -1
          console.log(this.questionList)
        }
      },
      // 上一题
      previous () {
        this.index = --this.index
        if (this.index === -1) {
          this.index = 0
        } else {
          this.questionList = this.question[this.index]
          this.isActive = -1
        }
      },
      submitPapers () {
        var mywa = JSON.stringify(this.answer)
        // http://bay-api.by-edu.com/question/postquestions?userId=d7b1fbbb2b5a4eaea0b2c62be47867dd&answer=’[1:{A:B,R:B},2:{A:C,R:C},3:{A:C,R:D},4:{A:BD,R:D},5:{A:ABCDE,R:D}]’&libraryId=12&time=1276
        this.$http.post(this.url + '/question/postquestions', {
          userId: 'd7b1fbbb2b5a4eaea0b2c62be47867dd',
          time: 1276,
          answer: mywa,
          libraryId: this.$route.query.libraryId}
        ).then((res) => {
          // 接收后台返回数据并缓存
          console.log(res.body.data)
          this.responseAnswer = res.body.data

          if (this.questionList.no < this.length) {
            this.visible = true
          }
        }).catch((res) => {
          // console.error(res.body.data)
        })
      },
      buyCourse () {
        this.$router.push({path: '/study/buyCourse'})
      },
      studyOther () {
        this.$router.push({path: '/mine'})
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
          color: rgb(43, 38, 37)
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
