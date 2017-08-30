<template>
  <div class="slide-container">
    <swiper :options="swiperOption" ref="mySwiperA">
      <!-- 幻灯内容 -->
      <swiper-slide class="slide-box"><img src="../../common/img/banner-1.jpg" alt=""></swiper-slide>
      <swiper-slide class="slide-box"><img src="../../common/img/banner-2.jpg" alt=""></swiper-slide>
      <swiper-slide class="slide-box"><img src="../../common/img/banner-3.jpg" alt=""></swiper-slide>
      <swiper-slide class="slide-box"><img src="../../common/img/banner-4.png" alt=""></swiper-slide>
      <!-- 以下控件元素均为可选 -->
      <div class="swiper-pagination" slot="pagination"></div>
      <!--<div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>-->
      <!--<div class="swiper-scrollbar" slot="scrollbar"></div>-->
    </swiper>

    <!-- 导航 -->
    <div class="industry">
      <div class="industry-item" :industry-id="3"><router-link to="/study?industry_id=3"><img class="icon" src="./zhengquan.png" alt="">证券从业</router-link></div>
      <div class="industry-item" :industry-id="1"><router-link to="/study?industry_id=1"><img class="icon" src="./jijin.png" alt="">基金从业</router-link></div>
      <div class="industry-item" :industry-id="2"><router-link to="/study?industry_id=2"><img class="icon" src="./yinhang.png" alt="">银行从业</router-link></div>
      <div class="industry-item" :industry-id="5"><router-link to="/study?industry_id=5"><img class="icon" src="./zhucekuaijishi.png" alt="">注册会计师</router-link></div>
      <div class="industry-item" :industry-id="4"><router-link to="/study?industry_id=4"><img class="icon" src="./kuaiji.png" alt="">会计从业</router-link></div>
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
    props: {
      datas: {}
    },
    components: {Lasted, Employ, Compass},
    data () {
      return {
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
          /* prevButton: '.swiper-button-prev',
           nextButton: '.swiper-button-next', */
          /* scrollbar: '.swiper-scrollbar', */
          mousewheelControl: true,
          observeParents: true,
          onSlideChangeStart (swiper) {
            // console.log(swiper)
          }
        },
        url: Beiyi.getUrl(),
        advs: {}
      }
    },
    computed: {
      swiper () {
        return this.$refs.mySwiperA.swiper
      }
    },
    mounted () {
      this.swiper.slideTo(4, 2000, true)
    },
    created () {
      // 先从缓存获取
      Store.save('userId', '104ebf7e3d304d3a8d79e76f9c6f8d65')
      Store.save('phone', '18785099458')
      this.userId = Store.fetch('userId')
      this.phone = Store.fetch('phone')
      this.name = Store.fetch('name')
      this.imgUrl = Store.fetch('imgUrl')
      // 判断userId是否为空
//      debugger
      if (Beiyi.getQueryString('userId') !== null) {
        console.log('login')
        this.userId = Beiyi.getQueryString('userId')
        console.log(this.userId)
        Store.save('userId', this.userId)
        if (Beiyi.getQueryString('phone') === null && this.phone === null) {
          console.log('login')
          console.log(this.$route.path)
          this.$router.push({path: '/login'})
          return
        }
        if (Beiyi.getQueryString('phone') !== null) {
          this.phone = Beiyi.getQueryString('phone')
          Store.save('phone', this.phone)
        }
        if (Beiyi.getQueryString('name') !== null) {
          this.name = Beiyi.getQueryString('name')
          Store.save('name', this.name)
        }
        if (Beiyi.getQueryString('imgUrl') !== null) {
          this.imgUrl = Beiyi.getQueryString('imgUrl')
          Store.save('imgUrl', this.imgUrl)
        }
      }
      this.userId = Store.fetch('userId')
      this.phone = Store.fetch('phone')
      this.name = Store.fetch('name')
      this.imgUrl = Store.fetch('imgUrl')

      if (this.userId === null) {
        window.location.href = 'http://cb.by-edu.com/loginServlet'
      }
      if (this.phone === null) {
        this.userId = null
        Store.save('userId', this.userId)
      }
      // 获取广告列表
    //  console.log(this.$route.path)
    //  console.log(this.datas)
     /* this.$http.get(this.url + '/find/getcanuseads?userId=d7b1fbbb2b5a4eaea0b2c62be47867dd').then((response) => {
        response = response.body.data
        this.advs = response
      }) */
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
        color: rgb(43,38,37)
      .icon
        display block
        padding-bottom: 10px
        margin: auto
        width: 35%


</style>
