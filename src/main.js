// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import VueRouter from 'vue-router'
import App from './App'
import find from './components/find/find.vue'
import study from './components/study/study.vue'
import mine from './components/mine/mine.vue'
import './common/stylus/index.styl'
Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper)
Vue.use(VueRouter)
const routes = [
  {path: '/find', component: find},
  {path: '/study', component: study},
  {path: '/mine', component: mine}
]
const router = new VueRouter({
  linkActiveClass: 'active',
  routes: routes
})
/* eslint-disable no-new */
new Vue({
  el: '#myapp',
  components: { App },
  router
})
router.push('/find')
