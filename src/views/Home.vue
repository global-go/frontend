<template>
  <div class="home">
    <div class="left-wrapper">
      <img class="logo" src="../assets/logo.png">
      <div v-if="state===false">
        <div class="login" @click="goToLogin()">登陆</div>
        <div class="register" @click="goToRegister()">注册</div>
      </div>
      <div v-else>
        <div class="grey-frame">
          <div class="fir">
            <div class="welcome">欢迎回来，
              <br>
              {{userInfo.nickname}}！
            </div>
            <div class="exit" @click="exit()">注销</div>
          </div>
          <div class="line1"></div>
          <div class="pic" :style="{backgroundImage: `url(${userInfo.avatar})`}"></div>
          <!-- <img class="pic" :src="userInfo.avatar"> -->
          <div class="line2"></div>
          <div class="txt">未完成的订单数：{{userInfo.unfinishedCount}}笔</div>
          <div class="txt">钱包余额：￥{{parseFloat(userInfo.balance).toFixed(2)}}</div>
          <div class="btn" @click="goToMyOrder()">我的信息</div>
          <div class="btn" @click="goToCart()">购物车</div>
        </div>
      </div>
    </div>
    <div class="medium-wrapper">
      <div class="sort">
        <div class="big-block">排序</div>
        <!-- <div class="small-block">按更新时间排序</div> -->
        <div class="small-block" @click="upPrice">价格从低到高</div>
        <div class="small-block" @click="downPrice">价格从高到低</div>
      </div>
      <div class="classify">
        <div class="big-block">分类</div>
        <div class="small-block" @click="packAll">全部商品</div>
        <div class="small-block" @click="packClothing">服装</div>
        <div class="small-block" @click="packBeauty">美妆护肤</div>
        <div class="small-block" @click="packShoes">鞋子</div>
        <div class="small-block" @click="packACC">配饰</div>
        <div class="small-block" @click="packOthers">其他</div>
      </div>
    </div>
    <div class="right-wrapper">
      <SearchBar placeholder="搜索商品..." @search="search"></SearchBar>
      <div class="total-commodity">
        <div
          class="commodity"
          v-for="(item, index) in thisPage"
          :key="item.id"
          @click="goToDetail(index)"
        >
          <commodityItem :item="item"></commodityItem>
        </div>
      </div>
      <ChangePage :pageCount="pageCount" v-model="page"></ChangePage>
    </div>

    <div class="detail">
      <CommodityDetailPanel :item="selectedItem" @close="close" v-if="showDetail==true"></CommodityDetailPanel>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import commodityItem from "@/components/CommodityItem.vue";
import CommodityDetailPanel from "../components/CommodityDetailPanel";
import SearchBar from "../components/SearchBar";
import ChangePage from "../components/ChangePage";
import UploadImg from "../components/UploadImg";
import urls from "@/apis/urls";
// import detail from '@/components/DetailPanel.vue'

export default {
  name: "home",
  components: {
    commodityItem,
    CommodityDetailPanel,
    SearchBar,
    ChangePage,
    UploadImg
  },
  data() {
    return {
      showDetail: false,
      selectedItem: {},
      page: 1,
      searchKey: "",
      categoryName: "",
      sortKey: ''
    };
  },
  computed: {
    userInfo() {
      return this.$store.state.userInfo;
    },
    searchDataWrapper() {
      if (this.searchKey === "") {
        return this.category
      } else {
        return this.category.filter(v => {
          return v.name.indexOf(this.searchKey) !== -1
        });
      }
    },
    category() {
      if (this.categoryName === "") {
        return this.sorted;
      } else {
        return this.sorted.filter(v => {
          return v.category === this.categoryName
        });
      }
    },
    sorted() {
      if (this.sortKey === "up") {
        return this.commodities.sort(function(a, b) {
          return a.price - b.price;
        });
      } else if (this.sortKey === "down") {
        return this.commodities.sort(function(a, b) {
          return b.price - a.price;
        });
      } else {
        return this.commodities
      }
    },
    commodities() {
      return this.$store.state.commodities;
    },
    pageCount() {
      return Math.ceil(this.searchDataWrapper.length / 9);
    },
    thisPage() {
      return this.searchDataWrapper.slice((this.page - 1) * 9, this.page * 9);
    },
    state() {
      return this.$store.state.loginState;
    }
  },
  async mounted() {
    // Suppose that you send request to get commodity info here.
    const result = await this.axios({
      method: "get",
      url: urls.indexInfo
    });
    this.$store.commit("initCommodityList", result.data.commodities);

    // this.commodities=result.data.commodities
    // Store data into Vuex
  },
  methods: {
    exit() {
      this.$store.commit("logout");
    },
    goToLogin() {
      this.$router.push({
        path: "/login"
      });
    },
    goToRegister() {
      this.$router.push({
        path: "/register"
      });
    },
    goToCart() {
      this.$router.push({
        path: "/cart"
      });
    },
    goToMyOrder() {
      this.$router.push({
        path: "/MyOrder"
      });
    },
    goToDetail(index) {
      this.selectedItem = this.thisPage[index];
      this.showDetail = true;
    },
    close() {
      this.showDetail = false;
    },
    search(e) {
      this.searchKey = e;
      this.page = 1
    },
    packAll() {
      this.categoryName = "";
    },
    packClothing() {
      this.categoryName = "服装";
    },
    packBeauty() {
      this.categoryName = "美妆护肤";
    },
    packShoes() {
      this.categoryName = "鞋子";
    },
    packACC() {
      this.categoryName = "配饰";
    },
    packOthers() {
      this.categoryName = "其他";
    },
    upPrice() {
      this.sortKey = "up";
    },
    downPrice() {
      this.sortKey = "down";
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

.grey-frame {
  width: 200px;
  height: 440px;
  border-radius: 40px;
  margin-left: 25px;
  margin-top: 30px;
  background-color: rgba(229, 229, 229, 0.5);
  position: relative;
  text-align: center;
}

.fir {
  display: flex;
}
.welcome {
  font-size: 16px;
  font-weight: bold;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
}

.exit {
  font-size: 12px;
  color: rgba(255, 141, 0, 1);
  text-decoration: underline;
  margin-top: 45px;
  margin-right: 8px;
  flex-shrink: 0;
}

.exit:hover {
  cursor: pointer;
}

.line1 {
  margin-top: 6px;
  width: 110px;
  height: 2px;
  background-color: rgba(255, 141, 0, 1);
}

.pic {
  height: 130px;
  width: 130px;
  margin: 15px;
  margin-left: auto;
  margin-right: auto;
  /* margin: 15px 15px; */
  background-position: center;
  background-size: cover;
}

.line2 {
  width: 120px;
  height: 2px;
  float: right;
  background-color: rgba(255, 141, 0, 1);
}

.txt {
  margin-top: 15px;
  font-size: 14px;
  font-weight: bold;
  padding-top: 5px;
}

.btn {
  height: 40px;
  width: 150px;
  margin: 15px auto 0 auto;
  background-color: rgba(255, 195, 0, 1);
  border-radius: 10px;
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
  margin-top: 100px;
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

.detail {
}
</style>
 