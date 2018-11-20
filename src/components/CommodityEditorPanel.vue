 <template>
    <div class="wrapper">
    <div class="mask" @click="close"></div>
    <div class="content">
      <div class="img_detail">

        <div class="img_box_bg">
            <div class="img_box">
                <div class="img_text">请上传商品图片</div>
                <div class="imgs">
                    <div class="img"></div>
                </div>
            </div>  
        </div>
              
        <div class="detail">
          <div class="r_line"></div>
          <div class="c_line"></div>
          <div class="edit_name"><textarea v-model="add" placeholder="请输入商品名称" style="width:350px;height:150px;"></textarea></div>
          <div class="v_line"></div>
          <div class="text_box">
              <div class="text1">售价：RMB
                  <input v-model="name" placeholder="请输入商品价格" style="width:150px;height:30px;margin-left:5%;">
              </div>          
              <div class="text1">库存:
                  <input v-model="name" placeholder="请输入商品库存" style="width:150px;height:30px;margin-left:5%;">
              </div>
              <div class="text1">商品类别:
                  <select style="width:200px;height:30px;margin-left:5%;">
                      <option>-请选择商品类别-</option>
                      <option>食品</option>
                      <option>衣服</option>
                  </select>
              </div>                         
          </div>
          <div class="buttons" >
              <div class="button1" @click="buyItNow" >上架商品</div>
          </div>
        </div>

      </div>

      <div class="text2">
          <div class="title">
              <h1 style="color:#383838;font-size:35px;text-align:center; " >编辑商品详情</h1>
          </div>
          <div class="paragraph">
              <textarea placeholder="请输入商品详情..." style="width:90%;height:400px;margin-top:3%;"></textarea>                
          </div>
        </div>
      </div>
      
    </div>
</template>



<script>
import NumInput from "../components/NumInput.vue" 
export default {
  name: "CommodityDetailPanel",
  components:{NumInput},
  props: ["goods_id"],
  data() {
    return {
      price: "RMB 180.00",
      inventory: 5,
      sales_number: 10,
      buy_number: 0,
      descripion:
        "  多肉植物（succulent plant）是指植物的根、茎、叶三种营养器官中至少有一种是肥厚多汁并且具备储藏大量水分功能的植物。其至少具有一种肉质组织，这种组织是一种活组织，除其他功能外，它能储藏可利用的水，在土壤含水状况恶化、植物根系不能再从土壤中吸收和提供必要的水分时，它能使植物暂时脱离外界水分供应而独立生存。 [1]  据粗略统计，全世界共有多肉植物一万余种，在分类上隶属100余科。" +
        "\n" +
        "  多肉植物（包括仙人掌类）中有不少种类具药用成分。例如，人们会选用刺少肉厚的仙人掌属植物茎片去皮捣烂后外敷,能治痈疖等皮肤病，该属中的金武扇和宝剑掌也对腮腺炎有明显的疗效。一种球形仙人掌——乌羽玉的茎和粗大肉质根都含有一种称为墨斯卡灵的生物碱，具致幻麻醉作用。墨西哥的印第安人在举行宗教仪式时，常边喝用龙舌兰酿制的蒲儿甘酒，边食用乌羽玉（当地人称为‘peyote’）在这种彻夜狂欢中，乌羽玉的消耗非常惊人。他们似乎也很懂得保护资源，在采集这种植物时从不连根挖而是用刀贴地割取，这样土中的肉质根能很快长出新的球茎。另有两种稀有的观赏植物：月世界和岩牡丹属植物，因含同样的成分而被当做代用品。"
    };
  },
  methods: {
    handleReduce: function() {
      if (this.buy_number > 0) this.buy_number--;
    },
    handleAdd: function() {
      if (this.inventory > this.buy_number) this.buy_number++;
    },
    buyItNow: function() {
      console.log("立即购买");
      this.$router.push({
        path: "/performOrder"
      });
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
      this.$emit('close')
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
    transform: translateX(100%)
  }
  to {
    transform: translateX(0%)
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
  display:flex;
}

.img_box_bg {
  width: 600px;
  height: 600px;
  background-color: #ffc300;
  margin-left: 40px;
  margin-top:40px;
  align-items: center;
  justify-content: center;
  display: flex;
}

.img_box{
    width: 570px;
    height: 570px;
    background-color: white;
}

.img_text{
    color: black;
    font-size: 25px;
    text-align: left;
    margin-left: 7%;
    margin-top: 5%;
}

.imgs{
    width: 90%;
    height: 80%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 5%;
}

.img{
    width: 100px;
    height: 100px;
    border:1px solid #cccccc;
    margin-left: 5%;
}

.detail {
  display: inline-block;
  vertical-align: top;
}

.r_line{
  width: 500px;
  height: 3px;
  background-color: #ff8d1a;
  margin-left: 2%;
  margin-top: 70px;
}

.c_line{
  width: 3px;
  height: 500px;
  background-color: #ffc300;
  margin-left: 5%;
  margin-top: -5%;
}

.edit_name{
    margin-left: -5%;
    margin-top: -90%;
}

.v_line{
  width: 300px;
  height: 2px;
  background-color: #ff8d1a;
  margin-left: 40%;
  margin-top: 3%;
}

.text_box{
  width: 400px;
  text-align: left;
  margin-left: 10%;
  margin-top: 2%;
}

.text1{
  margin-top:5%; 
  color:#505050;
  font-size:25px;
}

.price{
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
  color:#ffffff;
  font-size:25px;
  font-weight: 700;
  line-height: 60px;
}

.button1:hover{
  background-color: black;
  transition-duration: 0.8s;
  color: #ffc300;
}

.button2 {
  background-color: #ff8d1a;
  width: 320px;
  height: 60px;
  color:#ffffff;
  font-size:25px;
  font-weight: 700;
  line-height: 60px;
  margin-top: 5%;
}

.button2:hover{
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