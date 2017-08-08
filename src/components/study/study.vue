<template>
  <div>
    <div class="panel-title">
      <div class="jijin">
        <p class="panel-nav border-1px"  @click="showJijin">基金从业</p>
        <div class="panel-body" v-show="jijinShow">
          <ul class="first-level">
            <li v-for="item in jijin" @click="getText(this)">{{ item.name }}</li>
          </ul>
          <div class="yinhang">
            <p class="panel-nav border-1px"  @click="showYinhang">银行从业</p>
            <div class="panel-body"  v-show="yinhangShow">
              <ul class="first-level">
                <li v-for="item in yinhang">{{ item.name }}</li>
              </ul>
            </div>
          </div>
          <div class="zhengquan">
            <p class="panel-nav border-1px"  @click="showZhengquan">证券从业</p>
            <div class="panel-body"  v-show="zhengquanShow">
              <ul class="first-level">
                <li v-for="item in zhengquan">{{ item.name }}</li>
              </ul>
            </div>
          </div>
          <div class="kuaiji">
            <p class="panel-nav border-1px"  @click="showKuaiji">会计从业</p>
            <div class="panel-body"  v-show="kuaijiShow">
              <ul class="first-level">
                <li v-for="item in kuaiji">{{ item.name }}</li>
              </ul>
            </div>
          </div>
          <div class="zhucekuaijishi">
            <p class="panel-nav border-1px"  @click="showZhucekuaijishi">注册会计师</p>
            <div class="panel-body"  v-show="zhucekuaijishiShow">
              <ul class="first-level">
                <li v-for="item in zhucekuaijishi">{{ item.name }}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>


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
    data () {
      return {
        jijin: {},
        yinhang: {},
        zhengquan: {},
        kuaiji: {},
        zhucekuaijishi: {},
        jijinShow: false,
        yinhangShow: false,
        zhengquanShow: false,
        kuaijiShow: false,
        zhucekuaijishiShow: false
      }
    },
    created () {
      // 必须携带userid
      this.$http.get('http://bay-api.by-edu.com/course/list?userId=104ebf7e3d304d3a8d79e76f9c6f8d65').then((response) => {
        console.log(response)
        response = response.body.data
        this.jijin = response.jijin
        this.yinhang = response.yinhang
        this.zhengquan = response.zhengquan
        this.kuaiji = response.kuaiji
        this.zhucekuaijishi = response.zhucekuaijishi
        console.log(this.jijin)
        console.log(this.yinhang)
      })
    },
    methods: {
      getText () {
        this.msg = {}
      },
      showJijin () {
        if (this.jijinShow === false) {
          this.jijinShow = true
        } else {
          this.jijinShow = false
        }
      },
      showYinhang () {
        if (this.yinhangShow === false) {
          this.yinhangShow = true
        } else {
          this.yinhangShow = false
        }
      },
      showZhengquan () {
        if (this.zhengquanShow === false) {
          this.zhengquanShow = true
        } else {
          this.zhengquanShow = false
        }
      },
      showKuaiji () {
        if (this.kuaijiShow === false) {
          this.kuaijiShow = true
        } else {
          this.kuaijiShow = false
        }
      },
      showZhucekuaijishi () {
        if (this.zhucekuaijishiShow === false) {
          this.zhucekuaijishiShow = true
        } else {
          this.zhucekuaijishiShow = false
        }
      }
    },
    mounted () {
    }
  }
</script>

<style lang="stylus" type="text/stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/common.styl"
  .panel-title
    width: 100%
    background-color: rgb(240, 240, 240)
    .panel-nav
      height: 50px
      line-height: 50px
      background-color #fff
      font-size: 17px
      font-weight: 500
      text-align: center
      border-1px(rgb(229,223,223))

  .panel-body
    background-color: #f0f0f0
    text-align: center
    .first-level
      line-height 46px

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
