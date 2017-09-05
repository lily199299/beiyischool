<template>
  <div>
    <a class="clearLocalStorage" @click="clearData">清理缓存</a>
    <div class="divide"></div>
    <a class="aboutUs">关于我们</a>
    <div class="divide"></div>
    <!--<div class="quit">退出登录</div>-->

    <!--弹窗-->
    <Modal v-model="showTan" :closable="false" :mask-closable="false">
      <p style="text-align: center;height: 40px;line-height: 40px;font-size: 14px;color: rgb(43,38,37)">确定清理本地缓存数据</p>
    </Modal>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data () {
      return {
        showTan: false
      }
    },
    methods: {
      clearData () {
        this.showTan = true
        localStorage.clear()
      }
    }
  }
</script>

<style lang="stylus" type="text/stylus" rel="stylesheet/stylus">
    /*.ivu-modal*/
      /*width: 300px !important*/
      /*height: 200px !important*/
      /*top: 0 !important*/
      /*position absolute !important*/
      /*bottom 0 !important*/
      /*right:0 !important*/
      /*left: 0 !important*/
      /*margin auto !important
    .ivu-modal-footer
      padding: 0
      display flex
      button
        height: 45px
        background-color: #fff
        border: none
        color: rgb(33,142,255)
        font-size 14px
        flex: 1
      .ivu-btn-text
         border-right 1px solid #ddd*/
.clearLocalStorage,.aboutUs
  display block
  height: 40px
  line-height 40px
  padding:0 16px
  font-size 15px
  color: rgb(43,38,37)
</style>
