/* 存放URL */
const beiyi = 'http://bay-api.by-edu.com'
// const beiyi = 'http://manage.by-edu.com'
// const beiyi = 'http://192.168.0.174:8080'
export default {
  getUrl () {
    return beiyi
  },
// 获取url地址中指定参数的值
  getQueryString (name) {
    // 获取参数
    var url = window.location.search
    // 正则筛选地址栏
    var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)')
    // 匹配目标参数
    var result = url.substr(1).match(reg)
    // 返回参数值
    return result ? decodeURIComponent(result[2]) : null
  },
  // 重写浏览器返回事件
  // 禁止返回部分
  forbidBack () {
    history.pushState(null, null, document.URL)
    window.addEventListener('popstate', function () {
      history.pushState(null, null, document.URL)
    })
  }
}

