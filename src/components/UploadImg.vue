<template>
  <div @click="update" class="text1">上传图片</div>
</template>

<script>
import urls from "@/apis/urls";
export default {
  name: "UploadImg",
  computed: {
    userInfo() {
      return this.$store.state.userInfo;
    }
  },
  methods: {
    async update() {
      const fileInput = document.createElement("input");
      fileInput.type = "file";
      fileInput.accept = "image/png,image/gif,image/jpg,image/jpeg";
      fileInput.onchange = async e => {
        if (fileInput.files.length > 0) {
          let file = e.target.files[0];
          const formData = new FormData();
          formData.append("image", file);
          let result = await this.axios({
            url: urls.upload,
            method: "post",
            data: formData
          });
          let image = result.data.image
          this.$emit('returnUrl',image)
          
        }
      };
      fileInput.click();
    }
  },
  props: [],
  data() {
    return {};
  }
};
</script>

<style scoped>
.text1 {
  font-size: 28px;
  font-weight: bold;
  color: #505050;
}
.text1:hover {
  color: rgba(255, 141, 26, 1);
  transition-duration: 0.5s;
  text-decoration: underline;
  cursor: pointer;
}
</style>