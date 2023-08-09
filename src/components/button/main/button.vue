<template>
  <button
    @click="handleClick"
    :disabled="disabled || loading"
    :class="[
      'sn-button',
      size ? 'sn-button--' + size : '',
      type ? 'sn-button--' + type : '',
      {
        'is-disabled': disabled,
        'is-loading': loading,
      },
    ]"
    data-el-type="button"
  >
    <slot>默认按钮</slot>
  </button>
</template>

<script>
export default {
  name: "SnButton",
  props: {
    type: String,
    size: String,
    disabled: Boolean,
    loading: Boolean,
  },
  computed: {},
  methods: {
    handleClick(e) {
      this.$emit("click", e);
    },
  },
};
</script>

<!-- 
  尺寸✔
  类型✔
  禁用✔
  事件绑定✔
  加载
  icon
  圆型
  朴素
  圆角
  文字按钮
  按钮组
 -->
