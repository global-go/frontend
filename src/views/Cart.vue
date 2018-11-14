<template>
    <div class="cart">
        <div class="bar1">
            <img class="logo" src="../assets/logo.png">
            <div class="back" @click="back()">返回首页</div>
        </div>
        <div class="bar2">
            <img class="user-photo" src="../assets/photo.png">
            <div class="user-message">
                <div class="user-name">用户A</div>
                <div class="message">
                    <div class="commodity">全部商品：10</div>
                    <div class="divide-line"></div>
                    <div class="money">钱包余额：12.00</div>
                </div>
            </div>
        </div>
        <div class="list" v-for="i in 3" :key="i">
            <img class="com-photo" src="../assets/commodity.jpg">
            <div class="com-name">商品名称很长的话就会占两行这样子</div>
            <div class="com-price">单价：<br/>RMB 180.00</div>
            <div class="com-number">数量：</div>
            <div class="total-price">总价：RMB 360.00</div>
            <div class="btn">
              <div class="click-btn">删除商品</div>
              <div class="click-btn">结算</div>
            </div>
            
        </div>

    </div>
</template>

<script>
export default {
  name: "",
  methods: {
    back() {
      this.$router.push({
        path: "/"
      });
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

.back {
  font-size: 24px;
  font-weight: bold;
  margin-right: 30px;
  margin-top: 50px;
  color: rgba(80, 80, 80, 1);
}

.back:hover {
  cursor: pointer;
}

.bar2 {
  display: flex;
}

.user-photo {
  display: inline-block;
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
  margin:30px 70px 0 70px;
  padding: 15px 0 15px 15px;
  background-color: rgba(229, 229, 229, 0.5);
  align-items: center;
  justify-content: space-around
}

.com-photo{
    height: 85px;
    width: 85px;
    flex-shrink: 0;

}

.com-name{
    height: 40px;
    width: 120px;
    margin-left: 10px;
    flex-grow: 1;
}

.com-price{
flex-grow: 2;
line-height: 20px;
}

.com-number{
flex-grow: 1;
}

.total-price{
flex-grow: 1;
}

.btn{
flex-grow: 1;
line-height: 25px;
}

.click-btn:hover{
  color: rgba(255, 195, 0, 1);
  transition-duration:0.5s;
  /* border-bottom:1px solid rgba(255, 195, 0, 1); */
  text-decoration: underline;

}

</style>
