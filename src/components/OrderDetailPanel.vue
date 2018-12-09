<template>
  <div class="wrapper">
    <div class="mask" @click="close"></div>
    <div class="content">
      <div class="box">
        <div class="text">订单序号：{{item.orderID}}</div>
        <div class="text">用户账号：{{this.userInfo.nickname}}</div>
        <div class="text">订单成交时间：<br>{{item.time}}</div>
      </div>
      <div class="box">
        <div class="text">配送地址：{{item.address}}</div>
        <div class="text">收件人：{{item.addressee}}</div>
        <div class="text">联系电话：{{item.contact}}</div>
      </div>
      <div class="box">
        <div class="text">商品编号：{{item.commodities[0].commodityID}}</div>
        <div class="text">商品数量：{{item.commodities[0].number}}</div>
        <div class="text">商品售价：￥ {{item.commodities[0].price}}</div>
      </div>
      <div class="box">
        <div class="text">销售总价格：￥ {{item.commodities[0].transactionValue}}</div>
      </div>
    </div>
  </div>
</template>



<script>
export default {
  name: "OrderDetailPanel",
  props: ["item"],
  computed: {
    userInfo() {
      return this.$store.state.userInfo;
    },
    orders() {
      return this.$store.state.orders;
    }
  },
  data() {
    return {};
  },
  methods: {
    close() {
      this.$emit("close2");
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
  width: 30vw;
  height: 100vh;
  background-color: white;
  animation: slideIn 0.5s ease 1 backwards;
}
.box {
  background-color: #e5e5e5;
  width: 93%;
  height: 30vh;
  margin-left: 7%;
  margin-top: 8%;
  text-align: left;
  padding-top: 1%;
}
.text {
  font-size: 22px;
  font-weight: bold;
  color: #505050;
  margin-top: 5%;
  margin-left: 5%;
}
</style>