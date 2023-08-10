import Vue from "vue";
import App from "./App.vue";
// import router from "./router";

// 引入样式(包含了 icon)
import "./assets/style/index.scss";

// 引入组件
import SnineUI from "../packages/index.js";
// 全局挂载
Vue.use(SnineUI);

Vue.config.productionTip = false;
new Vue({
  // router,
  render: (h) => h(App),
}).$mount("#app");
