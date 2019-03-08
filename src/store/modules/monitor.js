'use strict'
import axios from 'axios'
// import fetch from '../../tools/fetch'
// const IndexUrl = 'http://www.zhuminsheng.com/social/service/'
// const TestUrl = 'http://www.zhuminsheng.com/social_test/service/'
const BaseUrl = 'http://172.16.25.249:5000/'

const state = {
  uin: null,
  username: null,
  nicname: null,
  headimgurl: null,
  GroupList: []
}
const getters = {
  groupList: (state) => state.GroupList
}
const mutations = {
  setUin (state, payload) {
    state.uin = payload
  },
  setUserName (state, payload) {
    state.username = payload
  },
  setNicName (state, payload) {
    state.nicname = payload
  },
  setHeadImgUrl (state, payload) {
    state.headimgurl = payload
  },
  setGroupList (state, payload) {
    state.GroupList = payload
  }
}
const actions = {
  // 初始化个人信息
  wxInit ({ commit }, payload) {
    return new Promise((resolve, reject) => {
      axios({
        method: 'get',
        url: `${BaseUrl}wx/login/init`,
        withCredentials: true
      }).then((e) => {
        if (e && e.data && e.data.data) {
          commit('setUin', e.data.data.uin)
          commit('setUserName', e.data.data.UserName)
          commit('setNicName', e.data.data.NickName)
          commit('setHeadImgUrl', e.data.data.HeadImgUrl)
        }
        resolve(e.data)
      })
    }
    )
  },
  // 获取群信息
  getGroupContact ({ commit }, payload) {
    return new Promise((resolve, reject) => {
      axios({
        method: 'get',
        url: `${BaseUrl}wx/contact/get_group_contact`,
        withCredentials: true
      }).then((e) => {
        if (e && e.data && e.data.code === 200) {
          commit('setGroupList', e.data.data)
        }
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
