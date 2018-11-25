import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    commodities: []
  },
  mutations: {
    setCommodityList(state, payload) {
      state.commodities = payload;
    }
  },
  actions: {

  }
})
