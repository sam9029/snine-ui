<template>
  <div id="app">
    <div class="left"></div>
    <div class="right">
      <SnButton />
      <!-- <SnIcon /> -->
    </div>
  </div>
</template>

<script>
import SnButton from "./examples/SnButton.vue";
// import SnIcon from "./examples/SnIcon.vue";
export default {
  components: {
    SnButton,
    // SnIcon,
  },
};
</script>
