<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import moment from 'moment'

export default {
  beforeMount() {
    const loginToken = localStorage['loginToken']
    if (loginToken) {
      const loginObj = JSON.parse(loginToken)
      if (!moment(loginObj.loginTime).add(12, 'hour').isBefore(moment())) {
        this.$store.commit('restoreLogin', loginObj)
      } else {
        localStorage['loginToken'] = ''
      }
    }
  }
}
</script>

<style>
body {
  margin: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
