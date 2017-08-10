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
import chapter from './components/chapter/chapter.vue'
import './common/stylus/index.styl'
import './common'

Vue.config.productionTip = false
// 轮播图
Vue.use(VueAwesomeSwiper)
// 路由
Vue.use(VueRouter)
// 数据请求
Vue.use(Vueresource)
// 路由配置
const routes = [
  {path: '/find', component: find},
  {path: '/study', component: study},
  {path: '/mine', component: mine},
  {path: '/chapter', component: chapter}
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
