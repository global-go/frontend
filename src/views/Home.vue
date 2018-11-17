<template>
  <div class="home">
    <div class="left-wrapper" >
      <img class="logo" src="../assets/logo.png">
      <div class="login" @click="goToLogin()">登陆</div>
      <div class="register" @click="goToRegister()">注册</div>
    </div>
    <div class="medium-wrapper">
      <div class="sort">
        <div class="big-block">排序</div>
        <div class="small-block">按更新时间排序</div>
        <div class="small-block">价格从低到高</div>
        <div class="small-block">价格从高到低</div>
      </div>
      <div class="classify">
        <div class="big-block">分类</div>
        <div class="small-block">一级选项</div>
        <div class="small-block">二级选项</div>
        <div class="small-block">三级选项</div>
      </div>
    </div>
    <div class="right-wrapper">
      <div class="form">
        <input type="text" placeholder="搜索感兴趣的商品...">
        <div class="search"></div>
      </div>

      <div class="total-commodity">
         <div class="commodity"  v-for="i in 9" :key="i"  @click="goToDetail()"><commodityItem></commodityItem></div>
      </div>

     <div>
       <div class="page"></div>
     </div>
     
     
    </div>
    
    <div class="detail">
    <CommodityDetailPanel v-if="showDetail==true"></CommodityDetailPanel>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import commodityItem from "@/components/CommodityItem.vue";
import CommodityDetailPanel from "../components/CommodityDetailPanel";
// import detail from '@/components/DetailPanel.vue'

export default {
  name: "home",
  components: {
    commodityItem,CommodityDetailPanel
  },
  methods: {
    goToLogin() {
      this.$router.push({
        path: "/login"
      });
    },
    goToRegister() {
      this.$router.push({
        path: "/cart"
      });
    },
    goToDetail(){
      console.log(this.showDetail);
      this.showDetail=true;
    }
  },
  data(){
    return{
      showDetail:false
    }
    
  }
};
</script>



<style scoped>
.home {
  width: 100%;
  height: 100%;
  display: flex;
}

.left-wrapper {
  width: 250px;
  height: 100vh;
  text-align: center;
  flex-shrink: 0;
}

.medium-wrapper {
  width: 250px;
  height: 100vh;
  background-color: rgba(229, 229, 229, 0.5);
  font-size: 18px;
  text-align: center;
  flex-shrink: 0;
}

.right-wrapper {
  height: 100vh;
  flex-grow: 1;
  overflow: auto;
}

.logo {
  position: relative;
  width: 75%;
  height: 80px;
  text-align: center;
  margin-top: 50px;
}

.login {
  margin-right: auto;
  margin-left: auto;
  height: 70px;
  width: 40%;
  background-color: rgba(255, 195, 0, 1);
  border-radius: 20px;
  color: rgba(0, 0, 0, 1);
  font-size: 30px;
  text-align: center;
  font-weight: bold;
  margin-top: 100px;
  line-height: 70px;
  overflow: hidden;
}

.login:hover {
  background-color: black;
  color: white;
  transition-duration: 0.8s;
  cursor: pointer;
}

.register {
  margin-right: auto;
  margin-left: auto;
  height: 70px;
  width: 40%;
  background-color: rgba(255, 195, 0, 1);
  border-radius: 20px;
  color: rgba(0, 0, 0, 1);
  font-size: 30px;
  text-align: center;
  font-weight: bold;
  margin-top: 30px;
  line-height: 70px;
  overflow: hidden;
}

.register:hover {
  background-color: black;
  color: white;
  transition-duration: 0.8s;
  cursor: pointer;
}

.form {
  height: 50px;
  border-radius: 5px 0px 0px 5px;
  border: none;
  display: flex;
  justify-content: center;
}

input {
  width: 700px;
  font-size: 20px;
  padding-left: 8px;
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

.sort {
  margin-top: 200px;
  width: 100%;
  height: 250;
}

.big-block {
  /* width: 100%; */
  height: 92px;
  background-color: rgba(229, 229, 229, 1);
  text-align: center;
  font-size: 41px;
  font-weight: bold;
  letter-spacing: 4px;
  font-family: "Microsoft YaHei";
  line-height: 92px;
  text-align: left;
  padding-left: 20px;
}

.small-block {
  /* width: 100%; */
  height: 40px;
  background-color: rgba(229, 229, 229, 0.5);
  /* text-align: center; */
  font-size: 18px;
  font-weight: bold;
  letter-spacing: 4px;
  color: rgba(80, 80, 80, 1);
  line-height: 40px;
  text-align: left;
  padding-left: 30px;
}

.small-block:hover {
  cursor: pointer;
}

.total-commodity {
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
}

.commodity {
  margin-top: 20px;
  display: flex;
  justify-content: space-around;
  width: 33%;
  flex-wrap: wrap;
}

.page {
  width: 10px;
  height: 10px;
  border-radius: 4px;
}

.detail{
  
}

</style>
 