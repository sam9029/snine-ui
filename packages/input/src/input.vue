<template>
  <div
    :class="[
      'sn-input',
      size ? 'sn-input--' + size : '',
      {
        'sn-input--prepend': $slots.prepend,
        'sn-input--append': $slots.append,
        'sn-input--prefix': prefixIcon,
        'sn-input--suffix': suffixIcon,
        'is-input-disabled': disabled,
      },
    ]"
  >
    <template v-if="type != 'textarea'">
      <!-- 前置内容 -->
      <div
        v-if="$slots.prepend"
        class="sn-input__prepend-wrapper sn-input__append"
      >
        <slot name="prepend"></slot>
      </div>

      <div class="sn-input__inner-wrapper">
        <!-- 前置元素 -->
        <div
          v-if="prefixIcon"
          class="sn-input__icon-wrapper sn-input__prefixIcon"
        >
          <i :class="prefixIcon"></i>
        </div>

        <!-- 输入-文本输入框 -->
        <input
          ref="input"
          class="sn-input__inner"
          :type="renderType"
          :value="curInputValue"
          :placeholder="placeholder"
          :disabled="disabled"
          :maxlength="maxlength"
          :minlength="minlength"
          @focus="handleFocus"
          @blur="handleBlur"
          @change="handleChange"
          @input="handleInputValueChange"
        />

        <!-- 后置元素 -->
        <div
          v-if="suffixIcon"
          class="sn-input__icon-wrapper sn-input__suffixIcon"
        >
          <i :class="suffixIcon"></i>
        </div>
        <!-- clearable 按钮 （后置不存在 && 设置了clearable时展示） -->
        <i
          v-if="clearable && !suffixIcon"
          class="sn-icon-circle-close sn-input__clearable sn-input__icon-wrapper sn-input__suffixIcon"
          @click.stop="handleClearInputValue"
        ></i>
        <!-- 密码隐显 -->
        <i
          v-if="type == 'password'"
          class="sn-icon-view sn-input__clearable sn-input__icon-wrapper sn-input__suffixIcon"
          @click.stop="handleControlPwdShow"
        ></i>
        <!-- 字数限制 -->
        <i
          v-if="isShowWordLimit"
          class="sn-input__count sn-input__icon-wrapper sn-input__suffixIcon"
          >{{ curWordage }} / {{ LimitWordage }}</i
        >
      </div>
      <!-- 后置内容 -->
      <div
        v-if="$slots.append"
        class="sn-input__append-wrapper sn-input__append"
      >
        <slot name="append"></slot>
      </div>
    </template>

    <!-- 输入-文本域 -->
    <textarea
      v-else
      ref="input"
      class="sn-input__inner"
      :value="curInputValue"
      :placeholder="placeholder"
      :disabled="disabled"
      :max="max"
      :min="min"
      @focus="handleFocus"
      @blur="handleBlur"
      @change="handleChange"
      @input="handleInputValueChange"
      :cols="areaCols"
      :rows="areaRows"
      :style="{ resize: disabled ? 'none' : 'auto' }"
    ></textarea>
  </div>
</template>

<script>
// import Vue from 'vue'
export default {
  name: "SnInput",
  props: {
    // 输入值
    value: [String, Number],
    size: String,
    disabled: Boolean,
    clearable: Boolean,
    showWordLimit: Boolean,
    // Icon
    prefixIcon: String,
    suffixIcon: String,
    // 字数限制
    maxlength: Number, // text
    minlength: Number, // text
    max: Number, // number
    min: Number, // number
    // base
    type: {
      type: String,
      default: "text",
      // validator: function (value) {
      //   // 这个值必须匹配下列字符串中的一个
      //   return ["", "text", "textarea", "password"].includes(value);
      // },
    },
    placeholder: {
      type: String,
      default: "请输入内容",
    },
    areaCols: { type: Number, default: 20 },
    areaRows: { type: Number, default: 2 },
  },
  data() {
    return {
      renderType: this.type,
      curInputValue: this.value,
    };
  },
  computed: {
    // 字数统计
    isShowWordLimit() {
      if (this.showWordLimit) {
        if (["text", "textarea"].includes(this.type)) {
          return this.showWordLimit;
        } else {
          return false;
        }
      } else {
        return false;
      }
    },
    curWordage() {
      return this.curInputValue.length;
    },
    LimitWordage() {
      return this.maxlength || "∞";
    },
  },
  watch: {
    // 监听——实现外部自定义父组件v-model绑定值的数据响应式
    curInputValue: {
      handler(newValue) {
        // 来自外部的v-model绑定自定义组件 的等效 @input事件
        this.$emit("input", newValue);
      },
    },
  },
  methods: {
    // 响应绑定的输入数据
    handleInputValueChange(event) {
      this.curInputValue = event.target.value;
      this.$emit("input", event.target.value);
    },
    handleChange(event) {
      this.$emit("change", event.target.value);
    },
    handleFocus(event) {
      this.$emit("focus", event);
    },
    handleBlur(event) {
      this.$emit("blur", event);
    },
    //#region local function
    handleClearInputValue() {
      if (this.curInputValue) this.curInputValue = "";
    },
    handleControlPwdShow() {
      if (this.renderType == "password") return (this.renderType = "text");
      if (this.renderType == "text") return (this.renderType = "password");
    },
    //#endregion
  },
  mounted() {},
};
</script>

<!-- 
  type input/textarea ✔
  icon(input外内容、input内元素) ✔
  浮动border ✔
  size ✔
  禁用 ✔
  可清除clearable ✔
  密码显示 ✔
  输入长度限制 ✔
  字数验证
  输入快捷下拉选项展示

  事件绑定 
  失焦、聚焦、输入input、改变change  ✔
 -->
