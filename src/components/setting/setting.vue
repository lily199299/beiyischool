<template>
  <div>
    <a class="clearLocalStorage" @click="clearData">清理缓存</a>
    <div class="divide"></div>
    <a class="aboutUs">关于我们</a>
    <div class="divide"></div>
    <Modal v-model="showTan" class-name="vertical-center-modal" :closable="false" :mask-closable="false">
      <div style="font-size: 15px;text-align: center">
        确定清理本地缓存数据么
      </div>
      <div slot="footer" style="display: flex;">
        <button style="flex: 1;border: none;background: #fff;">
          <router-link to="/mine" style="font-weight:bold;font-size: 15px">取消</router-link>
        </button>
        <button @click="sure" style="flex: 1;border: none;background: #fff;">
          <router-link to="/find" style="font-weight:bold;font-size: 15px">确定</router-link>
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
        showTan: false
      }
    },
    created () {
      this.user = Store.fetch('user')
    },
    methods: {
      clearData () {
        this.showTan = true
      },
      sure () {
        localStorage.clear()
        window.location.href = 'http://learn.by-edu.com/'
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
