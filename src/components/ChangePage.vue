<template>
<div class="changePage">
        <div class="frame"><img src="../assets/smaller.svg" style="width:12px;height:12px;margin-top:4px;" ></div>
        <div class="frame">1</div>
        <div class="frame">2</div>
        <div class="frame">3</div>
        <div class="frame">4</div>
        <div class="frame">5</div>
        <div class="frame">6</div>
        <div class="frame"><img src="../assets/bigger.svg" style="width:12px;height:12px;margin-top:4px;" ></div>
        <div class="txt">跳至</div>
        <input >
        <div class="txt">页</div>
                                       
</div>
   
</template>

<script>
export default {
  name: "ChangePage",
  methods: {
     
  },
  data(){
      return{
        
      }
  }
};
</script>

<style scoped>
.changePage{
    margin:auto auto;
	text-align: center;

}

.frame{
	display: inline-block;
	border:2px solid black;
	padding:4px 10px;
	margin:5px 5px;
    border-radius: 3px;
}

.frame:hover{
    border-color: rgba(255, 141, 0, 1);
    cursor: pointer;
    color:  rgba(255, 141, 0, 1);

}
.txt{
    display: inline-block;
	padding:4px 10px;
	margin:7px 4px;
}

input{
    display: inline-block;
	padding:4px 10px;
	margin:7px 4px;
    width: 30px;
}
</style>