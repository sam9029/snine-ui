import SnUpload from "./main/upload.vue";

/* istanbul ignore next */
SnUpload.install = function (Vue) {
  Vue.component(SnUpload.name, SnUpload);
};

export default SnUpload;
