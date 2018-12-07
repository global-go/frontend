<template>
  <div class="changeNum">
    <div>
      <img src="../assets/left1.svg" @click="handleReduce()" style=" width:25px; height:30px;">
    </div>
    <div class="buyNum">{{buy_number}}</div>
    <div>
      <img src="../assets/right1.svg" @click="handleAdd()" style=" width:25px; height:30px;">
    </div>
  </div>
</template>

<script>
export default {
  name: "NumInput",
  model: {
    prop: "buy_number",
    event: "changeCount"
  },
  props: {"buy_number": Number},
  methods: {
    handleReduce() {
      if (this.buy_number > 1) {
        this.$emit("changeCount", this.buy_number - 1);
      }
    },
    handleAdd() {
      this.$emit("changeCount", this.buy_number + 1);
    }
  },
  data() {
    return {};
  }
};
</script>

<style scoped>
.changeNum {
  width: 120px;
  height: 30px;
  display: flex;
  background-color: #ffc300;
  align-items: center;
  justify-content: center;
}
.buyNum {
  width: 100px;
  height: 28px;
  background-color: white;
  text-align: center;
  border: 1px solid #000;
  font-size: 25px;
  color: #505050;
  line-height: 28px;
}
</style>