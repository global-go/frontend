<template>
  <div class="cart">
    <div class="bar1">
      <img class="logo" src="../assets/logo.png">
      <div class="back" @click="back()">返回首页</div>
    </div>
    <div class="bar2">
      <!-- <img class="user-photo" src="../assets/photo.png"> -->
      <div class="user-photo" :style="{backgroundImage: `url(${userInfo.avatar})`}"></div>
      <div class="user-message">
        <div class="user-name">{{userInfo.nickname}}</div>
        <div class="message">
          <div class="commodity">全部商品：{{cart.length}}</div>
          <div class="divide-line"></div>
          <div class="money">钱包余额：￥{{parseFloat(userInfo.balance).toFixed(2)}}</div>
        </div>
      </div>
    </div>
    <div class="list" v-for="(item, index) in cart" :key="item">
      <img class="com-photo" :src="item.images[0].url">
      <div class="com-name">{{item.name}}</div>
      <div class="com-price">
        单价：
        ￥{{item.price}}
      </div>
      <div class="com-number">数量：
        <num-input
          @click="changeNumber(item)"
          style="margin-right:20px"
          :buy_number="buy_number"
          v-model="buy_number"
          :item="item"
          :index="index"
        ></num-input>
      </div>
      <div class="total-price">总价：￥{{buy_number*item.price}}</div>
      <div class="btn">
        <div class="click-btn" @click="deleteCommodity(index)">删除商品</div>
        <div class="click-btn" @click="placeOrder(item)">结算</div>
      </div>
    </div>
  </div>
</template>

<script>
import urls from "@/apis/urls";
import NumInput from "../components/NumInput.vue";
export default {
  name: "",
  data() {
    return {
      buy_number: 1
    };
  },
  components: { NumInput },
  computed: {
    userInfo() {
      return this.$store.state.userInfo;
    },
    cart() {
      return this.$store.state.cart;
    }
  },
  methods: {
    back() {
      this.$router.push({
        path: "/"
      });
    },
    async placeOrder(item) {
      this.$store.commit("setTargetCommodity", {
        id: item.commodityID,
        name: item.name,
        price: item.price,
        image: item.images[0],
        number: this.buy_number
      });
      this.$router.push({
        path: "/performOrder"
      });
      const result = await this.axios({
        method: "put",
        url: urls.cart(this.userInfo.id),
        data: {
          token: this.userInfo.token,
          commodityID: item.commodityID,
          number: 0
        }
      });
    },
    //TODO：商品数量变化还有bug
    async changeNumber(item) {
      const result = await this.axios({
        method: "put",
        url: urls.cart(this.userInfo.id),
        data: {
          token: this.userInfo.token,
          commodityID: item.commodityID,
          number: parseInt(this.buy_number)
        }
      });
    },
    async deleteCommodity(index) {
      const result = await this.axios({
        method: "put",
        url: urls.cart(this.userInfo.id),
        data: {
          token: this.userInfo.token,
          commodityID: this.cart[index].commodityID,
          number: 0
        }
      });
      this.$store.commit("deleteCommodityInCart", { index: index, number: 0 });
    }
  },
  async mounted() {
    const result = await this.axios({
      method: "get",
      url: urls.cart(this.userInfo.id),
      params: {
        token: this.userInfo.token
      }
    });
    this.$store.commit("setCartList", result.data.cart);
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

.bar2 {
  display: flex;
}

.user-photo {
  display: inline-block;
  background-position: center;
  background-size: cover;
  height: 120px;
  width: 120px;
  padding: 30px 10px 10px 10px;
  margin-left: 70px;
  margin-right: 20px;
  border-bottom: 2px;
  border-bottom-style: solid;
  border-bottom-color: rgba(255, 141, 26, 1);
}

.user-message {
  padding: 30px 0;
}

.user-name {
  font-size: 22px;
  font-weight: bold;
  text-align: left;
  color: rgba(56, 56, 56, 1);
}

.message {
  display: flex;
  text-align: left;
}

.commodity {
  font-size: 20px;
  margin-top: 20px;
  /* font-weight: bold; */
  color: rgba(56, 56, 56, 1);
}

.divide-line {
  height: 80px;
  width: 2px;
  margin-left: 40px;
  background-color: rgba(229, 229, 229, 0.8);
}

.money {
  font-size: 20px;
  /* font-weight: bold; */
  color: rgba(56, 56, 56, 1);
  margin-left: 40px;
  margin-top: 20px;
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
}

.com-price {
  flex-grow: 1;
  line-height: 20px;
  font-weight: bold;
}

.com-number {
  flex-grow: 1;
  font-weight: bold;
}

.total-price {
  flex-grow: 1;
  font-weight: bold;
}

.btn {
  flex-grow: 2;
  font-weight: bold;
  line-height: 25px;
}

.click-btn:hover {
  color: rgba(255, 195, 0, 1);
  transition-duration: 0.5s;
  cursor: pointer;
  text-decoration: underline;
}
</style>
