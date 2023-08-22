<template>
  <div :class="['sn-radio-group']">hi</div>
</template>

<script>
export default {
  name: "SnRadioGroup",
  props: {
    value: [String, Number, Boolean], // 模拟 input[type='radio'] 的checked属性
  },
  data() {
    return {
      // 组件内储存选中 radio 的value值
      curValue: this.value || null,
    };
  },
  watch: {},
  computed: {},
  methods: {},
  mounted() {},
};
</script>

<!-- 

  组件业务逻辑
  1. 如何接收选中状态的 radio 的值 ✔
    1.1 理解 input 原生 // vuejs v-model 对不同表单元素的特殊处理 ✔
  2. 初始化radio的 选中状态 ✔
  3. radio的 禁用状态 ✔


 -->
