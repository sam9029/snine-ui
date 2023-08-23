<template>
  <div :class="['sn-radio-group']">
    <template v-if="$slots.default">
      <slot ref="snRadioComps"></slot>
    </template>
  </div>
</template>

<script>
export default {
  name: "SnRadioGroup",
  componentName: "SnRadioGroup",
  props: {
    // value: [String, Number, Boolean], // 模拟 input[type='radio'] 的checked属性
  },
  data() {
    return {
      // groupName: generateRadioGroupName(),
    };
  },
  watch: {},
  computed: {},
  methods: {},
  mounted() {
    // // dev-log
    console.log(
      "[Dev_Log][$slots.default]_>>>",
      this.$slots.default,
      this.$refs.snRadioComps
    );

    this.$nextTick(() => {
      // // dev-log
      console.log("[Dev_Log][snRadioComps]_>>>", this.$refs.snRadioComps);
    });
  },
};
</script>

<!-- 

  组件业务逻辑
  1. 如何接收选中状态的 radio 的值 ✔
    1.1 理解 input 原生 // vuejs v-model 对不同表单元素的特殊处理 ✔
  2. 初始化radio的 选中状态 ✔
  3. radio的 禁用状态 ✔

 -->
