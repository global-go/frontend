import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    commodities: [],
    cart: [],
    users: [],
    loginState: false,
    userInfo: {}
  },
  mutations: {
    initCommodityList(state, payload) {
      state.commodities = payload
    },
    setCommodityList(state, payload) {
      state.commodities.splice(0, 0, payload)
    },
    setUserList(state, payload) {
      state.users = payload
    },
    setCartList(state, payload) {
      state.cart = payload
    },
    login(state, payload) {
      state.loginState = true
      state.userInfo = payload
    },
    logout(state) {
      state.loginState = false
    },
    modify(state, payload) {
      state.userInfo.nickname = payload.nickname
    },
    modifyAvatar(state, payload) {
      // Vue.set(this.state.userInfo,"avatar",payload.avatar)
      state.userInfo.avatar = payload.avatar
    },
    modifyCommodity(state, payload) {
      Vue.set(this.state.commodities[payload.index], "commodity", payload.commodity)
    },
    deleteItem(state, payload) {
      state.commodities.splice(payload.index, 1)
    }

  },
  actions: {

  }
})
