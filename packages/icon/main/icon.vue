<template>
  <i :class="'sn-icon-' + name"></i>
</template>

<script>
export default {
  name: "SnIcon",
  props: {
    name: String,
  },
};
</script>

<!-- 
  icon类型
 -->
