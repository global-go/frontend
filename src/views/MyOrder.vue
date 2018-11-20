<template>
    <div class="cart">
        <div class="bar1">
            <img class="logo" src="../assets/logo.png">
        </div>
        <div class="bar2">
            <img class="user-photo" src="../assets/photo.png">
            <div class="user-message">
                <div class="Adm">
                     <div class="user-name">用户A</div>
                     <div class="exit" @click="exit()">注销</div>
                     <div class="back" @click="exit()">返回首页</div>
                </div>
               
                <div class="message">
                    <div class="totalOrder">总订单数：3笔</div>
                    <div class="divide-line"></div>
                    <div class="unfinishedOrder">未完成订单数：1笔</div>
                    <div class="divide-line"></div>
                    <div class="income">钱包余额：12.00</div>
                    <div class="btn" @click="GoToUserInfoEditor()">编辑个人信息</div>

                </div>
            </div>
        </div>
        <div class="list" v-for="i in 3" :key="i">
            <img class="com-photo" src="../assets/commodity.jpg">
            <div class="com-name">商品名称很长的话就会占两行这样子</div>
            <div class="com-price">单价：<br/>RMB 180.00</div>
            <div class="number-price">数量: 2</div>
            <div class="buyer">总价：<br/>RMB 360.00</div>
            
            <div class="btn1">
              <div >等待卖家发货</div>
              <div class="click-btn" @click="Check()" >订单详情</div>
            </div> 
        </div>
 <UserInfoEditorPanel @close="close" v-if="editor==true"></UserInfoEditorPanel>
  <OrderDetailPanel @close="close" v-if="detail===true"></OrderDetailPanel>
    </div>
</template>

<script>
import UserInfoEditorPanel from "../components/UserInfoEditorPanel";
import OrderDetailPanel from "../components/OrderDetailPanel";
export default {
  name: "",
  components: {
    UserInfoEditorPanel,OrderDetailPanel
  },
  data(){
   return{
      editor:false,
      detail:false
    }
  },
  methods: {
    exit() {
      this.$router.push({
        path: "/"
      });
    },
    GoToManageCommodity() {
        this.$router.push({
            path:"/CommodityManagement"
        });
    },
    GoToUserInfoEditor(){
      this.editor=true
    },
    Check(){
      this.detail=true
    },
    close() {
      this.editor = false,
      this.detail=false
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

.Adm{
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

.exit:hover{
    cursor: pointer;
}


.back {
  font-size: 16px;
  font-weight: bold;
  margin-left: 415px;
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
  background-color:rgba(128, 128, 128, 0.8);
}

.unfinishedOrder {
  font-size: 15px;
  margin-top: 30px;
  font-weight: bold;
  color: rgba(56, 56, 56, 1);
  margin-left: 20px;
}

.income{
  font-size: 15px;
  margin-top: 30px;
  font-weight: bold;
  color: rgba(56, 56, 56, 1);
  margin-left: 20px;    
}

.btn{
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

.btn:hover{
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
  text-align: left
}

.number-price {
  flex-grow: 1;
  font-weight: bold;
  text-align: left
}

.buyer{
  flex-grow: 1;
  font-weight: bold;
  text-align: left;
}

.btn1{
  flex-grow: 1;
  font-weight: bold;
  text-align: left;
  font-size: 18px;
  line-height: 30px;
}

.click-btn:hover {
  color: rgba(255, 195, 0, 1);
  transition-duration: 0.5s;
  text-decoration: underline;
  cursor: pointer;
}
</style>
