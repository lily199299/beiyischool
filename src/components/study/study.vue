<template>
  <div>
    <div class="panel-title">
      <p class="panel-nav border-1px" @click="showAll" v-show="hideSelect">{{message}}<Icon class="down" type="chevron-down"></Icon></p>
      <p class="panel-nav border-1px" @click="showAll" v-show="showSelect">{{msg}}</p>
      <div v-show="allShow">
        <div class="zhengquan">
          <p class="panel-nav border-1px" @click="showZhengquan">证券从业<Icon class="down" type="chevron-down"></Icon></p>
          <div class="panel-body" v-show="zhengquanShow">
            <ul class="first-level">
              <li v-for="item in zhengquan" @click="getText(item.id,item)">{{ item.name }}</li>
            </ul>
          </div>
        </div>
        <div class="jijin">
          <p class="panel-nav border-1px" @click="showJijin">基金从业<Icon class="down" type="chevron-down"></Icon></p>
          <div class="panel-body" v-show="jijinShow">
            <ul class="first-level">
              <li v-for="item in jijin" @click="getText(item.id,item)">{{ item.name }}</li>
            </ul>
          </div>
        </div>
        <div class="yinhang">
          <p class="panel-nav border-1px" @click="showYinhang">银行从业<Icon class="down" type="chevron-down"></Icon></p>
          <div class="panel-body" v-show="yinhangShow">
            <ul class="first-level">
              <li v-for="item in yinhang" @click="getText(item.id,item)">{{ item.name }}</li>
            </ul>
          </div>
        </div>
        <div class="zhucekuaijishi">
          <p class="panel-nav border-1px" @click="showZhucekuaijishi">注册会计师<Icon class="down" type="chevron-down"></Icon></p>
          <div class="panel-body" v-show="zhucekuaijishiShow">
            <ul class="first-level">
              <li v-for="item in zhucekuaijishi" @click="getText(item.id,item)">{{ item.name }}</li>
            </ul>
          </div>
        </div>
        <div class="kuaiji">
          <p class="panel-nav border-1px" @click="showKuaiji">会计从业<Icon class="down" type="chevron-down"></Icon></p>
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
      <div class="progress-score">
        <p class="percent"><span style="font-size: 30px">80</span><span style="font-size: 15px">%</span></p>
        <p class="studyProgress">学习进度</p>
      </div>
      <div class="person-ratings border-1px">
        <div class="person">
          <p>已有<span class="colorSty">12000</span>人参与学习</p>
          <p>我的排名<span class="colorSty">12</span></p>
        </div>
        <div class="ratings">
          <div v-if="!coursePay">
            <p  style="border: 1px solid #ddd;">
              <span class="lock">未解锁该课程</span>
            </p>
            <p style="border:none;color: red;padding-top: 10px" @click="immediateLock">立即解锁</p>
          </div>
          <div v-if="coursePay">
            <p>
              <span class="colorSty">已解锁该课程</span>
            </p>
          </div>
        </div>
      </div>
    </div>
    <ul class="course-tip">
      <li class="tip">
      <router-link :to="{ path: '/study/tip' , query: {coureId: this.coureId, patternType: 'tip'}}">
        <img src="../../common/img/zhangjie.png" alt=""><span>章节练习</span>
      </router-link>
    </li>
      <li class="tip">
        <router-link :to="{ path: '/study/tip', query: {coureId: this.coureId, patternType: 'kaoqian'}}">
          <img src="../../common/img/moni.png" alt=""><span>考前模拟</span>
        </router-link>
      </li>
      <li class="tip">
        <router-link :to="{ path: '/study/tip', query: {coureId: this.coureId, patternType: 'fangzhen'}}">
          <img src="../../common/img/fangzhen.png" alt=""><span>仿真测试</span>
        </router-link>
      </li>
      <li class="tip">
        <router-link :to="{ path: '/study/tip', query: {coureId: this.coureId, patternType: 'tupo'}}">
          <img src="../../common/img/zhongdian.png" alt=""><span>重难点突破</span>
        </router-link>
      </li>
      <li class="tip">
        <router-link :to="{ path: '/study/tip', query: {coureId: this.coureId, patternType: 'cuoti'}}">
          <img src="../../common/img/cuoti.png" alt=""><span>错题集</span>
        </router-link>
      </li>
      <li class="tip">
        <router-link :to="{ path: '/study/tip', query: {coureId: this.coureId, patternType: 'zhuanjia'}}">
          <img src="../../common/img/pingce.png" alt=""><span>专家评测</span>
        </router-link>
      </li>
    </ul>
    <div class="space"></div>
  </div>
