'use strict'
// import fetch from '../../tools/fetch'
// const IndexUrl = 'http://www.zhuminsheng.com/social/service/'
// const TestUrl = 'http://www.zhuminsheng.com/social_test/service/'

const state = {
  Progress: []
}
const getters = {}
const mutations = {
  setProgress (state, payload) {
    state.Progress = payload.data
  }
}
const actions = {
  // 获取制卡进度结果
  getProgress ({ commit }, payload) {
    // let params = {
    //   queryType: payload.queryType,
    //   idcard: payload.idcard
    // }
    return new Promise((resolve, reject) => {

    }
      // fetch.httpRequestPostHasUTF8(IndexUrl + 'CW03013', params, (responseData) => {
      //   if (responseData &&
      //     responseData.data &&
      //     responseData.data.head &&
      //     responseData.data.head.rtnCode === '000000' &&
      //     responseData.data.body) {
      //     commit({
      //       type: 'setProgress',
      //       data: responseData.data.body
      //     })
      //     resolve(responseData.data.body)
      //   } else {
      //     console.log('wo zou le')
      //     reject(responseData)
      //   }
      // })
    )
  }
}
export default {
  state,
  getters,
  mutations,
  actions
}
