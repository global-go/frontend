<template>
<div class="wrapper">
    <div class="mask" @click="close"></div>
    <div class="content">
        <div>

        </div>
    </div>
</div>
   
</template>

<script>
export default {
  name: "UserInfoEditorPanel",
  methods: {
    close() {
      this.$emit('close')
    }
     
  },
  data(){
     
  }
};
</script>

<style scoped>
.wrapper {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
}

.wrapper > .mask {
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.5);
  animation: fadeIn 0.5s ease 1 backwards;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes slideIn {
  from {
    transform: translateX(100%)
  }
  to {
    transform: translateX(0%)
  }
}

.content {
  position: absolute;
  overflow-y: auto;
  right: 0px;
  top: 0px;
  width: 70vw;
  height: 100vh;
  background-color: black;
  animation: slideIn 0.5s ease 1 backwards;
}


</style>