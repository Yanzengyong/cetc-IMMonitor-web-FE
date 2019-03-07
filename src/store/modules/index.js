'use strict'
import axios from 'axios'
// import fetch from '../../tools/fetch'
// const IndexUrl = 'http://www.zhuminsheng.com/social/service/'
// const TestUrl = 'http://www.zhuminsheng.com/social_test/service/'
const BaseUrl = 'http://172.16.25.249:5000/'

const state = {
  qrCodePath: '',
  loginStatus: ''
}
const getters = {}
const mutations = {
  setToken (state, payload) {
    state.qrCodePath = payload
  },
  setLoginStatus (state, payload) {
    state.loginStatus = payload
  }
}
const actions = {
  // 获取登录二维码
  getQrcode ({ commit }, payload) {
    // let params = {
    //   queryType: payload.queryType,
    //   idcard: payload.idcard
    // }
    return new Promise((resolve, reject) => {
      axios({
        method: 'get',
        url: `${BaseUrl}wx/login/qrcode`,
        withCredentials: true
      }).then((e) => {
        commit('setToken', e.data.data.qrcode)
        resolve(e.data)
      })
    }
    )
  },
  // 检查是否登录接口
  getIsLogin ({ commit }, payload) {
    return new Promise((resolve, reject) => {
      axios({
        method: 'get',
        url: `${BaseUrl}wx/login/checklogin`,
        withCredentials: true
      }).then((e) => {
        commit('setLoginStatus', e.data.code)
        resolve(e.data)
      })
    })
  }
}
export default {
  state,
  getters,
  mutations,
  actions
}
