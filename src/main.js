import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import 'iview/dist/styles/iview.css'
// import echarts from 'echarts'
// Vue.prototype.$echarts = echarts
Vue.config.productionTip = false

Vue.filter('formatMoney', (value) => {
  if (!value) return ''
  value = value / 100
  return value.toFixed(2)
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
