// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import VueRouter from 'vue-router'
import Vueresource from 'vue-resource'
import App from './App.vue'
import find from './components/find/find.vue'
import study from './components/study/study.vue'
import mine from './components/mine/mine.vue'
import tip from './components/tip/tip.vue'
import kaoqian from './components/kaoqian/kaoqian.vue'
import fangzhen from './components/fangzhen/fangzhen.vue'
import tupo from './components/tupo/tupo.vue'
import cuoti from './components/cuoti/cuoti.vue'
import zhuanjia from './components/zhuanjia/zhuanjia.vue'
import question from './components/question/question.vue'
import './common/stylus/index.styl'
import './common'

Vue.config.productionTip = false
// 轮播图
Vue.use(VueAwesomeSwiper)
// 路由
Vue.use(VueRouter)
// 数据请求
Vue.use(Vueresource)
// 空root组件
let Event = new Vue()
// 路由配置
const routes = [
  {path: '/find', component: find},
  {path: '/study', component: study},
  {path: '/mine', component: mine},
  {path: '/study/tip', component: tip},
  {path: '/study/kaoqian', component: kaoqian},
  {path: '/study/fangzhen', component: fangzhen},
  {path: '/study/tupo', component: tupo},
  {path: '/study/cuoti', component: cuoti},
  {path: '/study/zhuanjia', component: zhuanjia},
  {path: '/study/tip/question', component: question},
  {path: '/study/kaoqian/question', component: question},
  {path: '/study/fangzhen/question', component: question},
  {path: '/study/tupo/question', component: question},
  {path: '/study/cuoti/question', component: question},
  {path: '/study/zhuanjia/question', component: question}
]
const router = new VueRouter({
  linkActiveClass: 'active',
  routes: routes
})
/* eslint-disable no-new */
new Vue({
  el: '#myapp',
  components: {App},
  router
})
router.push('/find')
