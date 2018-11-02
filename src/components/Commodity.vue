<template>
    <div class="container" @click="goToCart()">
      <div class="picture"></div>
      <div class="content">
         <div class="yellow-line"></div>
         <div class="name">很长很长很长的商品名称lalala</div>
         <div class="price">RMB 180.00</div>
         <!--<img @ class="cart" src="../assets/shopping-cart.svg">-->
      </div>

    </div>
</template>

<script>
export default {
  name: "commodity",
  methods: {
    goToCart() {
      this.$router.push({
        path: "/cart"
      });
    }
  }
}; 
</script> 

<style scoped>
.container {
  width: 300px;
  height: 500px;
  top: 200px;
  text-align: center;
  float: right;
}

.picture {
  width: 300px;
  height: 300px;
  background: url("../assets/commodity.jpg");
  background-size: cover;
  background-position: center;
}

.content {
  font-size: 27px;
  width: 300px;
  height: 100px;
  color:black;
  
  /* line-height: 10%; */
}

.content:hover{
  background-color: black;
  color: white;
  transition-duration:0.8s;
}
.yellow-line {
  background-color: rgba(255, 195, 0, 1);
  height: 2px;
  width: 200px;
  margin-top: 10px;
  /* z-index: 2; */
  
}

.name {
  width: 300px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  height: 35px;
  letter-spacing: 2px;
  text-align: left;
}

.price {
  width: 215px;
  height: 35px;
  color: rgba(255, 141, 26, 1);
  font-weight: bold;
  text-align: left;
  margin-top: 4px;
}


</style>