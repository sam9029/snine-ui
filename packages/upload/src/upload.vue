<template>
  <div class="sn-upload">
    <input
      :multiple="multiple"
      ref="snUploadInput"
      class="sn-upload-input"
      type="file"
      :accept="fileAccept"
    />
    <sn-button type="primary" @click="handleClick">点击上传</sn-button>
  </div>
</template>

<script>
export default {
  name: "SnUpload",
  props: {
    accept: String,
    disabled: Boolean,
    multiple: Boolean,
  },
  computed: {
    fileAccept() {
      return this.accept || "";
    },
  },
  methods: {
    handleClick() {
      if (this.disabled) return;
      // 清除上次选择
      this.$refs.snUploadInput.value = null;
      this.$refs.snUploadInput.click();
    },
  },
};
</script>

<!-- 

  本地预览
  远程上传
  拖动上传
  手动上传
  进度展示

  限制上传文件的个数
  限制上传的图片格式
  限制上传文件的大小
  移除文件
  限制上传文件的大小
 -->
