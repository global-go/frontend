<template>
  <div class="submitorder">
    <div class="logo">
      <img src="../assets/logo.png" style="width:100%;height:100%;">
    </div>

    <div class="receiveInfo">
      <div>
        <div class="text1">
          <h1 style="color:#505050;font-size:32px;">确认收货地址</h1>
        </div>
        <hr
          style="height:2px;width:100%;border:0px;background-color:#999999;color:#999999;margin-top:-1%;"
        >
      </div>
      <div class="address">
        <div class="img1">
          <img src="../assets/address.svg" style="width:40px;height:40px;">
        </div>
        <h2 style="color:#505050;font-size:25px;margin-top:0.5%;">寄送至</h2>
        <textarea
          v-model="address"
          placeholder="请输入您的地址..."
          style="width:50%;height:100%;margin-left:2%;"
        ></textarea>
      </div>
      <div class="name_tel">
        <h2 style="color:#505050;font-size:25px;margin-top:0.5%;">收货人</h2>
        <input
          v-model="addressee"
          placeholder="请输入您的姓名"
          style="width:50%;height:100%;margin-left:2%;"
        >
      </div>
      <div class="name_tel">
        <h2 style="color:#505050;font-size:25px;margin-top:0.5%;">电话</h2>
        <input
          v-model="contact"
          placeholder="请输入您的联系电话"
          style="width:50%;height:100%;margin-left:3.8%;"
        >
      </div>
    </div>

    <div class="confirmOrder">
      <div>
        <div class="text1">
          <h1 style="color:#505050;font-size:32px;">确认订单信息</h1>
        </div>
        <hr
          style="height:2px;width:100%;border:0px;background-color:#999999;color:#999999;margin-top:-1%;"
        >
      </div>
      <div class="order_detail">
        <div class="img2">
          <img :src="this.targetCommodity.image.url" style="width:100%;height:100%;">
        </div>
        <div class="box">
          <h2 style="color:#505050;font-size:25px;margin-left:5%;">{{this.targetCommodity.name}}</h2>
        </div>
        <div class="box" style="margin-left:5%;">
          <h2 style="color:#505050;font-size:25px;margin-left:5%;">单价：</h2>
          <h2
            style="color:#505050;font-size:25px;margin-left:-28%;margin-top:25%;"
          >￥ {{this.targetCommodity.price}}</h2>
        </div>
        <div class="box">
          <h2 style="color:#505050;font-size:25px;margin-left:5%;">数量：</h2>
          <NumInput style="margin-top:25%;margin-left:-26%;"></NumInput>
        </div>
        <div class="box">
          <h2 style="color:#505050;font-size:25px;margin-left:5%;">总价：</h2>
          <h2
            style="color:#505050;font-size:25px;margin-left:-28%;margin-top:25%;"
          >￥ {{this.targetCommodity.price}}</h2>
        </div>
      </div>

      <div class="commit_order" @click="placeOrder">{{message}}</div>
      <div class="return">
        <h3 @click="returnHome" style="color:#505050;font-size:18px;">返回首页</h3>
      </div>
    </div>
  </div>
</template>

<script>
import NumInput from "../components/NumInput.vue";
import urls from "@/apis/urls";
export default {
  name: "PerfromOrder",
  components: { NumInput },
  computed: {
    userInfo() {
      return this.$store.state.userInfo;
    },
    targetCommodity() {
      return this.$store.state.targetCommodity;
    }
  },
  data() {
    return {
      address: "",
      addressee: "",
      contact: "",
      ifcommit: false,
      message: "提交订单"
    };
  },
  methods: {
    async placeOrder() {
      const result = await this.axios({
        method: "post",
        url: urls.order(this.userInfo.id),
        data: {
          token: this.userInfo.token,
          address: this.address,
          addressee: this.addressee,
          contact: this.contact,
          order: [
            {
              commodityID: this.targetCommodity.id,
              number: this.targetCommodity.number
            }
          ]
        }
      });
      this.userInfo.balance -=
        this.targetCommodity.price * this.targetCommodity.number;
      this.$store.commit("updateBalance", this.userInfo.balance);
      this.message = "订单提交成功";
    },
    returnHome() {
      this.$router.push({
        path: "/"
      });
    }
  }
};
</script>

<style scoped>
.submitorder {
  width: 100%;
}
.logo {
  width: 18%;
  height: 8%;
  margin-left: 2%;
  margin-top: 1%;
}
.receiveInfo {
  width: 90%;
  height: 350px;
  margin-left: 5%;
}
.text1 {
  display: flex;
}
.address {
  width: 100%;
  height: 30%;
  margin-top: 2%;
  display: flex;
}
.img1 {
  display: flex;
  margin-left: 4%;
}
.name_tel {
  width: 100%;
  height: 10%;
  display: flex;
  margin-left: 6.9%;
  margin-top: 2%;
}
.confirmOrder {
  width: 90%;
  height: 350px;
  margin-left: 5%;
  /* background-color:cornflowerblue; */
}
.order_detail {
  width: 100%;
  height: 55%;
  background-color: #e5e5e5;
  margin-top: 2%;
  display: flex;
}
.img2 {
  width: 11%;
  height: 80%;
  margin-top: 1.3%;
  margin-left: 1.8%;
}
.box {
  height: 70%;
  width: 22%;
  margin-top: 2%;
  display: flex;
  text-align: left;
}
.commit_order {
  width: 12%;
  height: 56px;
  background-color: #ffc300;
  border-radius: 10px 10px 10px 10px;
  margin-top: 1%;
  margin-left: 88%;
  color: #000000;
  font-size: 20px;
  line-height: 56px;
  font-weight: 600;
}
.commit_order:hover {
  cursor: pointer;
  background-color: black;
  color: white;
  transition-duration: 0.8s;
}
.finish_commit {
  width: 12%;
  height: 56px;
  border-radius: 10px 10px 10px 10px;
  margin-top: 1%;
  margin-left: 88%;
  color: #000000;
  background-color: white;
  line-height: 56px;
  font-size: 20px;
  font-weight: 600;
}
.return {
  width: 7%;
  margin-left: 93%;
  margin-top: -0.5%;
}
.return:hover {
  cursor: pointer;
}
</style>