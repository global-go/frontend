<template>
    <div class="cart">
        <div class="bar1">
            <img class="logo" src="../assets/logo.png">
            <div class="form">
              <input type="text" placeholder="搜索用户...">
              <div class="search"></div>
            </div>
        </div>
        <div class="bar2">
            <img class="user-photo" src="../assets/photo.png">
            <div class="user-message">
                <div class="user-name">系统管理员</div>
                <div class="exit" @click="back()">退出</div>
            </div>
        </div>
        <table>
            <tr>
                <th>用户账号</th>
                <th>管理用户信息</th>
                <th>管理员权限设置</th>
                <th>删除该用户</th>
            </tr>
            <tr v-for="i in 16" :key="i">
                <td>233</td>
                <td class="click" @click="GoToDetail">查看</td>
                <td class="click" @click="content='取消管理员'">{{content}}</td>
                <td class="click">删除</td>
            </tr>
        </table>
        <ChangePage style="margin-top:50px"></ChangePage>
        <ModifyUserInfo @close="close" v-if="detail===true"></ModifyUserInfo>

    </div>
</template>

<script>
import ModifyUserInfo from "@/components/ModifyUserInfo.vue";
import ChangePage from "@/components/ChangePage.vue";
export default {
  name: "",
  components: {
      ModifyUserInfo,
      ChangePage
  },
  methods: {
    back() {
      this.$router.push({
        path: "/"
      });
    },
    GoToDetail() {
      this.detail = true;
    },
    close() {
      this.detail = false;
    }
  },
  data() {
      return{
        detail: false,
        content:"设置为管理员"
      }
  }
};
</script>

<style scoped>
.bar1 {
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.logo {
  height: 70px;

  width: 200px;
  margin-top: 20px;
  margin-left: 40px;
}

.bar2 {
  display: flex;
}

.user-photo {
  display: inline-block;
  height: 120px;
  width: 120px;
  padding: 30px 10px 10px 10px;
  margin-left: 5%;
  margin-right: 20px;
  border-bottom: 2px;
  border-bottom-style: solid;
  border-bottom-color: rgba(255, 141, 26, 1);
}

.user-message {
  padding: 30px 0;
  display: flex;
  margin-top: 40px;
}

.user-name {
  font-size: 24px;
  font-weight: bold;
  text-align: left;
  color: rgba(56, 56, 56, 1);
}

.exit {
  font-size: 15px;
  color: rgba(255, 141, 0, 1);
  text-decoration: underline;
  margin-top: 7px;
  margin-left: 12px;
}

.exit:hover {
  cursor: pointer;
}

table {
  margin-top: 30px;
  border-collapse: collapse;
  width: 90%;
  margin-left: auto;
  margin-right: auto;
}

table th,
table td {
  margin: 0;
  border: 0.5px solid #c6c6c6;
}

table tr:nth-child(odd) {
  background-color: #f0f0f0;
}

.click:hover {
  cursor: pointer;
  color: rgba(255, 141, 0, 1);
  text-decoration: underline;
}


.form {
  height: 50px;
  border-radius: 5px 0px 0px 5px;
  border: none;
  display: flex;
  justify-content: center;
  align-content: center;
  margin-top: 30px;
  margin-right: 80px;
}

input {
  width: 40vw;
  font-size: 20px;
  padding-left: 8px;
  border:1px solid rgb(229, 229, 229);
}

.search {
  width: 50px;
  height: 50px;
  background-color: rgba(229, 229, 229, 1);
  border-radius: 0px 5px 5px 0px;
  border: none;
  padding: 0;
  background-image: url("../assets/search.svg");
  display: inline-block;
  background-size: 100%;
}

.search:hover{
  cursor: pointer;
  background-color: rgba(255, 195, 0, 1);
  transition-duration: 0.8s;
}
</style>
