<template>
  <div>
    <div class="panel-title">
      <p class="panel-nav">基金从业 (私募股权投资基金)</p>
    </div>
    <div class="panel-body">
      <ul class="first-level">
        <li @click="showMenu" v-show="detailShow">
          <p>基金从业</p>
          <ol class="second-level">
            <li>基金基础知识</li>
            <li>基金金融基础知识</li>
            <li>私募股权投资基金</li>
          </ol>
        </li>
        <li>
          <p>银行从业</p>
        </li>
        <li><p>证券从业</p></li>
        <li><p>会计从业</p></li>
        <li><p>注册会计师</p></li>
      </ul>
    </div>

    <ul class="course-tip">
      <li class="tip"><img src="../../resource/image/zhangjie.png" alt=""><span>章节练习</span></li>
      <li class="tip"><img src="../../resource/image/moni.png" alt=""><span>考前模拟</span></li>
      <li class="tip"><img src="../../resource/image/fangzhen.png" alt=""><span>仿真测试</span></li>
      <li class="tip"><img src="../../resource/image/zhongdian.png" alt=""><span>重难点突破</span></li>
      <li class="tip"><img src="../../resource/image/cuoti.png" alt=""><span>错题集</span></li>
      <li class="tip"><img src="../../resource/image/pingce.png" alt=""><span>专家评测</span></li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      jijin: {
        type: Object
      },
      data () {
        return {
          detailShow: false
        }
      },
      methods: {
        showMenu () {
          this.detailShow = true
        }
      }
    }
  }
</script>

<style lang="stylus" type="text/stylus" rel="stylesheet/stylus">
  .panel-title
    width: 100%
    height: 46px
    line-height: 46px
    background-color: rgb(240, 240, 240)
    .panel-nav
      font-size 15px
      font-weight: 500
      text-align: center

  .panel-body
    text-align: center;

  .course-tip
    width: 100%
    padding-top: 27px
    overflow: hidden
    .tip
      width: 33%
      padding: 20px 0
      text-align: center
      float: left
      img
        width: 50%
        display: block
        margin: auto
      span
        display block
        padding-top 9px
        font-size 13px
</style>
