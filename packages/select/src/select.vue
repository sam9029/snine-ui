<template>
  <!-- 不选原生 select，因为很多功能样式不能自定义，例如多选 -->
  <div class="sn-select">
    <!-- 选中 -->
    <input type="text" v-model="checkedValue" />
    <!-- 选项 -->
    <div>
      <div v-for="optItem in options" :key="optItem.value">
        {{ optItem.label }}
      </div>
    </div>
  </div>
</template>

<script>
// import Vue from 'vue'
export default {
  name: "SnSelect",
  props: {
    options: [Array, Object],
  },
  computed: {},
  data() {
    return {
      checkedValue: null,
    };
  },
  methods: {},
  mounted() {},
};
</script>

<style lang="scss" scoped></style>
