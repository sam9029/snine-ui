import SnTag from "./src/tag.vue";

/* istanbul ignore next */
SnTag.install = function (Vue) {
  Vue.component(SnTag.name, SnTag);
};

export default SnTag;
