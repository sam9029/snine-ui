import SnUpload from "./src/upload.vue";

/* istanbul ignore next */
SnUpload.install = function (Vue) {
  Vue.component(SnUpload.name, SnUpload);
};

export default SnUpload;
