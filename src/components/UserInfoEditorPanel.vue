<template>
  <div class="wrapper">
    <div class="mask" @click="close1"></div>
    <div class="content">
      <div class="box1">
        <div class="avatar" :style="{backgroundImage: `url(${userInfo.avatar})`}"></div>
        <UploadImg @returnUrl='updateAvatar'></UploadImg>
      </div>
      <div class="box2">
        <div class="text2">账号：{{userInfo.id}}</div>
        <div class="text2">
          <div>昵称:</div>
          <input
            placeholder="请输入新昵称..."
            v-model="nickname"
            style="width:150px;height:35px;margin-left:-2%;"
          >
        </div>
        <div class="text2">
          <div>密码：</div>
          <input
            placeholder="请输入新密码..."
            v-model="password"
            style="width:150px;height:35px;margin-left:-2%;"
          >
        </div>
        <div class="text2">账户余额：RMB {{userInfo.balance.toFixed(2)}}</div>
      </div>
      <div class="box3">
        <div class="confirm_modify" @click="modify">
          <!-- <img style="width:25px;height:25px;" src="../assets/OK.svg"/> -->
          确认修改
        </div>
      </div>
    </div>
  </div>
</template>



<script>
import urls from "@/apis/urls";
import UploadImg from "../components/UploadImg";
export default {
  name: "UserInfoEditorPanel",
  components: {
    UploadImg
  },
  data() {
    return {
      nickname: "",
      password: ""
    };
  },
  computed: {
    userInfo() {
      return this.$store.state.userInfo;
    }
  },
  methods: {
    close1() {
      this.$emit("close1");
    },
    async modify() {
      let nickname = "";
      if (this.nickname.trim() !== "" && this.password.trim() !== "") {
        const result = await this.axios({
          method: "put",
          url: urls.userModify(this.userInfo.id),
          data: {
            token: this.userInfo.token,
            userInfo: {
              nickname: this.nickname,
              password: this.password
            }
          }
        });
        this.$store.commit("modify", { nickname: result.data.user.nickname });
        this.$emit("close1");
      } else if (this.password.trim() !== "") {
        const result = await this.axios({
          method: "put",
          url: urls.userModify(this.userInfo.id),
          data: {
            token: this.userInfo.token,
            userInfo: {
              password: this.password
            }
          }
        });
        this.$emit("close1");
      } else if (this.nickname.trim() !== "") {
        const result = await this.axios({
          method: "put",
          url: urls.userModify(this.userInfo.id),
          data: {
            token: this.userInfo.token,
            userInfo: {
              nickname: this.nickname
            }
          }
        });
        this.$store.commit("modify", { nickname: result.data.user.nickname });
        this.$emit("close1");
      }
    },
    updateAvatar(image) {
      this.$store.commit("modifyAvatar", {avatar: image.url});
    }
  }
};
</script>


<style scoped>
.wrapper {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
}
.wrapper > .mask {
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.5);
  animation: fadeIn 0.5s ease 1 backwards;
}
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes slideIn {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0%);
  }
}
.content {
  position: absolute;
  overflow-y: auto;
  right: 0px;
  top: 0px;
  width: 25vw;
  height: 100vh;
  background-color: white;
  animation: slideIn 0.5s ease 1 backwards;
}
.box1 {
  background-color: #e5e5e5;
  width: 93%;
  margin-left: 7%;
  margin-top: 8%;
  text-align: left;
  padding-top: 1%;
  height: 30vh;
  display: flex;
}

.avatar {
  background-position: center;
  background-size: cover;
  height: 180px;
  width: 180px;
  margin-left: 8%;
  margin-top: 10%;
  margin-bottom: 10%;
}
.box2 {
  background-color: #e5e5e5;
  width: 93%;
  margin-left: 7%;
  margin-top: 8%;
  text-align: left;
  padding-top: 2%;
  height: 35vh;
}
.text1 {
  font-size: 20px;
  font-weight: bold;
  color: #505050;
  margin-top: 40%;
  margin-left: 5%;
}
.text1:hover {
  color: rgba(255, 141, 26, 1);
  transition-duration: 0.5s;
  text-decoration: underline;
  cursor: pointer;
}
.text2 {
  font-size: 25px;
  font-weight: bold;
  color: #505050;
  margin-top: 5%;
  margin-left: 5%;
  display: flex;
  align-items: center;
}
.box3 {
  height: 250px;
  width: 100%;
}
.confirm_modify {
  width: 200px;
  height: 70px;
  background-color: #ffc300;
  margin-top: 10%;
  margin-left: auto;
  margin-right: auto;
  font-size: 25px;
  color: black;
  font-weight: 600;
  line-height: 70px;
}
.confirm_modify:hover {
  background-color: black;
  color: white;
  transition-duration: 0.8s;
  cursor: pointer;
}
</style>