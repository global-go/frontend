<template>
<div>
  <img class="logo" src="../assets/logo.png">
  <div class="box">
    <div class="show-pic">
    </div>
    <div class="register-wrapper">
      <div class="user-wrapper">
        <img src="../assets/user.svg" class="user">
        <input type="text" placeholder="请输入账号">
      </div>
      <div class="key-wrapper">
        <img src="../assets/key.svg" class="key">
        <input type="text" placeholder="请输入密码">
      </div>
      <div class="makesure-wrapper">
        <img src="../assets/makesure.svg" class="makesure">
        <input type="text" placeholder="确认密码">

      </div>
      <div class="btn">
        <div class="btn1">
        注册
      </div>
      <div class="btn2">
        取消
      </div>
      </div>
      
      <div class="link" @click="goToLogin()">已有账号？立即登陆</div>

    </div>

  </div> 

</div>

   
</template>

<script>
export default {
  name: "",
  methods: {
    goToLogin() {
      this.$router.push({
        path: "/login"
      });
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
  /* margin-top: -50px; */
  background-image: url("../assets/turn1.jpg");
  border-radius: 150px;
  overflow: hidden;
  background-size: 100%;
  display: inline;
}

.register-wrapper {
  display: inlie;
  height: 450px;
  width: 35vw;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 16px;
  margin-right: 110px;
  justify-content: center;
  align-content: center;
}

.user-wrapper {
  margin-top: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
}

input {
  display: inline-block;
  height: 35px;
  width: 20vw;
  background-color: rgba(229, 229, 229, 0.5);
  font-size: 20px;
  color: rgba(51, 51, 51, 1);
  margin-left: 5px;
}
.user {
  display: inline-block;
  height: 35px;
  width: 45px;
}

.key-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
}

.key {
  display: inline-block;
  height: 35px;
  width: 45px;
}

.makesure-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
}

.makesure {
  display: inline-block;
  height: 35px;
  width: 45px;
}

.btn{
  display: flex;
  justify-content: space-around;
  margin-top: 30px;
}



.btn1 {
  
  height: 45px;
  width: 6vw;
  background-color: rgba(255, 195, 0, 1);
  border-radius: 10px;
  font-size: 16px;
  font-weight: bold;
  line-height: 45px;
  display: inline;
  margin-left: 100px;
  /* margin-left: auto;
  margin-right: auto; */
}

.btn1:hover{
  background-color: black;
  color: white;
  transition-duration: 0.8s;
  cursor: pointer;

}

.btn2 {
  height: 45px;
  width: 6vw;
  background-color: rgba(255, 195, 0, 1);
  border-radius: 10px;
  font-size: 16px;
  font-weight: bold;
  line-height: 45px;
  display: inline;
  margin-right: 50px;
  /* margin-left: auto;
  margin-right: auto; */
}

.btn2:hover{
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