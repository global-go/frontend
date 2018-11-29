import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    commodities: [],
    loginState: false,
    userInfo: {}
  },
  mutations: {
    setCommodityList(state, payload) {
      state.commodities = payload
    },
    login(state, payload) {
      state.loginState = true
      state.userInfo = payload
    },
    logout(state) {
      state.loginState = false
    }

  },
  actions: {

  }
})
