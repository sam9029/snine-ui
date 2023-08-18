<template>
  <li class="sn-select__downdrop-item">
    <slot />
  </li>
</template>

<script>
export default {
  name: "SnOption",
  componentName: "SnOption",
  inject: ["SnSelect"],
  props: {
    label: [String, Number],
    value: [String, Number],
  },
  data() {
    return {};
  },
  computed: {
    curLabel() {
      return this.label || this.value || "";
    },
    curValue() {
      return this.value || this.label || "";
    },
  },
  mounted() {
    // // dev-log
    // console.log("[Dev_Log][inject]_>>>", this.SnSelect);
  },
};
</script>
