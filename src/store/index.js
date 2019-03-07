import Vue from 'vue'
import Vuex from 'vuex'
import IndexStore from './modules/index'
import userStore from './modules/user'
import locationStore from './modules/location'
import MonitorStore from './modules/monitor'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    //
  },
  mutations: {
    //
  },
  actions: {
    //
  },
  modules: {
    IndexStore,
    MonitorStore,
    userStore,
    locationStore
  }
})
