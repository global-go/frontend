<template>
<div class="changeNum">
    <div class="button"><img src="../assets/left1.svg" @click="handleReduce" style=" width:25px; height:30px;"/></div>
    <div class="buyNum">
        <p style="font-size:25px;color:#505050;margin-top:0%;">{{ buy_number}}</p>
    </div>
    <div class="button"><img src="../assets/right1.svg" @click="handleAdd" style=" width:25px; height:30px;"/></div>  

                                          
</div>
   
</template>

<script>
export default {
  name: "ChangeNum",
  methods: {
      handleReduce: function(){
          if(this.buy_number>0)
          this.buy_number--;
      },
      handleAdd: function(){
          this.buy_number++;
      }   
  },
  data(){
      return{
          buy_number:0
      }
  }
};
</script>

<style scoped>
.changeNum{
    width: 120px;
    height: 30px;   
    display: flex;
}

.button{
    background-color: #ffc300;
}

.buyNum{
    width: 100px;
    height: 28px;
    background-color: white;
    text-align:center;
    border:1px solid #000;
}
</style>