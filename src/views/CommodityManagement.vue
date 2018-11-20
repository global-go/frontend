<template>
    <div class="cart">
        <div class="bar1">
            <img class="logo" src="../assets/logo.png">
             <div class="form">
              <input type="text" placeholder="搜索订单...">
              <div class="search"></div>
            </div>
        </div>
        <div class="bar2">
            <img class="user-photo" src="../assets/photo.png">
            <div class="user-message">
                <div class="Adm">
                     <div class="user-name">管理员</div>
                     <div class="exit" @click="exit()">退出</div>
                     <div class="back" @click="back()">返回</div>
                </div>
               
                <div class="message">
                    <div class="totalOrder">店内商品数：5</div>
                    <div class="divide-line"></div>
                    <div class="unfinishedOrder">库存不为0的商品数：4</div>
                    <div class="divide-line"></div>
                    <div class="income">最大可上架商品数：50</div>
                    <div class="btn" @click="GoToManageCommodity()">上架商品</div>

                </div>
            </div>
        </div>
        <div class="list" v-for="i in 4" :key="i">
            <img class="com-photo" src="../assets/commodity.jpg">
            <div class="com-name">商品名称很长的话就会占两行这样子</div>
            <div class="com-price">单价：<br/>RMB 180.00</div>
            <div class="number-price">库存: 2</div>
            <div class="buyer">描述：<br/>商品的概况.....</div>
            
            <div class="btn1">
              <div class="click-btn">编辑商品</div>
              <div class="click-btn" >删除商品</div>
            </div> 
        </div>
<ChangePage style="margin-top:40px"></ChangePage>
 <CommodityEditorPanel @close="close" v-if="editor==true"></CommodityEditorPanel>
    </div>
</template>

<script>
import SearchBar from "../components/SearchBar";
import ChangePage from "../components/ChangePage";
import CommodityEditorPanel from "../components/CommodityEditorPanel";
export default {
  name: "",
  data() {
    return {
      editor: false
    };
  },
  components: {
    SearchBar,
    ChangePage,
    CommodityEditorPanel
  },
  methods: {
    exit() {
      this.$router.push({
        path: "/"
      });
    },
    back() {
      this.$router.push({
        path: "/AdminHome"
      });
    },
    GoToManageCommodity() {
      this.editor = true;
    },
    close() {
      this.editor = false;
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
  font-size: 15px;
  color: rgba(255, 141, 0, 1);
  text-decoration: underline;
  margin-top: 7px;
  margin-left: 12px;
}

.exit:hover {
  cursor: pointer;
}

.back {
  font-size: 16px;
  font-weight: bold;
  margin-left: 450px;
  margin-top: 5px;
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
}

.click-btn:hover {
  color: rgba(255, 195, 0, 1);
  transition-duration: 0.5s;
  text-decoration: underline;
  cursor: pointer;
}

.form {
  height: 50px;
  border-radius: 5px 0px 0px 5px;
  border: none;
  display: flex;
  justify-content: center;
  align-content: center;
  margin-top: 30px;
  margin-right: 80px;
}

input {
  width: 40vw;
  font-size: 20px;
  padding-left: 8px;
  border: 1px solid rgb(229, 229, 229);
}

.search {
  width: 50px;
  height: 50px;
  background-color: rgba(229, 229, 229, 1);
  border-radius: 0px 5px 5px 0px;
  border: none;
  padding: 0;
  background-image: url("../assets/search.svg");
  display: inline-block;
  background-size: 100%;
}

.search:hover {
  cursor: pointer;
  background-color: rgba(255, 195, 0, 1);
  transition-duration: 0.8s;
}
</style>
