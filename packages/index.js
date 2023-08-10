// 此！！！文件为打包入口文件

// 引入样式(包含了 icon)
import "../examples/assets/style/index.scss";

// 引入组件
import SnIcon from "../packages/icon";
import SnButton from "../packages/button";

const components = [SnIcon, SnButton];

const install = function (Vue, opts = {}) {
  components.forEach((component) => {
    Vue.component(component.name, component);
  });

  // 全局 配置
  Vue.prototype.$SNINEUI = {
    size: opts.size || "",
    zIndex: opts.zIndex || 2000,
  };
};

// 判断是否是直接引入文件--浏览器环境中注册组件
if (typeof window !== "undefined" && window.Vue) {
  // 当window和window.Vue都存在 注册组件
  install(window.Vue);
}

// 将会在 examples/main.js 中以 SnineUI 引入
export default {
  /* 导出的对象必须具有 install，才能被 Vue.use() 方法安装
     在 main.js引入时会被调用
   */
  install,
  SnIcon,
  SnButton,
};