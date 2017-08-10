<template>
  <div>
    <div class="panel-title">
      <div class="jijin">
        <p class="panel-nav border-1px"  @click="showJijin" v-text="msg"></p>
        <div class="panel-body" v-show="jijinShow">
          <ul class="first-level">
            <li v-for="item in jijin" :id="item.id" @click="getText(item.id,item)" ref="course">{{ item.name }}</li>
          </ul>
          <div class="yinhang">
            <p class="panel-nav border-1px"  @click="showYinhang">银行从业</p>
            <div class="panel-body"  v-show="yinhangShow">
              <ul class="first-level">
                <li v-for="item in yinhang" :id="item.id" @click="getText(item.id,item)">{{ item.name }}</li>
              </ul>
            </div>
          </div>
          <div class="zhengquan">
            <p class="panel-nav border-1px"  @click="showZhengquan">证券从业</p>
            <div class="panel-body"  v-show="zhengquanShow">
              <ul class="first-level">
                <li v-for="item in zhengquan" :id="item.id" @click="getText(item.id,item)">{{ item.name }}</li>
              </ul>
            </div>
          </div>
          <div class="kuaiji">
            <p class="panel-nav border-1px"  @click="showKuaiji">会计从业</p>
            <div class="panel-body"  v-show="kuaijiShow">
              <ul class="first-level">
                <li v-for="item in kuaiji" :id="item.id" @click="getText(item.id,item)">{{ item.name }}</li>
              </ul>
            </div>
          </div>
          <div class="zhucekuaijishi">
            <p class="panel-nav border-1px"  @click="showZhucekuaijishi">注册会计师</p>
            <div class="panel-body"  v-show="zhucekuaijishiShow">
              <ul class="first-level">
                <li v-for="item in zhucekuaijishi" :id="item.id" @click="getText(item.id,item)">{{ item.name }}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="divide"></div>
    <div class="progress">
      <div class="progress-score"><img src="./progress.png" alt="" height="100%"></div>
      <div class="person-ratings border-1px">
        <div class="person">
          <p>已有<span class="colorSty">12000</span>人参与学习</p>
          <p>我的排名<span class="colorSty">12</span></p>
        </div>
        <div class="ratings">
          <p>
            <span class="colorSty">已解锁该课程</span>
          </p>
        </div>
      </div>
    </div>
    <ul class="course-tip">
      <li class="tip">
        <router-link to="./chapter"><img src="../../resource/image/zhangjie.png" alt=""><span>章节练习</span></router-link>
      </li>
      <li class="tip"><img src="../../resource/image/moni.png" alt=""><span>考前模拟</span></li>
      <li class="tip"><img src="../../resource/image/fangzhen.png" alt=""><span>仿真测试</span></li>
      <li class="tip"><img src="../../resource/image/zhongdian.png" alt=""><span>重难点突破</span></li>
      <li class="tip"><img src="../../resource/image/cuoti.png" alt=""><span>错题集</span></li>
      <li class="tip" @click="check"><img src="../../resource/image/pingce.png" alt=""><span>专家评测</span></li>
    </ul>
    <div class="space"></div>
  </div>
</template>
<script type="text/ecmascript-6">
  import Chapter from '../../components/chapter/chapter.vue'
  const msg = {}
  export default {
    props: {
      datas: {}
    },
    components: {Chapter},
    data () {
      return {
        jijin: {},
        yinhang: {},
        zhengquan: {},
        kuaiji: {},
        zhucekuaijishi: {},
        patterns: {},
        libraries: {},
        msg: {},
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
        this.patterns = this.jijin[0].patterns
        this.libraries = this.patterns[0].libraries
        this.yinhang = response.yinhang
        this.zhengquan = response.zhengquan
        this.kuaiji = response.kuaiji
        this.zhucekuaijishi = response.zhucekuaijishi
        console.log(this.libraries)
      })
    },
    methods: {
      check () {
        console.log(this.datas)
      },
      getText (id, item) {
        // 课程id 课程名
        console.log(item.name)
        console.log(item.id)
        this.msg = item.name
        this.jijinShow = false
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
  .progress
    padding: 20px 16px
    .progress-score
      height: 105px
      img
        display block
        margin auto
        height 100%
    .person-ratings
      display flex
      padding: 20px 0
      border-1px(#dad5d5)
      .person
        display inline-block
        flex: 1
        border-right: 1px solid #dad5d5
        text-align: right
        padding-right: 10px
        p
          padding-bottom: 6px
          font-size: 13px
      .ratings
        display inline-block
        flex: 1
        padding-left: 10px
        p
          width: 65%
          line-height: 20px
          border: 1px solid #f05a29
          text-align: center
          border-radius: 25px
          span
            display: block
            padding: 5px 0
            font-size 13px
  .course-tip
    width: 100%
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
