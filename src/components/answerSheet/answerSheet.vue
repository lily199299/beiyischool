<template>
  <div>
    <div class="numList">
      <!--{{$route.query.length}}-->
      <a href="" v-for="item in arr">
        <span class="questionNum">{{item}}</span>
      </a>
    </div>
    <div class="space"></div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  created () {
    this.length = this.$route.query.length
    this.arr = []
    for (let i = 1; i <= this.length; i++) {
      this.arr.push(i)
    }
    console.log(this.arr)
  }
}
</script>

<style lang="stylus" type="text/stylus" rel="stylesheet/stylus">
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
      text-align: center
      line-height: 30px
      border-radius: 50%
      margin: 15px auto
      border:1px solid rgb(172,169,169)
</style>
