# 注意 在 element-ui 使用 select 中调用 option (好像调用了两个组件一样，UN去理解背后逻辑)
~~~html
<el-select>
    <el-option><el-option>
</el-select>
~~~

## 如何在组件源码 设计时 将 option 套用在 select 中？（理解一点了）

- 注意slot 套了两层
- 在 <sn-select> 调用 <sn-option> 时（激活<sn-select>的slot，该slot指向<sn-option>）
- 在 <sn-option> 接收上面传入的slot 时（激活自身的slot，该slot options-item 的真正放置位置）
    
看下面的

- 简易源码
~~~html
<!-- 调用 -->
<sn-select>
    <sn-option></sn-option>
</sn-select>
<!-- or -->
<sn-select>
    <sn-option v-for='item in options'></sn-option>
</sn-select>

<!-- sn-select 源码-->
<div class='sn-select'>
    <!-- 注意此没有直接调用 sn-option 而是直接插槽 -->
    <div class='sn-select__popper'>
        <slot></slot>
    </div>
</div>

<!-- sn-option 源码-->
<div class='sn-option'>
    <slot></slot>
</div>

~~~




# select 和 option 组件分离 

## option 采用 prop传入 label/value 的原因

## 给select 传入初始值，如何拿到option中对应的label？

## 点击 option ，select 如何知道？