</template>
<script type="text/ecmascript-6">
  import Store from '../../store.js'
  import Beiyi from '../../common.js'
  const msg = ''
  const coureId = ''
  var libraries = []
  export default {
    data () {
      return {
        datas: {}, // 请求的所有数据
        courses: [],
        course: {},
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
        msg: '',
        coureId,
        libraries: [],
        showBg: true,
        message: '',
        coursePay: false
      }
    },
    created () {
      // 从缓存读取所有数据
//      this.datas = Store.fetch('datas')
      this.user = Store.fetch('user')
      // 请求课程接口
      this.$http.get(Beiyi.getUrl() + '/course/list?userId=' + this.user.userId).then((response) => {
        // console.log(response)
        response = response.body.data
        this.datas = response
        Store.save('datas', this.datas)
        this.jijin = this.datas.jijin
        this.yinhang = this.datas.yinhang
        this.zhengquan = this.datas.zhengquan
        this.kuaiji = this.datas.kuaiji
        this.zhucekuaijishi = this.datas.zhucekuaijishi
        for (var i in this.datas) {
          for (var j in this.datas[i]) {
            this.courses.push(this.datas[i][j])
          }
          Store.save('courses', this.courses)
          console.log(this.courses)
        }
        // 初始化一个默认值并缓存
        this.course = this.courses[6]
        Store.save('course', this.course)
        this.coursePay = this.course.pay
        Store.save('lock', this.coursePay)
        // 读取选择的课程名称
//        this.message = Store.fetch('courseName')
        this.coureId = Store.fetch('courseId')
        // 获取id对应的课程
        for (let i in this.courses) {
          if (this.coureId === this.courses[i].id) {
            this.course = this.courses[i]
            // 缓存patterns tip页面使用
            Store.save('courseLocal', this.course.patterns)
            Store.save('selectedCourseName', this.course.name)
            this.coursePay = this.course.pay
            Store.save('lock', this.coursePay)
//            console.log(this.coursePay)
          }
        }
      })
      this.message = Store.fetch('selectedCourseName')
      // 初始化默认值
      this.course = this.courses[6]
      // 获取libraries
      for (var i in this.courses) {
        libraries.push(this.courses[i])
      }
      console.log(libraries)
      libraries = []
    },
    watch: {
      libraries: {
        handler: function (items) {
          Store.save('libraries', items)   // 观察／存入缓存
        },
        deep: true
      }
    },
    methods: {
      getText (id, item) {
        // 课程id 课程名
        console.log(item.name)
       // console.log(item.id)
        Store.save('msg', item.name)
        // 缓存课程courseId
        Store.save('courseId', item.id)
//        this.msg = this.course.name
        this.msg = Store.fetch('msg')
        this.coureId = Store.fetch('courseId')
        // 获取id对应的课程
        for (var i in this.courses) {
          if (this.coureId === this.courses[i].id) {
            this.course = this.courses[i]
            // 缓存patterns tip页面使用
            Store.save('courseLocal', this.course.patterns)
            Store.save('selectedCourseName', this.course.name)
            // 是否已经购买
            this.coursePay = this.course.pay
            Store.save('lock', this.coursePay)
            console.log(this.coursePay)
          }
        }
        this.allShow = false
        this.hideSelect = false
        this.showSelect = true
      },
      immediateLock () {
        this.coureId = Store.fetch('courseId')
        console.log(this.coureId)
        window.location.href = 'http://cb.by-edu.com/createOrder?userId=' + this.user.userId + '&courseId=' + Store.fetch('courseId')
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
  .down
    margin-left: 20px
    vertical-align: middle
    color: rgb(216,216,216)
  .panel-title
    width: 100%
    background-color: rgb(240, 240, 240)
    .panel-nav
      height: 50px
      line-height: 50px
      background-color #fff
      font-size: 13px
      font-weight: 500
      text-align: center
      border-1px(rgb(229, 223, 223))

  .panel-body
    background-color: #f0f0f0
    text-align: center
    .first-level
      line-height 46px
      li
        font-size 13px

  .progress
    padding: 20px 16px
    .progress-score
      .percent
        text-align center
        color: rgb(242,90,41)
      .studyProgress
        text-align center
        padding 15px 0
    .person-ratings
      display flex
      padding: 10px 0
      border-1px(#dad5d5)
      .person
        display inline-block
        flex: 1
        border-right: 1px solid #dad5d5
        text-align: right
        padding-right: 10px
        p
          padding-bottom: 6px
          font-size: 15px
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
      a
        display block
      img
        width: 45%
        display: block
        margin: auto
      span
        display block
        padding-top 9px
        font-size 13px
        color: rgb(43,38,37)
</style>
