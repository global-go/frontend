<template>
  <div class="container">
    <div class="picture" :style="{ backgroundImage: `url(${item.images[0].url})` }"></div>
    <div class="content">
      <div class="yellow-line"></div>
      <div class="name">{{ item.name }}</div>
      <div class="price">￥ {{ item.price.toFixed(2) }}</div>
      <!--<img @ class="cart" src="../assets/shopping-cart.svg">-->
    </div>
  </div>
</template>

<script>
export default {
  name: "commodityItem",
  props: ["item"]
};
</script> 

<style scoped>
.container {
  width: 300px;
  height: 400px;
  /* top: 200px; */
  text-align: center;
  float: right;
  margin-bottom: 32px;
  color: black;
}

.picture {
  width: 300px;
  height: 300px;
  background: url("../assets/commodity.jpg");
  background-size: cover;
  background-position: center;
}

.content {
  font-size: 22px;
  width: 300px;
  height: 100px;
  color: inherit;
  overflow: hidden;
  /* line-height: 10%; */
}

.container:hover {
  background-color: black;
  color: white;
  transition-duration: 0.8s;
}
.yellow-line {
  background: rgba(255, 195, 0, 1);
  height: 2px;
  width: 200px;
  padding: 0;
  margin-top: 10px;

  /* padding-top: 10px; */
  /* z-index: 2; */
}

.name {
  width: 300px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  height: 32px;
  margin-top: 6px;
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

@media (max-width: 1400px) {
  .container {
    width: 200px;
    height: 300px;
  }

  .picture {
    width: 200px;
    height: 200px;
  }

  .name {
    width: 200px;
  }

  .yellow-line {
    width: 90px;
  }
}
</style>