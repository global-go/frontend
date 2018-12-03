 <template>
  <div class="wrapper">
    <div class="mask" @click="close"></div>
    <div class="content">
      <div class="img_detail">
        <div class="img_box_bg">
          <div class="img_box">
            <div class="imgs" v-for="img in images" :key="img"></div>
            <!-- <div class="img_text">请上传商品图片</div> -->
            <!-- <div class="img"></div> -->
            <UploadImg @returnUrl="updateCommodity"></UploadImg>
          </div>
        </div>

        <div class="detail">
          <div class="r_line"></div>
          <div class="c_line"></div>
          <div class="edit_name">
            <textarea v-model="name" placeholder="请输入商品名称" style="width:350px;height:150px;"></textarea>
          </div>
          <div class="v_line"></div>
          <div class="text_box">
            <div class="text1">
              售价：RMB
              <input
                v-model="price"
                placeholder="请输入商品价格"
                style="width:150px;height:30px;margin-left:5%;"
              >
            </div>
            <div class="text1">
              库存:
              <input
                v-model="stock"
                placeholder="请输入商品库存"
                style="width:150px;height:30px;margin-left:5%;"
              >
            </div>
            <div class="text1">
              商品类别:
              <select v-model="category" style="width:200px;height:30px;margin-left:5%;">
                <option>-请选择商品类别-</option>
                <option>服装</option>
                <option>配饰</option>
                <option>美妆护肤</option>
                <option>鞋子</option>
                <option>其他</option>
              </select>
            </div>
          </div>
          <div class="buttons">
            <div class="button1" @click="Added">上架商品</div>
          </div>
        </div>
      </div>

      <div class="text2">
        <div class="title">
          <h1 style="color:#383838;font-size:35px;text-align:center; ">编辑商品详情</h1>
        </div>
        <div class="paragraph">
          <textarea
            v-model="description"
            placeholder="请输入商品详情..."
            style="width:90%;height:400px;margin-top:3%;"
          ></textarea>
        </div>
      </div>
    </div>
  </div>
</template>



<script>
import NumInput from "../components/NumInput.vue";
import UploadImg from "../components/UploadImg";
import urls from "@/apis/urls";
export default {
  name: "CommodityDetailPanel",
  components: { NumInput, UploadImg },
  props: ["goods_id"],
  computed: {
    userInfo() {
      return this.$store.state.userInfo;
    },
    commodities() {
      return this.$store.state.commodities;
    }
  },
  data() {
    return {
      price: "",
      images: [],
      name: "",
      stock: "",
      description: "",
      category: ""
    };
  },
  methods: {
    handleReduce: function() {
      if (this.buy_number > 0) this.buy_number--;
    },
    handleAdd: function() {
      if (this.inventory > this.buy_number) this.buy_number++;
    },
    addToCart: function() {
      console.log("加入购物车");
      this.$router.push({
        path: "/cart"
      });
    },
    handleLeft: function() {
      console.log("left");
    },
    handleRight: function() {
      console.log("right");
    },
    close() {
      this.$emit("close");
    },
    async Added() {
      // let commodity = {};
      if (
        this.name.trim() === "" ||
        this.category.trim() === "" ||
        this.price.trim() === "" ||
        this.stock.trim() === "" ||
        this.descripion.trim() === "" ||
        this.images.length == 0
      ) {
        alert("没有填写完整商品信息哦");
        return;
      }
      const result = await this.axios({
        method: "post",
        url: urls.putaway,
        data: {
          token: this.userInfo.token,
          name: this.name,
          category: this.category,
          price: parseFloat(this.price),
          stock: parseInt(this.stock),
          description: this.description,
          images: this.images
        }
      });
      this.$store.commit("setCommodityList", result.data.commodity);
    },
    updateCommodity(data) {
      this.images.push(data);
      console.log(images);
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
  display: flex;
}
.img_box_bg {
  width: 600px;
  height: 600px;
  background-color: #ffc300;
  margin-left: 40px;
  margin-top: 40px;
  align-items: center;
  justify-content: center;
  display: flex;
}
.img_box {
  width: 570px;
  height: 570px;
  background-color: white;
}
.img_text {
  color: black;
  font-size: 25px;
  text-align: left;
  margin-left: 7%;
  margin-top: 5%;
}
.imgs {
  width: 90%;
  height: 80%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 5%;
}
.img {
  width: 100px;
  height: 100px;
  border: 1px solid #cccccc;
  margin-left: 5%;
}
.detail {
  display: inline-block;
  vertical-align: top;
}
.r_line {
  width: 500px;
  height: 3px;
  background-color: #ff8d1a;
  margin-left: 2%;
  margin-top: 70px;
}
.c_line {
  width: 3px;
  height: 500px;
  background-color: #ffc300;
  margin-left: 5%;
  margin-top: -5%;
}
.edit_name {
  margin-left: -5%;
  margin-top: -90%;
}
.v_line {
  width: 300px;
  height: 2px;
  background-color: #ff8d1a;
  margin-left: 40%;
  margin-top: 3%;
}
.text_box {
  width: 400px;
  text-align: left;
  margin-left: 10%;
  margin-top: 2%;
}
.text1 {
  margin-top: 5%;
  color: #505050;
  font-size: 25px;
}
.price {
  font-size: 50px;
  color: #ff8d1a;
  font-weight: 700;
  margin-left: 15%;
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
  text-align: center;
}
.button1 {
  background-color: #ff8d1a;
  width: 320px;
  height: 60px;
  color: #ffffff;
  font-size: 25px;
  font-weight: 700;
  line-height: 60px;
}
.button1:hover {
  background-color: black;
  transition-duration: 0.8s;
  color: #ffc300;
}
.button2 {
  background-color: #ff8d1a;
  width: 320px;
  height: 60px;
  color: #ffffff;
  font-size: 25px;
  font-weight: 700;
  line-height: 60px;
  margin-top: 5%;
}
.button2:hover {
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
  height: 500px;
  background-color: #e5e5e5;
  margin-top: -1.3%;
}
</style>           