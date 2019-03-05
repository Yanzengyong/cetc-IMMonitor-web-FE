import {
  setToken,
  getToken,
  setUserInfo,
  getUserInfo
} from '@/tools/util'

export default {
  state: {
    token: getToken(),
    info: getUserInfo()
  },
  mutations: {
    setInfo (state, info) {
      state.info = info
      setUserInfo(info)
    },
    setToken (state, token) {
      state.token = token
      setToken(token)
    }
  },
  actions: {
    // 退出登录
    handleLogOut ({
      commit
    }) {
      return new Promise((resolve) => {
        commit('setToken', '')
        commit('setInfo', '')
        resolve()
      })
    }
  }
}
