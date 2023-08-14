import SnSelect from "./src/select.vue";

/* istanbul ignore next */
SnSelect.install = function (Vue) {
  Vue.component(SnSelect.name, SnSelect);
};

export default SnSelect;
