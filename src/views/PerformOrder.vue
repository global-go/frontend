<template>
<div class="submitorder">
    <div class="logo">
        <img src="../assets/logo.png" style="width:100%;height:100%;"/>
    </div>

    <div class="receiveInfo">
        <div>
            <div class="text1"> <h1 style="color:#505050;font-size:32px;">确认收货地址</h1> </div>
            <hr style="height:2px;width:100%;border:0px;background-color:#999999;color:#999999;margin-top:-1%;"/>
        </div>
        <div class="address">
            <div class="img1"><img src="../assets/address.svg" style="width:40px;height:40px;"/></div>
            <h2 style="color:#505050;font-size:25px;margin-top:0.5%;">寄送至</h2>
            <textarea v-model="add" placeholder="请输入您的地址..." style="width:50%;height:100%;margin-left:2%;"></textarea>
        </div>
        <div class="name_tel">
            <h2 style="color:#505050;font-size:25px;margin-top:0.5%;">收货人</h2>
            <input v-model="name" placeholder="请输入您的姓名" style="width:50%;height:100%;margin-left:2%;">
        </div>
        <div class="name_tel">
            <h2 style="color:#505050;font-size:25px;margin-top:0.5%;">电话</h2>
            <input v-model="tel" placeholder="请输入您的联系电话" style="width:50%;height:100%;margin-left:3.8%;">
        </div>
    </div>
 
    <div class="confirmOrder">
        <div>
            <div class="text1"> <h1 style="color:#505050;font-size:32px;">确认订单信息</h1> </div>
            <hr style="height:2px;width:100%;border:0px;background-color:#999999;color:#999999;margin-top:-1%;"/> 
        </div>
        <div class="order_detail">
            <div class="img2"><img src="../assets/commodity.jpg" style="width:100%;height:100%;"></div>
            <div class="box"><h2 style="color:#505050;font-size:25px;margin-left:5%;">商品名称如果很长的话会占两行</h2></div>
            <div class="box" style="margin-left:5%;">
                <h2 style="color:#505050;font-size:25px;margin-left:5%;">单价：</h2>
                <h2 style="color:#505050;font-size:25px;margin-left:-28%;margin-top:25%;">RMB 180.00</h2>
            </div>
            <div class="box">
                <h2 style="color:#505050;font-size:25px;margin-left:5%;">数量：</h2>
                <NumInput style="margin-top:25%;margin-left:-26%;"></NumInput>
            </div>
            <div class="box">
                <h2 style="color:#505050;font-size:25px;margin-left:5%;">总价：</h2>
                <h2 style="color:#505050;font-size:25px;margin-left:-28%;margin-top:25%;">RMB 180.00</h2>
            </div>
        </div>
    
        <div @click="ifcommit=true,message='订单提交成功'" :class="{'commit_order':ifcommit==false,'finish_commit':ifcommit==true}">
            <h3 style="font-size:20px;padding-top:16px;">{{message}}</h3>
        </div>
        <div class="return">
            <h3 @click="returnHome" style="color:#505050;font-size:18px;">返回首页</h3>
        </div>
    </div>

</div>
   
</template>

<script>
import NumInput from "../components/NumInput.vue";
export default {
  name: "SubmitOrder",
  components: { NumInput },
  data() {
    return {
      ifcommit: false,
      message: "提交订单"
    };
  },
  methods: {
    returnHome: function() {
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
}

.commit_order:hover {
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
}

.return {
  width: 7%;
  margin-left: 93%;
  margin-top: -0.5%;
}
</style>