import Vue from "vue";
import App from "./App.vue";
// import router from "./router";

//#region 打包前本地组件文件直接引入
// 引入组件 (../packages/index.js 中 做了注册组件处理&引入样式处理)
import SnineUI from "../packages/index.js";
// 全局挂载
Vue.use(SnineUI);
//#endregion

//#region 打包后引入
// import SnineUI from "../lib/snineUI.umd.min.js";
// import "../lib/snineUI.css";
// Vue.use(SnineUI);
//#endregion

Vue.config.productionTip = false;
new Vue({
  // router,
  render: (h) => h(App),
}).$mount("#app");
