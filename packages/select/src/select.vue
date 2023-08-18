<template>
  <!-- 不选原生 select，因为很多功能样式不能自定义，例如多选 -->
  <div class="sn-select">
    <!-- 选中 & 单选 -->
    <sn-input
      type="text"
      v-model="curCheckedLabel"
      :placeholder="placeholder"
      :readonly="readonly"
      @input="handleInputValue"
      @change="handleChangeValue"
    />

    <!-- 多选tags -->
    <div style="display: none"></div>

    <!-- 选项 -->
    <div class="sn-select__popper">
      <!-- 三角 -->
      <div class="sn-select__popper-arrow"></div>
      <ul class="sn-select__downdrop-wrapper">
        <!-- sn-option 组件 -->
        <template v-if="isShowOption">
          <slot @handleTransformCheckedInfo="handleTransformCheckedInfo" />
        </template>
        <template v-else>
          <div class="sn-select__downdrop-wrapper--empty">暂无数据</div>
        </template>
      </ul>
    </div>
  </div>
</template>

<script>
// import SnOption from "./option.vue";
import SnInput from "../../input/src/input.vue";
export default {
  name: "SnSelect",
  components: {
    // SnOption,
    SnInput,
  },
  props: {
    value: [String, Number],
    placeholder: {
      type: String,
      default: "请选择",
    },
  },
  provide() {
    return {
      SnSelect: this,
    };
  },
  data() {
    return {
      curCheckedValue: this.value, // 实际选择的 value 值
      // curCheckedLabel: null, // 实际选择的 value 对应的 label 值
      readonly: true, // 控制输入
    };
  },
  computed: {
    isShowOption() {
      // 若 sn-select 中slot中调用不含 sn-option 则不显示
      // return this.checkSlot(this.$slots.default);

      // Select

      return true;
    },
    // 实际选择的 value 对应的 label 值
    curCheckedLabel() {
      if (this.curCheckedValue) {
        return "sa";
      } else {
        return null;
      }
    },
  },
  watch: {
    // 监听——实现外部自定义父组件v-model绑定值的数据响应式
    curCheckedValue: {
      handler(n) {
        // 来自外部的v-model绑定自定义组件 的等效 @input事件
        this.$emit("input", n);
      },
    },
  },
  methods: {
    // checkSlot(checkSlot = this.$slots.default) {
    //   let res = [];

    //   for (let i = 0; i < checkSlot.length; i++) {
    //     let itVnode = checkSlot[i];

    //     if (
    //       itVnode.componentOptions &&
    //       itVnode.componentOptions.tag === "sn-option"
    //     ) {
    //       res.push("true");
    //       break;
    //     } else {
    //       if (itVnode.children && itVnode.children.length) {
    //         this.checkSlot(itVnode.children);
    //         break;
    //       } else {
    //         res.push("false");
    //         break;
    //       }
    //     }
    //   }

    //   return res.includes("true");
    // },
    // 响应绑定的输入数据
    handleInputValue(event) {
      this.curCheckedValue = event.target.value;
    },
    // change事件
    handleChangeValue(val) {
      this.$emit("change", val);
    },

    //#region option operation
    handleTransformCheckedInfo(_checkOptionInfo) {
      // // dev-log
      console.log("[Dev_Log][_checkOptionInfo]_>>>", _checkOptionInfo);
    },
    //#endregion
  },
  mounted() {
    // // dev-log
    // console.log("[Dev_Log][]_>>>", this.$slots.default, new Date().getTime());
  },
};
</script>

<!-- 
  基础下拉 
  箭头展示
  hover/click 下拉展示

  多选 - tag 选中

  下拉分组
  远程下拉
  

  事件绑定
  选中事件
  改变事件



  单选 —— 点击 select 弹出下拉框，点击 option 完成赋值。
禁用 —— select 和 option 都有 disabled 选项用于禁用。
清空 —— 如果 select 中有内容，鼠标悬浮在 input 上显示删除图标，点击执行删除操作。
多选（平铺展示和数字显示数量两种方式） —— 参数 model 变为数组，点击下拉菜单中的选项添加或删除数组中的值。
自定义模板 —— option 中定义了 slot 插槽，默认加了 span 显示内容。可以修改 el-option 标签中内容来自定义模板。
分组 —— 使用 option-group 组件来实现分组效果。
搜索 —— 通过正则匹配搜索项，不符合搜索项的控制 v-show 隐藏
创建条目 —— 在 select 中添加额外 option（一般 option 都是通过 slot 插槽传递的），如允许创建条目，则显示这条 option ,option 的内容显示为查询内容。

 -->
