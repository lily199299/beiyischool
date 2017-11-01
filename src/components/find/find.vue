<template>
  <div>
    <div class="slide-container">
      <swiper :options="swiperOption" ref="mySwiperA">
        <!-- 幻灯内容 -->
        <!--<swiper-slide class="slide-box" v-for="item in advs"><img :src="item.img" alt=""></swiper-slide>-->
        <swiper-slide class="slide-box"><img src="../../common/img/banner-1.jpg" alt=""></swiper-slide>
        <swiper-slide class="slide-box"><img src="../../common/img/banner-2.jpg" alt=""></swiper-slide>
        <swiper-slide class="slide-box"><img src="../../common/img/banner-3.jpg" alt=""></swiper-slide>
        <swiper-slide class="slide-box"><img src="../../common/img/banner-4.png" alt=""></swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
    <!--<Carousel autoplay v-model="value2">-->
      <!--<CarouselItem v-for="item in advs">-->
        <!--<div class="demo-carousel"><img :src="item.img" alt="" style="width: 100%"></div>-->
      <!--</CarouselItem>-->
    <!--</Carousel>-->
    <!--<Lunbo></Lunbo>-->
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
    <!--展示新人优惠券-->
    <div class="coupon" v-show="coupon">
      <img v-show="couponImg" class="couponImg" @click="getCoupon" src="./coupon1.png" alt="">
      <div class="getSuccess" v-show="success">
        <img src="./success.png" alt="">
        <div class="tip"><p>优惠券已领取</p>
          <p>可在我的优惠券里查看</p>
        </div>
      </div>
      <img v-show="closeBtn" class="closeBtn" @click="closeCoupon" src="./closeBtn.png" alt="">
    </div>
  </div>

</template>

<script type="text/ecmascript-6">
  import Lasted from '../../components/lasted_course/lasted'
  import Employ from '../../components/employ/employ'
  import Compass from '../../components/compass/compass'
  import Beiyi from '../../common.js'
  import Store from '../../store.js'
  import Lunbo from '../../components/lunbotu/lunbotu.vue'

  export default {
    components: {Lasted, Employ, Compass, Lunbo},
    data () {
      return {
        showTip: false,
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
        advs: {},
        coupon: false,
        couponImg: true,
        closeBtn: true,
        success: false,
        timer: null
      }
    },
    methods: {
      tips () {
        this.showTip = true
      },
      yesknow () {
        this.showTip = false
      },
      // 新人第一次登陆进来 领取优惠券
      getCoupon () {
        this.couponImg = false
        this.closeBtn = false
        this.success = true
        this.timer = setTimeout(() => {
          this.success = false
          this.coupon = false
        }, 1000)
      },
      closeCoupon () {
        this.coupon = false
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
      // 获取广告列表
      this.$http.get(Beiyi.getUrl() + '/find/getcanuseads?userId=' + this.user.userId).then((response) => {
        response = response.body.data
        this.advs = response
        Store.save('advs', this.advs)
//        console.log(this.advs)
      })
    }
  }
</script>

<style lang="stylus" type="text/stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/base"
  .coupon
    width: 100%
    height: 100%
    position fixed
    top: 0
    background-color rgba(0,0,0,.6)
    z-index:110
    .couponImg
      width:90%
      position absolute
      top:-130px
      bottom: 0
      right: 0
      left: 0
      margin:auto
    .closeBtn
      width: 35px
      height: 35px
      position absolute
      bottom: 80px
      right: 0
      left: 0
      margin:auto
    .getSuccess
      position absolute
      bottom: 0
      top: 0
      right: 0
      left: 0
      margin:auto
      width: 240px
      height: 140px
      background-color #fff
      border-radius 10px
      img
        display block
        width: 45px
        position absolute
        top: 25px
        left: 0
        right: 0
        bottom:80px
        margin-left: 102px
      .tip
        position absolute
        top:80px
        width: 100%
        text-align center
        height: 50px
        line-height 25px
        font-size 15px
  .demo-carousel
    width 100%
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
      font-size: 12px
      padding: 13px 0
      color: rgb(128,124,123)
      a
        color: rgb(128,124,123)
      .icon
        display block
        padding-bottom: 10px
        margin: auto
        width: 35%
  .swiper-pagination-bullet
    width 13px
    height 2px
    border-radius 0
  .swiper-pagination-bullet-active
    background-color rgb(242,90,41)
  .swiper-container-horizontal > .swiper-pagination-bullets
    bottom 4px

</style>
