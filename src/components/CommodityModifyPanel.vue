 <template>
  <div class="wrapper">
    <div class="mask" @click="close"></div>
    <div class="content">
      <div class="img_detail">
        <div class="img_box_bg">
          <div class="img_box">
            <UploadImg @returnUrl="updateCommodity"></UploadImg>
            <img class="img" v-for="img in images" :key="img.id" :src="img.url">
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
              售价：￥
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
              <select v-model="selected" style="width:200px;height:30px;margin-left:5%;">
                <option disabled value>-请选择商品类别-</option>
                <option
                  v-for="option in options"
                  :key="option.value"
                  v-bind:value="option.value"
                >{{option.text}}</option>
              </select>
            </div>
          </div>
          <div class="buttons">
            <div class="button1" @click="modify(index)">修改商品</div>
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
import UploadImg from "../components/UploadImg";
import urls from "@/apis/urls";
export default {
  name: "CommodityModifyPanel",
  components: { UploadImg },
  props: ["item","index"],
  computed: {
    userInfo() {
      return this.$store.state.userInfo;
    }
  },
  data() {
    return {
      price: this.item.price,
      images: this.item.images,
      name: this.item.name,
      stock: this.item.stock,
      description: this.item.description,
      category: this.item.category,
      selected: "",
      options: [
        { text: "服装", value: "A" },
        { text: "配饰", value: "B" },
        { text: "美妆护肤", value: "C" },
        { text: "鞋子", value: "D" },
        { text: "其他", value: "E" }
      ]
    };
  },
  methods: {
    close() {
      this.$emit("close");
    },
    async modify(index) {
      if (this.selected === "A") {
        this.category = "服装";
      } else if (this.selected === "B") {
        this.category = "配饰";
      } else if (this.selected === "C") {
        this.category = "美妆护肤";
      } else if (this.selected === "D") {
        this.category = "鞋子";
      } else if (this.selected === "E") {
        this.category = "其他";
      }
      // } else {
      //   alert("没有选择商品类别哦");
      //   return;
      // }
      const result = await this.axios({
        method: "put",
        url: urls.commodityModify(this.item.id),
        data: {
          token: this.userInfo.token,
          name: this.name,
          category: this.category,
          price: parseFloat(this.price),
          stock: parseInt(this.stock),
          description: this.description,
          images: this.images.map(v => v.id)
        }
      });
      this.$store.commit("modifyCommodity", {
        commodity: result.data.commodity,
        index: index
      });
      this.close();
    },
    updateCommodity(image) {
      this.images.splice(0, 0, image);
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

.img {
  height: 200px;
  border: 10px solid white;
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