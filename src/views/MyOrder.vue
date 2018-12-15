<template>
  <div class="cart">
    <div class="bar1">
      <img class="logo" src="../assets/logo.png">
      <div class="back" @click="exit()">返回首页</div>
    </div>
    <div class="bar2">
      <div class="user-photo" :style="{backgroundImage: `url(${userInfo.avatar})`}"></div>
      <!-- <img class="user-photo" :src="userInfo.avatar"> -->
      <div class="user-message">
        <div class="Adm">
          <div class="user-name">{{userInfo.nickname}}</div>
          <!-- <div class="exit" @click="exit()">注销</div> -->
          
        </div>

        <div class="message">
          <div v-if="orders.lenght!=0" class="totalOrder">总订单数：{{this.orders.length}}笔</div>
          <div v-else class="totalOrder">总订单数：0 笔</div>
          <div class="divide-line"></div>
          <div class="unfinishedOrder">未完成订单数：{{userInfo.unfinishedCount}}笔</div>
          <div class="divide-line"></div>
          <div class="income">钱包余额：￥{{parseFloat(userInfo.balance).toFixed(2)}}</div>
          <div class="btn" @click="GoToUserInfoEditor()">编辑个人信息</div>
        </div>
      </div>
    </div>
    <div v-if="orders.lenght!=0" class="list" v-for="(item, index) in orders" :key="item.id">
      <!-- <img class="com-photo" src="../assets/commodity.jpg"> -->
      <img class="com-photo" :src="item.commodities[0].images[0].url">
      <div class="com-name">{{item.commodities[0].name}}</div>
      <div class="com-price">单价：
        ￥{{item.commodities[0].transactionValue}}
      </div>
      <div class="number-price">数量: {{item.commodities[0].number}}</div>
      <div class="buyer">总价：
        ￥{{item.commodities[0].transactionValue * item.commodities[0].number}}
      </div>

      <div class="btn1">
        <div v-if="item.state==='pending'">等待卖家发货</div>
        <div v-else>卖家已发货</div>
        <div class="click-btn" @click="checkOrder(index)">订单详情</div>
      </div>
    </div>
    <UserInfoEditorPanel @close1="close1" v-if="editor==true"></UserInfoEditorPanel>
    <OrderDetailPanel @close2="close2" v-if="detail===true" :item="selectedItem"></OrderDetailPanel>
  </div>
</template>

<script>
import UserInfoEditorPanel from "../components/UserInfoEditorPanel";
import OrderDetailPanel from "../components/OrderDetailPanel";
import ChangePage from "../components/ChangePage";
import urls from "@/apis/urls";
export default {
  name: "",
  components: {
    UserInfoEditorPanel,
    OrderDetailPanel
  },
  data() {
    return {
      editor: false,
      detail: false,
      selectedItem: {},
      unfinishedOrder: 0
    };
  },
  computed: {
    userInfo() {
      return this.$store.state.userInfo;
    },
    orders() {
      return this.$store.state.orders;
    }
  },
  async mounted() {
    const result = await this.axios({
      method: "get",
      url: urls.order(this.userInfo.id),
      params: {
        token: this.userInfo.token
      }
    });
    this.$store.commit("setOrderList", result.data.orders);
    for (let i = 0; i < this.orders.length; i++) {
      if (this.orders[i].state === "pending") {
        this.unfinishedOrder += 1;
      }
    }
    this.$store.commit('updateUnfinishedCount', this.unfinishedOrder)
  },
  methods: {
    exit() {
      this.$router.push({
        path: "/"
      });
    },
    GoToManageCommodity() {
      this.$router.push({
        path: "/CommodityManagement"
      });
    },
    GoToUserInfoEditor() {
      this.editor = true;
    },
    checkOrder(index) {
      this.detail = true;
      this.selectedItem = this.orders[index];
      console.log(this.selectedItem);
    },
    close1() {
      this.editor = false;
    },
    close2() {
      this.detail = false;
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
  background-position: center;
  background-size: cover;
  flex-shrink: 0;
  height: 120px;
  width: 120px;
  /* padding: 30px 10px 10px 10px; */
  margin-top: 20px;
  margin-left: 50px;
  margin-right: 20px;
  border-bottom: 2px;
  border-bottom-style: solid;
  border-bottom-color: rgba(255, 141, 26, 1);
}

.user-message {
  padding: 30px 0;
}

.Adm {
  display: flex;
}

.user-name {
  font-size: 22px;
  font-weight: bold;
  text-align: left;
  color: rgba(56, 56, 56, 1);
}

.exit {
  font-size: 14px;
  color: rgba(255, 141, 0, 1);
  text-decoration: underline;
  margin-top: 3px;
  margin-left: 12px;
}

.exit:hover {
  cursor: pointer;
}

.back {
  font-size: 24px;
  font-weight: bold;
  margin-right: 50px;
  margin-top: 50px;
  color: rgba(80, 80, 80, 1);
}

.back:hover {
  color: rgba(255, 195, 0, 1);
  transition-duration: 0.5s;
  text-decoration: underline;
  cursor: pointer;
}

.message {
  display: flex;
  text-align: left;
}

.totalOrder {
  font-size: 15px;
  margin-top: 30px;
  font-weight: bold;
  color: rgba(56, 56, 56, 1);
}

.divide-line {
  height: 80px;
  width: 1px;
  margin-left: 20px;
  background-color: rgba(128, 128, 128, 0.8);
}

.unfinishedOrder {
  font-size: 15px;
  margin-top: 30px;
  font-weight: bold;
  color: rgba(56, 56, 56, 1);
  margin-left: 20px;
}

.income {
  font-size: 15px;
  margin-top: 30px;
  font-weight: bold;
  color: rgba(56, 56, 56, 1);
  margin-left: 20px;
}

.btn {
  margin-top: 20px;
  margin-left: 40px;
  height: 40px;
  width: 120px;
  background-color: rgba(255, 195, 0, 1);
  border-radius: 2px;
  font-size: 16px;
  font-weight: bold;
  line-height: 40px;
  text-align: center;
}

.btn:hover {
  background-color: black;
  color: white;
  transition-duration: 0.8s;
  cursor: pointer;
}

.list {
  display: flex;
  margin: 30px 70px 0 70px;
  padding: 15px 0 15px 15px;
  background-color: rgba(229, 229, 229, 0.5);
  align-items: center;
  justify-content: space-around;
}

.com-photo {
  height: 85px;
  width: 85px;
  flex-shrink: 0;
}

.com-name {
  height: 40px;
  width: 120px;
  margin-left: 10px;
  flex-grow: 2;
  font-weight: bold;
  text-align: left;
}

.com-price {
  flex-grow: 1;
  line-height: 20px;
  font-weight: bold;
  text-align: left;
}

.number-price {
  flex-grow: 1;
  font-weight: bold;
  text-align: left;
}

.buyer {
  flex-grow: 1;
  font-weight: bold;
  text-align: left;
}

.btn1 {
  flex-grow: 1;
  font-weight: bold;
  text-align: left;
  font-size: 18px;
  line-height: 30px;
}

.click-btn:hover {
  color: rgba(255, 195, 0, 1);
  transition-duration: 0.5s;
  text-decoration: underline;
  cursor: pointer;
}
</style>
