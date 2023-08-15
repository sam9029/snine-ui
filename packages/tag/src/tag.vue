<template>
  <div
    :class="[
      'sn-tag',
      type ? 'sn-tag--' + type : '',
      size ? 'sn-tag--' + size : '',
    ]"
    @click="handleClick"
  >
    <span v-if="$slots.default">
      <slot>tags</slot>
    </span>
    <span class="tag-close" v-if="closable" @click="handleClose($event)">
      <i class="sn-icon-close"></i>
    </span>
  </div>
</template>

<script>
// import Vue from 'vue'
export default {
  name: "SnTag",
  props: {
    type: String,
    size: String,
    closable: Boolean,
  },
  components: {},
  computed: {},
  data() {
    return {};
  },
  methods: {
    handleClick(e) {
      this.$emit("click", e);
    },
    handleClose(e) {
      this.$emit("close", e);
    },
  },
  mounted() {},
};
</script>
