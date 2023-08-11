<template>
  <div class="sn-upload"><input type="file" :accept="fileAccept" /> sas</div>
</template>

<script>
export default {
  name: "SnUpload",
  computed: {
    fileAccept() {
      return this.accept || "";
    },
  },
  props: {
    accept: String,
  },
};
</script>

<!-- 
  本地预览
  远程上传
  拖动上传
  进度展示
 -->
