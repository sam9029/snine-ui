import SnRadio from "./src/radio.vue";

/* istanbul ignore next */
SnRadio.install = function (Vue) {
  Vue.component(SnRadio.name, SnRadio);
};

export default SnRadio;
