<template>
  <div>
    <div>{{course}}</div>
    <div class="panel-title">
      <p class="panel-nav border-1px" @click="showAll" v-show="hideSelect" :id="course.id">切换课程（{{course.name}}）</p>
      <p class="panel-nav border-1px" @click="showAll" v-text="msg" v-show="showSelect" :id="this.coureId"></p>
      <div v-show="allShow">
        <div class="zhengquan">
          <p class="panel-nav border-1px" @click="showZhengquan">证券从业</p>
          <div class="panel-body" v-show="zhengquanShow">
            <ul class="first-level">
              <li v-for="item in zhengquan" @click="getText(item.id,item)">{{ item.name }}</li>
            </ul>
          </div>
        </div>
        <div class="jijin">
          <p class="panel-nav border-1px" @click="showJijin">基金从业</p>
          <div class="panel-body" v-show="jijinShow">
            <ul class="first-level">
              <li v-for="item in jijin" @click="getText(item.id,item)">{{ item.name }}</li>
            </ul>
          </div>
        </div>
        <div class="yinhang">
          <p class="panel-nav border-1px" @click="showYinhang">银行从业</p>
          <div class="panel-body" v-show="yinhangShow">
            <ul class="first-level">
              <li v-for="item in yinhang" @click="getText(item.id,item)">{{ item.name }}</li>
            </ul>
          </div>
        </div>
        <div class="zhucekuaijishi">
          <p class="panel-nav border-1px" @click="showZhucekuaijishi">注册会计师</p>
          <div class="panel-body" v-show="zhucekuaijishiShow">
            <ul class="first-level">
              <li v-for="item in zhucekuaijishi" @click="getText(item.id,item)">{{ item.name }}</li>
            </ul>
          </div>
        </div>
        <div class="kuaiji">
          <p class="panel-nav border-1px" @click="showKuaiji">会计从业</p>
          <div class="panel-body" v-show="kuaijiShow">
            <ul class="first-level">
              <li v-for="item in kuaiji" @click="getText(item.id,item)">{{ item.name }}</li>
            </ul>
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
          <p v-if="coursePay">
            <span class="colorSty">已解锁该课程</span>
          </p>
           <p v-if="!coursePay" style="border: 1px solid #ddd;">
             <span class="lock">未解锁该课程</span>
           </p>
        </div>
      </div>
    </div>
    <ul class="course-tip">
      <li class="tip">
      <router-link :to="{ path: '/study/chapter' , query: {coureId: this.coureId}}">
        <img src="../../common/img/zhangjie.png" alt=""><span>章节练习</span>
      </router-link>
    </li>
      <li class="tip"><img src="../../common/img/moni.png" alt=""><span>考前模拟</span></li>
      <li class="tip"><img src="../../common/img/fangzhen.png" alt=""><span>仿真测试</span></li>
      <li class="tip"><img src="../../common/img/zhongdian.png" alt=""><span>重难点突破</span></li>
      <li class="tip"><img src="../../common/img/cuoti.png" alt=""><span>错题集</span></li>
      <li class="tip"><img src="../../common/img/pingce.png" alt=""><span>专家评测</span></li>
    </ul>
    <div class="space"></div>
  </div>
</template>
<script type="text/ecmascript-6">
  import Store from '../../store.js'
  const msg = ''
  const coureId = ''
  var libraries = []
  var coursePay = false
  export default {
    props: {
      datas: {}
    },
    data () {
      return {
        jijin: {},
        yinhang: {},
        zhengquan: {},
        kuaiji: {},
        zhucekuaijishi: {},
        allShow: false,
        jijinShow: false,
        yinhangShow: false,
        zhengquanShow: false,
        kuaijiShow: false,
        zhucekuaijishiShow: false,
        hideSelect: true,
        showSelect: false,
        msg,
        coureId,
        libraries: [],
        coursePay
      }
    },
    created () {
     // console.log(this.datas)
      this.jijin = this.datas.jijin
      this.yinhang = this.datas.yinhang
      this.zhengquan = this.datas.zhengquan
      this.kuaiji = this.datas.kuaiji
      this.zhucekuaijishi = this.datas.zhucekuaijishi
      // 从缓存读取课程
      this.courses = Store.fetch('courses')
      // 初始化默认值
      this.course = this.courses[0]
      // 获取libraries
      for (var i in this.courses) {
        libraries.push(this.courses[i])
      }
      console.log(libraries)
      libraries = []
    },
    watch: {
      patterns: {
        handler: function (items) {
          // console.log(items)
          Store.save('patterns', items)   // 观察／存入缓存
        },
        deep: true
      },
      libraries: {
        handler: function (items) {
          Store.save('libraries', items)   // 观察／存入缓存
          // console.log(Store.fetch('course'))
        },
        deep: true
      }
    },
    methods: {
      getText (id, item) {
        // 课程id 课程名
        console.log(item.name)
        console.log(item.id)
        this.msg = item.name
        this.coureId = item.id
        // 获取id对应的课程
        for (var i in this.courses) {
          if (this.coureId === this.courses[i].id) {
            this.course = this.courses[i]
            console.log(this.course)
            this.coursePay = this.course.pay
            // console.log(this.coursePay)
          }
        }
        this.allShow = false
        this.hideSelect = false
        this.showSelect = true
      },
      showAll () {
        if (this.allShow === false) {
          this.allShow = true
        } else {
          this.allShow = false
        }
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
      border-1px(rgb(229, 223, 223))

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
        p:nth-child(1)
          width: 65%
          line-height: 20px
          border: 1px solid #f05a29
          text-align: center
          border-radius: 25px
          .colorSty
            display: block
            padding: 5px 0
            font-size 13px
        p:nth-child(2)
          width: 65%
          line-height: 20px
          border: 1px solid rgb(216, 216, 216)
          text-align: center
          border-radius: 25px
          .lock
            display: block
            padding: 5px 0
            font-size 13px
            color: rgb(43, 38, 37)

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
