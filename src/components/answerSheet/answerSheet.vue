<template>
  <div>
    <h1 class="subjectName">{{$route.query.tipname}}</h1>
    <div class="divide"></div>
    <div class="numList">
      {{$route.query.questionList}}
      <a href="#" v-for="item in arr">
        <span class="questionNum" :class="{bgColor: isBgColor}">{{item}}</span>
      </a>
    </div>
    <div class="space"></div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data () {
    return {
      isBgColor: false
    }
  },
  created () {
    // 获取题号
    this.answer = this.$route.query.answer
    console.log(this.answer.length)
    this.no = this.$route.query.questionList.no
    this.length = this.$route.query.length
    this.arr = []
    for (var i = 1; i <= this.length; i++) {
      if (this.no === i) {
        this.isBgColor = true
      } else {
        this.isBgColor = false
      }
      this.arr.push(i)
    }
  }
}
</script>

<style lang="stylus" type="text/stylus" rel="stylesheet/stylus">
.subjectName
  padding: 25px 16px
  font-size 18px
  text-align center
.numList
  width:100%
  overflow: hidden
  a
    display block
    width: 20%
    float: left
    .questionNum
      display: block
      width: 30px
      height:30px
      font-size 18px
      color: rgb(172,169,169)
      text-align: center
      line-height: 30px
      border-radius: 50%
      margin: 15px auto
      border:1px solid rgb(172,169,169)
    .bgColor
      background-color rgb(242,90,41)
      color: #fff
      border:none
</style>
