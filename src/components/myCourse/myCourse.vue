<template>
  <div>
    <!--缺省页面-->
    <div v-if="!hasCourse">
      <div style="margin-top: 100px;">
        <img src="../../common/img/nothing.png" alt="" style="display: block;margin: auto">
        <p style="margin-top: 20px;text-align: center;font-size: 16px;">您还没有购买课程</p>
      </div>
    </div>
    <div v-if="hasCourse">
      <loading v-show="showLoading"></loading>
      <div v-show="!showLoading">
        <div class="isLearning">
          <h1 class="title border-1px"><span style="padding-left: 16px;font-weight: 500;">在学课程</span></h1>
        </div>
        <ul class="isLearning-body">
          <li class="isLearning-item" v-for="(item, index) in courseLists" @click="backCourse(index)">
            <router-link :to="{ path: '/study', query: {coureId: this.coureId, patternTypes: this.patternTypes}}">
              <div class="isLearning-img"><img :src="item.img" alt="" width="100px" height="75px"></div>
              <div class="isLearning-title">{{item.name}}</div>
              <div class="isLearning-title" style="color: rgb(242,90,41);">已学30%</div>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Beiyi from '../../common.js'
  import Store from '../../store.js'
  import loading from '../../components/loading/loading.vue'
  export default {
    data () {
      return {
        courseLists: [],
        showLoading: false,
        hasCourse: true
      }
    },
    components: {loading},
    created () {
      this.showLoading = true
      this.patternTypes = Store.fetch('patternTypes')
      this.coureId = Store.fetch('courseId')
      this.user = Store.fetch('user')
      // http://bay-api.by-edu.com/course/list/{userId}
      this.$http.get(Beiyi.getUrl() + '/course/list/' + this.user.userId).then((res) => {
        this.showLoading = false
        console.log(res.body.data)
        this.courseLists = res.body.data
        Store.save('courseLists', this.courseLists)
        if (this.courseLists.length > 0) {
          this.hasCourse = true
        }
      })
    },
    methods: {
      backCourse (index) {
        console.log(index)
        Store.save('courseName', this.courseLists[index].name)
        Store.save('courseId', this.courseLists[index].id)
        this.$router.push({path: '/study'})
      }
    }
  }
</script>

<style lang="stylus" type="text/stylus" rel="stylesheet/stylus">
  .isLearning-body
    padding: 5px 16px 15px 16px;
    .isLearning-item
      a
        color: rgb(43,38,37)
      padding-bottom: 10px
      padding-top: 5px
      overflow: hidden
      border-bottom 1px solid #ddd
      .isLearning-img
        width: 27%
        float: left
        img
          vertical-align middle
          width: 100%
      .isLearning-title
        width: 70%
        margin-left: 3%
        line-height: 2
        float: left
        font-size: 14px

</style>
