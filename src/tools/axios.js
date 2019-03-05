// import Axios from 'axios'
// import {getToken} from './util'
// import Cookies from 'js-cookie'
// const baseURL = 'http://118.24.87.233:8089'
// class httpRequest {
//   constructor () {
//     this.options = {
//       method: '',
//       url: ''
//     }
//     // 存储请求队列
//     this.queue = {}
//   }
//   // 销毁请求实例
//   destroy (url) {
//     delete this.queue[url]
//     const queue = Object.keys(this.queue)
//     return queue.length
//   }
//   // 请求拦截
//   interceptors (instance, url) {
//     // 添加响应拦截器
//     instance.interceptors.response.use((res) => {
//       let { data } = res
//       const is = this.destroy(url)
//       if (!is) {
//         setTimeout(() => {
//         }, 500)
//       }
//       if (data.state !== 'success') {
//         if (data.code == 1200 || data.code == 1201||data.msg == '用户身份认证失败') {
//          Cookies.remove('token')
//           Toast('未登录，或登录失效，请登录')
//           window.location.href = window.location.host + '/login'
//         } else {
//           if (data.msg) Toast.fail(data.msg)
//         }
//       }else{
//         return data
//       }
//     }, () => {
//       Toast.fail('服务内部错误')
//     })
//   }
//   // 创建实例
//   create () {
//     let conf = {
//       baseURL: baseURL,
//       // withCredentials: true,
//       headers: {
//         'Content-Type': 'application/json'
//       },
//     }
//     return Axios.create(conf)
//   }
//   // 合并请求实例
//   mergeReqest (instances = []) {
//     //
//   }
//   // 请求实例
//   request (options) {
//     let instance = this.create()
//     this.interceptors(instance, options.url)
//     if (options.method === 'delete') {
//       options.params = options.data
//     }
//     // user/order 接口query params 携带token
//     if(options.url.indexOf('user/')!=-1||options.url.indexOf('order/')!=-1||options.url.indexOf('wallet/')!=-1||options.url.indexOf('evaluate/')!=-1){
//       let token = getToken()
//       if(!options.params) options.params = {}
//       if(token){
//         options.params.token = token
//       }
//     }
//     options = Object.assign({}, options)
//     this.queue[options.url] = instance
//     return instance(options)
//   }
// }
// export default httpRequest
