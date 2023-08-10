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
        'is-circle': circle,
        'is-text': text,
      },
    ]"
    data-el-type="button"
  >
    <!-- 加载 -->
    <i v-if="loading" class="sn-icon-loading"></i>
    <!-- 图标 -->
    <i v-if="icon && !loading" :class="'sn-icon-' + icon"></i>
    <span v-if="$slots.default"><slot></slot></span>
  </button>
</template>

<script>
export default {
  name: "SnButton",
  props: {
    type: String,
    size: String,
    icon: String,
    text: Boolean,
    circle: Boolean,
    disabled: Boolean,
    loading: {
      type: Boolean,
      default: false,
    },
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
  （事件可点击状态--加载不可点；禁止不可点）✔
  加载 ✔
  icon ✔ （前后置margin & 大小 & circle时处理位置margin）✔
  hover浮动（无色按钮、有色按钮）✔
  圆型 ✔
  文字按钮✔
  朴素
  圆角
  按钮组
 -->
