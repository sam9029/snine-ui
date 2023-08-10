import SnButton from "./main/button.vue";

/* istanbul ignore next */
SnButton.install = function (Vue) {
  Vue.component(SnButton.name, SnButton);
};

export default SnButton;
