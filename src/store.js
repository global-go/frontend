import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    commodities: [],
    loginState: false
  },
  mutations: {
    setCommodityList(state, payload) {
      state.commodities = payload;
    },
    login(state) {
      state.loginState = true
    },
    logout(state) {
      state.loginState = false
    }

  },
  actions: {

  }
})
