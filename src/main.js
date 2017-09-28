// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import VueRouter from 'vue-router'
import Vueresource from 'vue-resource'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import App from './App.vue'
import find from './components/find/find.vue'
import study from './components/study/study.vue'
import mine from './components/mine/mine.vue'
import tip from './components/tip/tip.vue'
import question from './components/question/question.vue'
import answerSheet from './components/answerSheet/answerSheet.vue'
import answerReport from './components/answerReport/answerReport.vue'
import questionAnalysis from './components/questionAnalysis/questionAnalysis.vue'
import login from './components/login/login.vue'
import myCourse from './components/myCourse/myCourse.vue'
import studyRecord from './components/studyRecord/studyRecord.vue'
import wrongCollection from './components/wrongCollection/wrongCollection.vue'
import setting from './components/setting/setting.vue'
import aboutUs from './components/aboutUs/aboutUs.vue'
import coupon from './components/coupon/coupon.vue'
import './common/stylus/index.styl'
import './common'
import employMore from './components/employMore/employMore.vue'
import setWechatTitle from './setWechatTitle.js'

Vue.config.productionTip = false
// 轮播图
Vue.use(VueAwesomeSwiper)
// 路由
Vue.use(VueRouter)
Vue.use(iView)
// 数据请求
Vue.use(Vueresource)
// 路由配置
const routes = [
  {path: '/find', component: find},
  {path: '/study', component: study},
  {path: '/mine', component: mine},
  {path: '/login', component: login},
  {path: '/find/employMore', component: employMore},
  {path: '/mine/myCourse', component: myCourse},
  {path: '/mine/setting', component: setting},
  {path: '/mine/setting/aboutUs', component: aboutUs},
  {path: '/mine/coupon', component: coupon},
  {path: '/mine/studyRecord', component: studyRecord},
  {path: '/mine/wrongCollection', component: wrongCollection},
  {path: '/study/tip', component: tip},
  {path: '/study/tip/question', component: question},
  {path: '/study/tip/question/answerSheet', component: answerSheet},
  {path: '/study/tip/question/answerReport', component: answerReport},
  {path: '/study/tip/question/questionAnalysis', component: questionAnalysis}
]
const router = new VueRouter({
  linkActiveClass: 'active',
  routes: routes
})
// router.map({
//   find: {name: 'find', title: '发现', path: '/find', component: find},
//   study: {name: 'study', title: '学习', component: study},
//   mine: {name: 'mine', title: '我的', component: mine}
// })
// router.afterEach((transition) => {
//   let title = transition.to.title + '-Custom-Suffix'
//   setWechatTitle(title)
// })
/* eslint-disable no-new */
new Vue({
  el: '#myapp',
  components: {App},
  router
})
router.push('/find')

