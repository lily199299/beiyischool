<template>
  <div>
    <!--{{$route.query.id}}-->
    <div class="panel-title">
      <p class="panel-nav border-1px" @click="showAll" v-show="hideSelect">{{message}}
        <Icon v-if="down" class="down" type="chevron-down"></Icon>
        <Icon v-if="!down" class="down" type="chevron-up"></Icon>
      </p>
      <p class="panel-nav border-1px" @click="showAll" v-show="showSelect">{{msg}}
        <Icon v-if="down" class="down" type="chevron-down"></Icon>
        <Icon v-if="!down" class="down" type="chevron-up"></Icon>
      </p>
      <div v-show="allShow">
        <div class="zhengquan">
          <p class="panel-nav border-1px" @click="showZhengquan">证券从业 <Icon v-if="down" class="down" type="chevron-down"></Icon>
            <Icon v-if="!down" class="down" type="chevron-up"></Icon></p>
          <div class="panel-body" v-show="zhengquanShow">
            <ul class="first-level">
              <li :id="item.id" v-for="(item, index) in zhengquan" @click="getText(item.id,item)" :class="{ selectActive: this.checkdefault }">{{ item.name }}</li>
            </ul>
          </div>
        </div>
        <div class="jijin">
          <p class="panel-nav border-1px" @click="showJijin">基金从业 <Icon v-if="down" class="down" type="chevron-down"></Icon>
            <Icon v-if="!down" class="down" type="chevron-up"></Icon></p>
          <div class="panel-body" v-show="jijinShow">
            <ul class="first-level">
              <li v-for="item in jijin" @click="getText(item.id,item)">{{ item.name }}</li>
            </ul>
          </div>
        </div>
        <div class="yinhang">
          <p class="panel-nav border-1px" @click="showYinhang">银行从业 <Icon v-if="down" class="down" type="chevron-down"></Icon>
            <Icon v-if="!down" class="down" type="chevron-up"></Icon></p>
          <div class="panel-body" v-show="yinhangShow">
            <ul class="first-level">
              <li v-for="item in yinhang" @click="getText(item.id,item)">{{ item.name }}</li>
            </ul>
          </div>
        </div>
        <div class="zhucekuaijishi">
          <p class="panel-nav border-1px" @click="showZhucekuaijishi">注册会计师 <Icon v-if="down" class="down" type="chevron-down"></Icon>
            <Icon v-if="!down" class="down" type="chevron-up"></Icon></p>
          <div class="panel-body" v-show="zhucekuaijishiShow">
            <ul class="first-level">
              <li v-for="item in zhucekuaijishi" @click="getText(item.id,item)">{{ item.name }}</li>
            </ul>
          </div>
        </div>
        <div class="kuaiji">
          <p class="panel-nav border-1px" @click="showKuaiji">会计从业 <Icon v-if="down" class="down" type="chevron-down"></Icon>
            <Icon v-if="!down" class="down" type="chevron-up"></Icon></p>
          <div class="panel-body" v-show="kuaijiShow">
            <ul class="first-level">
              <li v-for="item in kuaiji" @click="getText(item.id,item)">{{ item.name }}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="showMask" v-if="showMask" @click="hideMask"></div>
    <div class="divide"></div>
    <div class="progress">
      <div class="progress-score" v-if="coursePay">
        <p class="percent"><span style="font-size: 30px">{{course.process}}</span><span style="font-size: 15px">%</span></p>
        <p class="studyProgress">学习进度</p>
      </div>
      <!--<div class="progress-score">-->
        <!--<i-circle :percent="percent" :stroke-color="color">-->
          <!--<Icon v-if="percent == 100" type="ios-checkmark-empty" size="60" style="color:#5cb85c"></Icon>-->
          <!--<span v-else style="font-size:24px">0%</span>-->
          <!--&lt;!&ndash;<span v-else style="font-size:24px">{{ percent }}%</span>&ndash;&gt;-->
        <!--</i-circle>-->
      <!--</div>-->
      <div class="person-ratings border-1px">
        <div class="person">
          <p>已有<span class="colorSty">{{course.useNum}}</span>人参与学习</p>
          <p>我的排名<span class="colorSty">{{course.rank}}</span></p>
        </div>
        <div class="ratings">
          <div v-if="!coursePay">
            <p class="lock">
              <span class="lockSty">未解锁该课程</span>
            </p>
            <p style="width:104px;border:none;color: red;padding-top: 10px;text-align: center" @click="immediateLock">立即解锁</p>
          </div>
          <div v-if="coursePay">
            <p class="unlock">
              <span class="colorSty">已解锁该课程</span>
            </p>
          </div>
        </div>
      </div>
    </div>
    <ul class="course-tip">
      <li class="tip">
      <router-link :to="{ path: '/study/tip' , query: {courseId: this.courseId, patternType: 'tip'}}">
        <img src="../../common/img/zhangjie.png" alt=""><span>章节练习</span>
      </router-link>
    </li>
      <li class="tip">
        <router-link :to="{ path: '/study/tip', query: {courseId: this.courseId, patternType: 'kaoqian'}}">
          <img src="../../common/img/moni.png" alt=""><span>考前模拟</span>
        </router-link>
      </li>
      <li class="tip">
        <router-link :to="{ path: '/study/tip', query: {courseId: this.courseId, patternType: 'fangzhen'}}">
          <img src="../../common/img/fangzhen.png" alt=""><span>仿真测试</span>
        </router-link>
      </li>
      <li class="tip">
        <router-link :to="{ path: '/study/tip', query: {courseId: this.courseId, patternType: 'tupo'}}">
          <img src="../../common/img/zhongdian.png" alt=""><span>重难点突破</span>
        </router-link>
      </li>
      <li class="tip">
        <router-link :to="{ path: '/study/cuoti', query: {courseId: this.courseId, patternType: 'cuoti',libraryId: this.libraryId}}">
          <img src="../../common/img/cuoti.png" alt=""><span>错题集</span>
        </router-link>
      </li>
      <li class="tip">
        <router-link :to="{ path: '/study/tip', query: {courseId: this.courseId, patternType: 'zhuanjia'}}">
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
  var msg = ''
  var courseId = ''
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
        showMask: false,
        msg: '',
        courseId,
        libraries: [],
        showBg: true,
        message: '',
        coursePay: false,
        isA: true,
        isB: false,
        down: true,
        checkdefault: false,
        libraryId: 0
      }
    },
    created () {
      var id = this.$route.query.id
      console.log(id)
      this.hotcourse = Store.fetch('hotcourse')
      this.courses = this.hotcourse
//      var id = this.$route.query.id

      // 从缓存读取所有数据
//      this.datas = Store.fetch('datas')
      this.user = Store.fetch('user')
      // 请求课程接口
      this.$http.get(Beiyi.getUrl() + '/course/list?userId=' + this.user.userId).then((response) => {
        response = response.body.data
        this.datas = response
        console.log(this.datas)
//        console.log(this.datas)
        Store.save('datas', this.datas)
        this.jijin = this.datas.jijin
        this.yinhang = this.datas.yinhang
        this.zhengquan = this.datas.zhengquan
        this.kuaiji = this.datas.kuaiji
        this.zhucekuaijishi = this.datas.zhucekuaijishi
        console.log('++++++++++++++++++++++++++++++=')
        console.log(this.kuaiji)
        console.log(this.zhucekuaijishi)
        for (var i in this.datas) {
          for (var j in this.datas[i]) {
            this.courses.push(this.datas[i][j])
          }
          Store.save('courses', this.courses)
          console.log(this.courses)
        }
//        this.hotcourse = Store.fetch('hotcourse')
//        this.courses = this.hotcourse
//        for (let i in this.courses) {
//          if (this.$route.query.id === this.courses[i].id) {
//            this.message = this.courses[i].name
//          }
//        }
        this.message = Store.fetch('courseName')
        this.courseId = Store.fetch('courseId')
        // 初始化一个默认值并缓存
        this.course = this.courses[6]
        console.log(this.course)
        Store.save('course', this.course)
        this.coursePay = this.course.pay
        Store.save('lock', this.coursePay)
        // 读取选择的课程名称
//        this.message = Store.fetch('courseName')
        this.courseId = Store.fetch('courseId')
        console.log(this.courseId)
        // 获取id对应的课程
        for (let i in this.courses) {
          if (this.courseId === this.courses[i].id) {
            this.course = this.courses[i]
            // 缓存patterns tip页面使用
            Store.save('courseLocal', this.course.patterns)
            Store.save('courseName', this.course.name)
            this.coursePay = this.course.pay
            Store.save('lock', this.coursePay)
//            console.log(this.coursePay)
          }
        }
      })
      this.message = Store.fetch('courseName')
      // 初始化默认值
//      this.course = this.courses[6]
//      console.log(this.course)
//      this.hotcourse = Store.fetch('hotcourse')
//      this.courses = this.hotcourse
    },
    methods: {
      getText (id, item) {
        this.down = false
        // 课程id 课程名
//        console.log(item.name)
       // console.log(item.id)
        Store.save('msg', item.name)
        // 缓存课程courseId
        Store.save('courseId', item.id)
//        this.msg = this.course.name
        this.msg = Store.fetch('msg')
        this.courseId = Store.fetch('courseId')
        // 获取id对应的课程
        for (let i in this.courses) {
          if (this.courseId === this.courses[i].id) {
            this.course = this.courses[i]
            // 缓存patterns tip页面使用
            Store.save('courseLocal', this.course.patterns)
            Store.save('courseName', this.course.name)
            // 是否已经购买
            this.coursePay = this.course.pay
            Store.save('lock', this.coursePay)
//            console.log(this.coursePay)
          }
        }
        this.allShow = false
        this.hideSelect = false
        this.showSelect = true
        this.showMask = false
      },
      hideMask () {
        this.allShow = false
        this.showMask = false
      },
      immediateLock () {
        this.courseId = Store.fetch('courseId')
        console.log(this.courseId)
        window.location.href = 'http://cb.by-edu.com/createOrder?userId=' + this.user.userId + '&courseId=' + Store.fetch('courseId')
      },
      showAll () {
        if (this.allShow === false) {
          this.allShow = true
          this.showMask = true
          this.down = false
        } else {
          this.allShow = false
          this.showMask = false
          this.down = true
        }
      },
      showJijin () {
        if (this.jijinShow === false) {
          this.jijinShow = true
          this.down = false
        } else {
          this.jijinShow = false
          this.down = true
        }
      },
      showYinhang () {
        if (this.yinhangShow === false) {
          this.yinhangShow = true
          this.down = false
        } else {
          this.yinhangShow = false
          this.down = true
        }
      },
      showZhengquan () {
        if (this.zhengquanShow === false) {
          this.zhengquanShow = true
          this.down = false
        } else {
          this.zhengquanShow = false
          this.down = true
        }
      },
      showKuaiji () {
        if (this.kuaijiShow === false) {
          this.kuaijiShow = true
          this.down = false
        } else {
          this.kuaijiShow = false
          this.down = true
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
  .selectActive
    background-color: #ffffff
    color: rgb(242,90,41)
  .markerA
    color: rgb(43,38,37)
  .markerB
    color: rgb(242,90,41)
  .down
    margin-left: 7px
    vertical-align: middle
    color: rgb(216,216,216)
  .panel-title
    width: 100%
    background-color: rgb(240, 240, 240)
    .panel-nav
      height: 50px
      line-height: 50px
      color: rgb(43,38,37)
      background-color #fff
      font-size: 16px
      font-weight: 500
      text-align: center
      border-1px(rgb(229, 223, 223))

  .panel-body
    background-color: #f0f0f0
    text-align: center
    .first-level
      line-height 46px
      li
        font-size 15px
      li:hover
        color: rgb(242,90,41)

  .progress
    padding: 20px 16px
    .progress-score
      padding: 20px 16px
      /*height 120px*/
      /*position relative*/
      /*overflow hidden*/
      /*.ivu-chart-circle*/
        /*position: absolute*/
        /*left: 0*/
        /*right: 0*/
        /*top: 0*/
        /*bottom 0*/
        /*margin:auto*/
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
      padding-bottom: 32px
      .person
        display inline-block
        flex: 1
        border-right: 1px solid #dad5d5
        text-align: right
        color: rgb(172,169,169)
        padding-right: 13px
        p
          padding-bottom: 6px
          font-size: 12px
      .ratings
        display inline-block
        flex: 1
        padding-left: 13px
        .unlock
          width: 104px
          height: 26px
          border: 1px solid rgb(242,90,41)
          text-align: center
          border-radius: 25px
          .colorSty
            display: block
            padding: 5px 0
            font-size 13px
            color: rgb(242,90,41)
        .lock
          width: 104px
          height: 26px
          border: 1px solid rgb(216, 216, 216)
          text-align: center
          border-radius: 25px
          .lockSty
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
  .showMask
    width:100%
    height: 100%
    position fixed
    background-color rgba(0,0,0,.3)
    z-index: 100
</style>
