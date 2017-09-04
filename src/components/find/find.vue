<template>
  <div class="slide-container">
    <swiper :options="swiperOption" ref="mySwiperA">
      <!-- 幻灯内容 -->
      <swiper-slide class="slide-box"  v-for="item in advs"><img :src="item.img" alt=""></swiper-slide>
      <!-- 以下控件元素均为可选 -->
      <div class="swiper-pagination" slot="pagination"></div>
      <!--<div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>-->
      <!--<div class="swiper-scrollbar" slot="scrollbar"></div>-->
    </swiper>

    <!-- 导航 -->
    <div class="industry">
      <div class="industry-item">
        <router-link to="/study"><img class="icon" src="./zhengquan.png" alt="">证券从业</router-link>
      </div>
      <div class="industry-item">
        <router-link to="/study"><img class="icon" src="./jijin.png" alt="">基金从业</router-link>
      </div>
      <div class="industry-item">
        <router-link to="/study"><img class="icon" src="./yinhang.png" alt="">银行从业</router-link>
      </div>
      <div class="industry-item">
        <router-link to="/study"><img class="icon" src="./zhucekuaijishi.png" alt="">注册会计师</router-link>
      </div>
      <div class="industry-item">
        <router-link to="/study"><img class="icon" src="./kuaiji.png" alt="">会计从业</router-link>
      </div>
    </div>
    <div class="divide"></div>
    <lasted></lasted>
    <employ></employ>
    <Compass></Compass>
    <div class="space"></div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Lasted from '../../components/lasted_course/lasted'
  import Employ from '../../components/employ/employ'
  import Compass from '../../components/compass/compass'
  import Beiyi from '../../common.js'
  import Store from '../../store.js'

  export default {
    components: {Lasted, Employ, Compass},
    data () {
      return {
//        datas: {}, // 请求的所有数据
//        courses: [],
//        course: {},
        swiperOption: {
          notNextTick: true,
          autoplay: 2000,
          loop: true,
          autoplayDisableOnInteraction: false,
          grabCursor: true,
          setWrapperSize: true,
          autoHeight: true,
          pagination: '.swiper-pagination',
          paginationClickable: true,
          mousewheelControl: true,
          observeParents: true,
          onSlideChangeStart (swiper) {
            // console.log(swiper)
          }
        },
        advs: {}
      }
    },
    computed: {
      swiper () {
        return this.$refs.mySwiperA.swiper
      }
    },
    mounted () {
      this.swiper.slideTo(4, 1000, true)
    },
    created () {
      this.user = Store.fetch('user')
//      console.log('sssss' + this.user)
//      // 请求课程接口
//      this.$http.get(Beiyi.getUrl() + '/course/list?userId=' + this.user.userId).then((response) => {
//        // console.log(response)
//        response = response.body.data
//        this.datas = response
//        Store.save('datas', this.datas)
//        for (var i in this.datas) {
//          for (var j in this.datas[i]) {
//            this.courses.push(this.datas[i][j])
//          }
//          Store.save('courses', this.courses)
//          console.log(this.courses)
//        }
//        // 初始化一个默认值并缓存
//        this.course = this.courses[4]
//        Store.save('course', this.course)
//      })
      // 获取广告列表
      this.$http.get(Beiyi.getUrl() + '/find/getcanuseads?userId=' + this.user.userId).then((response) => {
        response = response.body.data
        this.advs = response
        console.log(this.advs)
      })
    }
  }
</script>

<style lang="stylus" type="text/stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/base"
  .space
    height: 70px

  .slide-box
    width: 200px
    height: 200px
    img
      width: 100%
      height: 100%

  .industry
    display: flex
    width: 100%
    .industry-item
      flex: 1
      text-align center
      font-size: 13px
      padding: 13px 0
      a
        color: rgb(43, 38, 37)
      .icon
        display block
        padding-bottom: 10px
        margin: auto
        width: 35%


</style>
