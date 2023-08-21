
关于 radio 组件

写起来 着实吃力，一开始除了样式，组件的业务逻辑完全无从下手，更甚至的是连一点思路都没有

虽然样式能写，但是就勉强能看

本来是周五写的，说写完radio 还能把select想想，结果完全没有思路，整个人都emo住了

周末直接摆烂

周一今日来，思路稍微开了，但是突破口是 发现自己对原生的 input[type='radio'] 的使用都不了解（甚至不确定以前了解过没有）

只能用竟然来形容我自己的震惊，就跟飞机没有油还在飞行一样

所以非常有必要先来温习一下原生 input[type='radio'] 的使用


# 原生 input[type='radio'] 温习

- `name`
  一个字符串属性，适用于多个单选的按钮组，只要每一组拥有唯一的 name 属性即可实现 组内唯一选中。

- `checked`
  一个布尔值属性，如果出现，代表这个单选按钮是组中被选中的那个。

- `value`
  value 属性是所有 `<input>` 元素共有的属性之一；然而，对于 radio 类型的输入，有特殊用途：当表单提交时，只有当前选定的单选按钮才会提交到服务器，并且报告的值为 value 属性的值。如果没有指定 value，默认为字符串 on。

- `required`
  required 属性是所有 `<input>` 元素共有的属性之一。如果含有相同 name 的单选按钮组中任意一个按钮包含 required 属性，那么该组的单选按钮必须被选定，即使它并不需要应用该属性。

# vue2js 的 v-model 温习

v-model 指令在表单元素 `<input>`、`<textarea>` 及 `<select>` 元素上创建双向数据绑定。
它会根据控件类型自动选取正确的方法来更新元素。
尽管有些神奇，但 v-model 本质上不过是语法糖。**它负责监听用户的输入事件以更新数据，并对一些极端场景进行一些特殊处理**。

**v-model 会忽略所有表单元素的 value、checked、selected attribute 的初始值而总是将 Vue 实例的数据作为数据来源**。
你应该通过 JavaScript 在组件的 data 选项中声明初始值。

(重要) v-model 在内部为不同的输入元素使用不同的 property 并抛出不同的事件：

- text 和 textarea 元素使用 value property 和 input 事件；
- checkbox 和 radio 使用 checked property 和 change 事件；`注意此时 value 是定义选项元素的值，而不是类似input[type='text']的输入值`
- select 字段将 value 作为 prop 并将 change 作为事件。

**代码示例理解**

- text 和 textarea 元素

```html
<!-- - text 和 textarea 元素使用 value property 和 input 事件； -->
<input type="text" v-model="textValue" />
<!-- 相当于-->
<input type="text" :value="textValue" @input="handleInput" />

<textarea v-model="textareaValue" />
<!-- 相当于-->
<textarea :value="textareaValue" @input="handleInput" />
```

- checkbox 和 radio

```html
<!-- - checkbox 和 radio 使用 checked property 和 change 事件； -->

<input type="checkbox" v-model="checkboxValue" value="basketball" />
<input type="checkbox" v-model="checkboxValue" value="football" />
<!-- 相当于 同时 checked值 不需要在父组件定义-->
<input
  type="checkbox"
  :checked="checked"
  @change="handleChange"
  value="basketball"
/>
<input
  type="checkbox"
  :checked="checked"
  @change="handleChange"
  value="football"
/>

<!-- - checkbox 和 radio 使用 checked property 和 change 事件； -->

<input type="radio" v-model="radioValue" value="basketball" />
<input type="radio" v-model="radioValue" value="football" />
<!-- 相当于 同时 checked值 不需要在父组件定义-->
<input
  type="radio"
  :checked="checked"
  @change="handleChange"
  value="basketball"
/>
<input
  type="radio"
  :checked="checked"
  @change="handleChange"
  value="football"
/>
```

- select

```html
<!-- - select 字段将 value 作为 prop 并将 change 作为事件。 -->
<select v-model="selectValue">
  <option value="A">A</option>
  <option value="B">B</option>
</select>
<!-- 相当于 -->
<select :value="selectValue" @change="handleChange">
  <option value="A">A</option>
  <option value="B">B</option>
</select>
```

# input 自定义样式

## 控制选中时：使用伪元素在 元素内 粗线画圆线

通过 CSS 的 :before 或者 :after 伪元素,在 HTML 元素的外边绘制一条圆形边框线:

```css
css .circle {
  position: relative;
}

.circle:after {
  content: "";
  position: absolute;
  top: 5px;
  left: 5px;
  width: 50px;
  height: 50px;
  border: 1px solid #ccc;
  border-radius: 50%;
}
```

## input:checked{} 控制选中颜色
