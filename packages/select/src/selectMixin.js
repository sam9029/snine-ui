export default {
  props: {
    value: [String, Number],
  },
  data() {
    return {
      curInputValue: this.value,
    };
  },
  computed: {},
  watch: {
    // 监听——实现外部自定义父组件v-model绑定值的数据响应式
    curInputValue: {
      handler(n) {
        // 来自外部的v-model绑定自定义组件 的等效 @input事件
        this.$emit("input", n);
      },
    },
  },
  methods: {
    // 响应绑定的输入数据
    handleInputValue(event) {
      this.curInputValue = event.target.value;
    },
    // @change事件
    handleChangeValue(val) {
      this.$emit("change", val);
    },
  },
};
