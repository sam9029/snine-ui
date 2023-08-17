# 自定义 input 封装组件 绑定 v-model 的实现原理
- 先看代码，在看解释
~~~html
<!-- // 第⼀⾏的代码其实只是第⼆⾏的语法糖。 -->
<input v-model="value1" /> <!-- form 组件 input-->
<input v-bind:value="value1" v-on:input="value1 = $event.target.value" />

<sn-input v-model="value1" /> <!-- 自定义 组件 sn-input-->
<sn-input v-bind:value="value1" v-on:input="value1 = $event.target.value" />
~~~
- 解释
> 所以  sn-input 组件中可以使用 props value名称来接收 value1的值
> sn-input 组件中也可以 通过 emit 接收 input 自定义事件

## 极简原理代码
~~~html
// father.vue
<sn-input v-model="InputValue" />
~~~

~~~html
// son.vue
<template>
  <div>
    <!-- 输入 -->
    <input
      ref="input"
      type="text"
      :value="curInputValue"
      :placeholder="placeholder"
      @input="handleInputValueChange"
    />
  </div>
</template>

<script>
export default {
  name: "SnInput",
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
    handleInputValueChange(event) {
      this.curInputValue = event.target.value;
    },
  },
};
</script>
~~~


# 修改placeholder文字颜色
~~~css
    input::placeholder{
        color:#999;
    }
~~~


# 使用 v-model / model 子组件无法绑定初始值

v-model在input元素上时 
~~~html
<input type="text" class="form-control" placeholder="请输入品牌名称" v-model="sth">
~~~


# 疑问：为什么input输入框value的内容就是v-model绑定属性的值？（已解决：参考第一点）

> https://blog.csdn.net/m0_67841039/article/details/124796636

# textarea 由默认字体 monospace字体 需改修

# icon 对 type='textarea' 不显示

# 基本 没有对 type（text，textarea，password）之外的原生type做样式处理

# 关于input [type=number]时上下的操作按 样式控制UN（下面的目前只能控制-隐现）
> https://blog.csdn.net/Sabrina_cc/article/details/124725110

~~~css
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    // appearance: button !important;
    display: none;
  }
~~~

# input 前后置(元素&内容) 布局逻辑 UN
前置内容
前置元素
后置内容
后置元素

# input 密码框控制隐藏显示

控制 type = 'text' or type = 'password'