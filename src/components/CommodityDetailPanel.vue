<template>
  <div class="wrapper">
    <div class="mask" @click="close"></div>
    <div class="content">
      <div class="img_detail">
        <div class="img">
          <div class="goods_img">
            <img :src="item.images[0].url" style="width: 600px;height: 600px;">
          </div>
          <div class="four_imgs_box">
            <div>
              <img src="../assets/left2.svg" style=" width:50px; height:150px;">
            </div>
            <div class="four_imgs">
              <div v-for="(image, index) in item.images" :key="index">
                <img :src="image.url" style="width:125px;height:125px;">
              </div>
            </div>
            <div>
              <img src="../assets/right2.svg" style=" width:50px; height:150px; ">
            </div>
          </div>
        </div>

        <div class="detail">
          <div class="r_line"></div>
          <div class="c_line"></div>
          <div class="name">{{item.name}}</div>
          <div class="v_line"></div>
          <div class="text_box">
            <div class="text1">售价：</div>
            <div class="price">￥{{item.price.toFixed(2)}}</div>
            <div class="text1">库存: {{item.stock}} 件</div>
            <div class="text1">销量: {{0}} 件</div>
            <div class="text1">数量:</div>
            <num-input
              style="margin-top:-8%;margin-left:20%;"
              :buy_number="buy_number"
              v-model="buy_number"
            ></num-input>
          </div>
          <div class="buttons">
            <div class="button" @click="buyItNow">
              <img style="width:25px;height:25px;margin:auto" src="../assets/OK.svg">
              立即购买
            </div>
            <div class="button" @click="addToCart" style="margin-top:5%;">
              <img style="width:25px;height:25px;" src="../assets/shopping-cart.svg">
              加入购物车
            </div>
          </div>
        </div>
      </div>
      <div class="text2">
        <div class="title">
          <h1 style="color:#383838;font-size:35px;text-align:center; ">商品详情</h1>
        </div>
        <div class="paragraph">
          <p>{{item.description}}</p>
        </div>
      </div>
    </div>
  </div>
</template>



<script>
import NumInput from "../components/NumInput.vue";
import urls from "@/apis/urls";
export default {
  name: "CommodityDetailPanel",
  components: { "num-input": NumInput },
  props: ["item"],
  data() {
    return {
      buy_number: 1
    };
  },
  computed: {
    userInfo() {
      return this.$store.state.userInfo;
    }
  },
  methods: {
    // handleReduce: function() {
    //   if (this.buy_number > 0) this.buy_number--;
    // },
    // handleAdd: function() {
    //   if (this.inventory > this.buy_number) this.buy_number++;
    // },

    buyItNow: function() {
      this.$router.push({
        path: "/performOrder"
      });
    },
    async addToCart() {
      const result = await this.axios({
        method: "put",
        url: urls.cart(this.userInfo.id),
        data: {
          token: this.userInfo.token,
          commodityID: this.item.id,
          number: parseInt(this.buy_number)
        }
      });
      this.$router.push({
        path: "/cart"
      });
    },

    close() {
      this.$emit("close");
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
  width: 80vw;
  height: 100vh;
  background-color: white;
  animation: slideIn 0.5s ease 1 backwards;
}
.img_detail {
  display: inline;
}
.img {
  display: inline-block;
  vertical-align: top;
}
.goods_img {
  margin-top: 40px;
  margin-left: 40px;
}
.four_imgs_box {
  background-color: #ffc300;
  width: 655px;
  height: 160px;
  margin-left: 2%;
  margin-top: 2%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.four_imgs {
  width: 560px;
  height: 150px;
  background-color: white;
  display: flex;
  justify-content: space-around;
  align-items: center;
  /* position: absolute;
  display: flex;
  justify-content: space-around;
  margin-top: -8.7%;
  margin-left: 3.2%;
  text-align: center; */
}
.detail {
  display: inline-block;
  vertical-align: top;
}
.r_line {
  width: 500px;
  height: 3px;
  background-color: #ff8d1a;
  margin-top: 70px;
}
.c_line {
  width: 3px;
  height: 500px;
  background-color: #ffc300;
  margin-left: 5%;
  margin-top: -5%;
}
.v_line {
  width: 300px;
  height: 2px;
  background-color: #ff8d1a;
  margin-left: 40%;
  margin-top: 2%;
}
.text_box {
  width: 400px;
  text-align: left;
  margin-left: 10%;
  margin-top: 2%;
}
.text1 {
  margin-top: 2%;
  color: #505050;
  font-size: 25px;
}
.price {
  font-size: 50px;
  color: #ff8d1a;
  font-weight: 700;
  margin-left: 15%;
}
.name {
  margin-left: 10%;
  width: 450px;
  font-size: 45px;
  font-weight: bold;
  margin-top: -90%;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  flex-basis: 0%;
}
.changeNum {
  background-color: #ffc300;
  width: 150px;
  height: 40px;
  margin-left: 27%;
  margin-top: -12%;
}
.buyNum {
  width: 80px;
  height: 35px;
  background-color: white;
  text-align: center;
  margin-top: -44%;
  margin-left: 20%;
}
.buttons {
  margin-top: 11%;
  margin-left: 22%;
}
.button {
  background-color: #ff8d1a;
  width: 320px;
  height: 60px;
  color: #ffffff;
  font-size: 25px;
  font-weight: 700;
  line-height: 60px;
  align-items: center;
}
.button:hover {
  background-color: black;
  transition-duration: 0.8s;
  color: #ffc300;
}
.text2 {
  width: 100%;
}
.title {
  width: 30%;
  height: 70px;
  background-color: #e5e5e5;
  margin-left: 70%;
  margin-top: -5%;
  border-radius: 20px 20px 0 0;
}
.paragraph {
  width: 100%;
  background-color: #e5e5e5;
  margin-top: -1.3%;
}
</style>