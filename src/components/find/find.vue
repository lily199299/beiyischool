<template>
  <div class="slide-container">
    <swiper :options="swiperOption" ref="mySwiperA">
      <!-- 幻灯内容 -->
      <swiper-slide class="slide-box"><img src="../../resource/image/banner-1.jpg" alt=""></swiper-slide>
      <swiper-slide class="slide-box"><img src="../../resource/image/banner-2.jpg" alt=""></swiper-slide>
      <swiper-slide class="slide-box"><img src="../../resource/image/banner-3.jpg" alt=""></swiper-slide>
      <swiper-slide class="slide-box"><img src="../../resource/image/banner-4.png" alt=""></swiper-slide>
      <!-- 以下控件元素均为可选 -->
      <div class="swiper-pagination" slot="pagination"></div>
      <!--<div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>-->
      <!--<div class="swiper-scrollbar" slot="scrollbar"></div>-->
    </swiper>

    <!-- 导航 -->
    <div class="industry">
      <div class="industry-item"><i class="icon icon-find"></i>基金从业</div>
      <div class="industry-item"><i class="icon icon-find"></i>银行从业</div>
      <div class="industry-item"><i class="icon icon-find"></i>证券从业</div>
      <div class="industry-item"><i class="icon icon-find"></i>会计从业</div>
      <div class="industry-item"><i class="icon icon-find"></i>注册会计师</div>
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
    // 获取广告列表
    created () {
      console.log(this.datas)
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
      .icon
        display block
        padding-bottom: 10px


</style>
