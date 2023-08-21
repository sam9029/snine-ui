<template>
  <div
    :class="[
      'sn-radio',
      {
        'is-radio-disabled': disabled,
      },
    ]"
    :style="labelPositionControl"
  >
    <!-- 原点模式 -->
    <input
      type="radio"
      ref="snRadio"
      class="sn-radio__input"
      :id="label"
      :name="name"
      :value="label"
      :disabled="disabled"
      @change="handleChange"
    />
    <label
      class="sn-radio__label"
      v-if="label"
      :for="label"
      :disabled="disabled"
      >{{ label }}</label
    >

    <!-- 按钮模式 -->
    <!-- <sn-button type="primary" @click="handleClick">点击上传</sn-button> -->
  </div>
</template>

<script>
export default {
  name: "SnRadio",
  props: {
    value: [String, Number, Boolean], // 模拟 input[type='radio'] 的checked属性
    name: String,
    label: String,
    disabled: Boolean,
    labelPosition: String,
  },
  data() {
    return {
      // 组件内储存选中 radio 的value值
      curValue: this.value || null,
    };
  },
  watch: {
    curValue(newVal) {
      // 更新父组件的值
      this.$emit("input", newVal);
    },
  },
  computed: {
    // label 位置摆放
    labelPositionControl() {
      if (this.labelPosition && this.labelPosition == "front") {
        return {
          flexDirection: "row-reverse",
        };
      } else {
        return {};
      }
    },
  },
  methods: {
    init() {
      // 初始化radio的 选中状态
      // // dev-log
      console.log("[Dev_Log][init]_>>>", this.value, this.label);

      if (this.value === this.label) {
        this.$refs["snRadio"].click();
      }
    },
    handleChange(e) {
      this.curValue = e.target.value;
      this.$emit("change", e.target.value);
    },
  },
  mounted() {
    this.init();
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
