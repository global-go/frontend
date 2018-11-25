<template>
<div class="changePage">
        <div class="frame"><img src="../assets/smaller.svg" style="width:12px;height:12px;margin-top:4px;" ></div>
        <div v-for="i in pageCount" :key="i" class="frame" :class="{selected: i === page}" @click="changePage(i)">{{i}}</div>
        <div class="frame"><img src="../assets/bigger.svg" style="width:12px;height:12px;margin-top:4px;" ></div>
        <div class="txt">跳至</div>
        <input >
        <div class="txt">页</div>
</div>
   
</template>

<script>
export default {
  name: "ChangePage",
  model: {
    prop: "page",
    event: "pageChanged"
  },
  props: ["pageCount", "page"],
  methods: {
    changePage(i) {
      this.$emit("pageChanged", i);
    }
  },
  data() {
    return {};
  }
};
</script>

<style scoped>
.changePage {
  margin: auto auto;
  text-align: center;
}

.frame {
  display: inline-block;
  border: 2px solid black;
  padding: 4px 10px;
  margin: 5px 5px;
  border-radius: 3px;
}

.frame:hover,
.selected {
  border-color: rgba(255, 141, 0, 1);
  cursor: pointer;
  color: rgba(255, 141, 0, 1);
}
.txt {
  display: inline-block;
  padding: 4px 10px;
  margin: 7px 4px;
}

input {
  display: inline-block;
  padding: 4px 10px;
  margin: 7px 4px;
  width: 30px;
}
</style>