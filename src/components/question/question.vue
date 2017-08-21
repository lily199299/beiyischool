<template>
  <div>
    <!--题目类型-->
    <div class="question">
      <h1 class="question-type">{{questionList.ctype}} <span class="pro"><a v-text="index+1"></a>/<a v-text="length"></a></span></h1>
      <div class="divide"></div>
      <div>
        <p class="question-title">({{questionList.no}}){{questionList.content}}</p>
        <div class="question-list">
          <ul>
            <li v-for="(item, index) in questionList.answers" @click="answerQuestion(index)">
             <!--单选、判断-->
              <label  v-if="questionType" class="option" :class="{ optionActive: index==isActive }">
                <input type="radio" v-model="checkRadio" name="answer" :value="item.subOption" :id="item.id" :no="item.no">
                <span class="suboption">{{item.subOption}}</span><span class="content">{{item.content}}</span>
              </label>
             <!-- <span>{{checkRadio}}</span>-->
              <!--多选-->
              <label v-if="!questionType" class="option" :class="{ optionActive: index==isActive }">
                <input type="checkbox"  v-model="checkedBox" name="answer" :value="item.subOption" :id="item.id" :no="item.no">
                <span class="suboption">{{item.subOption}}</span><span class="content">{{item.content}}</span>
              </label>
              <span>{{questionList.id}}:{{checkedBox}}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!--上一题 题卡 交卷 下一题 -->
    <div class="functionZone">
      <span class="previous" @click="previous">上一题</span>
      <span class="answerSheet">
        <router-link :to="{path: './question/answerSheet', query: {length: this.length}}">题卡</router-link>
      </span>
      <span class="submitPapers">交卷</span>
      <span class="next" @click="next">下一题</span>
    </div>
    <!--弹窗提示-->
    <Modal v-model="visible" class-name="vertical-center-modal" title="购买课程" :closable="false">
      <div style="font-size: 15px">
         亲爱的童鞋，试学结束了，可以购买课程，也可以试学其他课程哦～
      </div>
      <div slot="footer">
          <button @click="buyCourse">
            <router-link to="/study"  style="color: red;">去购买</router-link>
          </button>
          <button @click="studyOther">
            <router-link to="/find">试学其他课程</router-link>
          </button>
      </div>
    </Modal>
  </div>
</template>

<script type="text/ecmascript-6">
  import Store from '../../store.js'
  import Beiyi from '../../common.js'
  import answersheet from '../../components/answerSheet/answerSheet.vue'
  export default {
    data () {
      return {
        url: Beiyi.getUrl(),
        answers: [],
        length,
        questionList: {},
        visible: false,
        isActive: -1,
        index: 0,
        questionType: false,
        checkRadio: [],
        checkedBox: []
      }
    },
    components: {answersheet},
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
        this.answers = []
        this.questionList = this.question[this.index]
        console.log(this.questionList.ctype)
        console.log(this.questionList.answers)
        if (this.questionList.ctype === '单选' || this.questionList.ctype === '判断') {
          this.questionType = true
        }
        if (this.questionList.ctype === '多选') {
          this.questionType = false
        }
      })
    },
    methods: {
      // 选项答题
      answerQuestion (index) {
        console.log(index)
        this.isActive = index
      },
      next () {
        this.index = ++this.index
        if (this.index === this.length - 1) {
          this.visible = true
        } else {
          this.questionList = this.question[this.index]
          this.isActive = -1
          console.log(this.questionList)
          console.log(this.index)
         /* if (this.questionList.answers.length > 4) {
            this.questionList.answers[this.index].checked = false
          } */
        }
        // console.log(this.questionList)
      },
      previous () {
        this.index = --this.index
        if (this.index === -1) {
          alert('已经是第一题了')
        } else {
          this.questionList = this.question[this.index]
          this.isActive = -1
          console.log(this.questionList.answers[0].checked)
        }
        // console.log(this.questionList)
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
        a
          color: rgb(43,38,37)
    .question-title, .question-list
      padding: 15px 16px
      font-size: 15px
      .option
        display block
        padding: 15px 0
        .suboption
          margin-right 10px
      .optionActive
        color: rgb(242,90,41)

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
