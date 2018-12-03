import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    commodities: [],
    users: [],
    loginState: false,
    userInfo: {}
  },
  mutations: {
    setCommodityList(state, payload) {
      state.commodities.push(payload)
    },
    setUserList(state,payload){
      state.users = payload
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

  },
  actions: {

  }
})
