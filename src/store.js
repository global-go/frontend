import Vue from 'vue'
import Vuex from 'vuex'

import moment from 'moment'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    commodities: [],
    orders: [],
    cart: [],
    users: [],
    loginState: false,
    userInfo: {},
    targetCommodity: {},
    adminOrders: {},
    adminCommodities: {}
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
    deleteCommodityInCart(state, payload) {
      state.cart.splice(payload.index, 1)
    },
    setOrderList(state, payload) {
      state.orders = payload
    },
    setAdminCommodityList(state, payload) {
      state.adminCommodities = payload
    },
    setAdminOrderList(state, payload) {
      state.adminOrders = payload
    },
    login(state, payload) {
      state.loginState = true
      payload.loginTime = moment().toISOString()
      state.userInfo = payload
      localStorage['loginToken'] = JSON.stringify(payload)
    },
    restoreLogin(state, payload) {
      state.loginState = true
      state.userInfo = payload
    },
    logout(state) {
      state.loginState = false
      localStorage['loginToken'] = ''
    },
    modify(state, payload) {
      state.userInfo.nickname = payload.nickname
      localStorage['loginToken'] = JSON.stringify(state.userInfo)
    },
    modifyAvatar(state, payload) {
      // Vue.set(this.state.userInfo,"avatar",payload.avatar)
      state.userInfo.avatar = payload.avatar
      localStorage['loginToken'] = JSON.stringify(state.userInfo)
    },
    modifyCommodity(state, payload) {
      Vue.set(this.state.commodities[payload.index], "commodity", payload.commodity)
    },
    changeTargetCount(state, payload) {
      state.targetCommodity.number = payload
    },
    deleteItem(state, payload) {
      state.commodities.splice(payload.index, 1)
    },
    setTargetCommodity(state, payload) {
      state.targetCommodity = payload
    },
    updateBalance(state, payload) {
      state.userInfo.balance = payload
      localStorage['loginToken'] = JSON.stringify(state.userInfo)
    },
    updateUnfinishedCount(state, payload) {
      state.userInfo.unfinishedCount = payload
      localStorage['loginToken'] = JSON.stringify(state.userInfo)
    }

  },
  actions: {

  }
})
