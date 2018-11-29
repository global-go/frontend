import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import vueAxios from 'vue-axios'

Vue.config.productionTip = false

Vue.use(vueAxios, axios)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
