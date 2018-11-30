<template>
  <div>
    <img class="logo" src="../assets/logo.png">
    <div class="box">
      <div class="show-pic"></div>
      <div class="login-wrapper">
        <div class="user-wrapper">
          <img src="../assets/user.svg" class="user">
          <input v-model="username" type="text" placeholder="请输入账号">
        </div>
        <div class="key-wrapper">
          <img src="../assets/key.svg" class="key">
          <input v-model="password" type="password" placeholder="请输入密码">
        </div>
        <div class="btn" :state="state" @click="login">登陆</div>
        <div class="link" @click="goToRegister()">没有账号？立即注册</div>
      </div>
    </div>
  </div>
</template>

<script>
import urls from '@/apis/urls'

export default {
  name: "",
  props: ["state"],
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    goToHome(){
      this.$store.commit('login')
      this.$router.push({
        path: "/"
      });
    },
    goToRegister() {
      this.$router.push({
        path: "/register"
      });
    },
    async login() {
      if (
        this.username.trim() === "" ||
        this.password.trim() === ""
      ) {
        alert("没有填写完整哦");
        return;
      }
      const result = await this.axios({
        method: "post",
        url: urls.login,
        data: {
          userID: this.username,
          password: this.password
        }
      });
      if (result.data.code === 0) {
        if (result.data.userInfo.type === 'user') {
          const data = result.data.userInfo
          data.token = result.data.token
          data.unfinishedCount = result.data.unfinishedCount
          this.$store.commit('login', data)
          this.$router.push({
            path: "/"
          });
        } else if (result.data.userInfo.type === 'admin') {
          this.$router.push({
            path: "/AdminHome"
          });
        }

      } else {
        alert('用户名或密码错误')
      }
    }
  }
};
</script>

<style scoped>
.logo {
  position: absolute;
  width: 350px;
  height: 141px;
  left: 50px;
  top: 50px;
}

.box {
  position: relative;
  height: 560px;
  width: 100%;
  background-color: rgba(229, 229, 229, 0.5);
  top: 250px;
  align-items: center;
  display: flex;
  justify-content: space-around;
}

.show-pic {
  position: relative;
  height: 400px;
  width: 45vw;
  margin-left: 80px;
  background-image: url("../assets/turn1.jpg");
  border-radius: 150px;
  overflow: hidden;
  background-size: 100%;
  display: inline;
}

.login-wrapper {
  display: inlie;
  height: 450px;
  width: 30vw;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 16px;
  margin-right: 110px;
  justify-content: center;
  align-content: center;
}

.user-wrapper {
  margin-top: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
}

input {
  display: inline-block;
  height: 45px;
  width: 16vw;
  background-color: rgba(229, 229, 229, 0.5);
  font-size: 20px;
  color: rgba(51, 51, 51, 1);
  margin-left: 5px;
}
.user {
  display: inline-block;
  height: 45px;
  width: 45px;
}

.key-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
}

.key {
  display: inline-block;
  height: 45px;
  width: 45px;
}

.btn {
  margin-top: 40px;
  height: 50px;
  width: 8vw;
  background-color: rgba(255, 195, 0, 1);
  border-radius: 18px;
  font-size: 24px;
  font-weight: bold;
  line-height: 50px;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
}

.btn:hover {
  background-color: black;
  color: white;
  transition-duration: 0.8s;
  cursor: pointer;
}

.link {
  margin-top: 20px;
  font-size: 16px;
  color: rgba(255, 141, 26, 1);
  text-decoration: underline;
}
.link:hover {
  cursor: pointer;
}
</style>