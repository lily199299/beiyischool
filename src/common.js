/* 存放URL */
const beiyi = 'http://bay-api.by-edu.com'
// const beiyi = 'http://192.168.0.122:8080'
export default {
  getUrl () {
    return beiyi
  },
// 获取url地址中指定参数的值
  getQueryString (name) {
    var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i')
    var r = window.location.search.substr(1).match(reg)
    if (r != null) return unescape(r[2])
    return null
  }
}

