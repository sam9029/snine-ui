import SnIcon from "./src/icon.vue";

/* istanbul ignore next */
SnIcon.install = function (Vue) {
  Vue.component(SnIcon.name, SnIcon);
};

export default SnIcon;
