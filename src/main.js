import Vue from "vue";
import App from "./App.vue";
import router from "./router";

// 引入样式
import "./assets/style/index.scss";

// 引入组件
import SnButton from "./components/button";

// 全局挂载
Vue.use(SnButton);

Vue.config.productionTip = false;
new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
