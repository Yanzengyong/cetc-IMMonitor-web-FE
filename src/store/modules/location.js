
import {
  getLocation,
  setLocation
} from '@/tools/util'

export default {
  state: {
    location: getLocation()
  },
  mutations: {
    setLocation (state, location) {
      state.location = location
      setLocation(location)
    }
  },
  actions: {
    // 获取用户相关信息
    getLocation ({
      state
    }) {
      return state.location || false
    }
  }
}
