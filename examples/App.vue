<template>
  <div id="app">
    <div class="left"></div>
    <div class="right">
      <!-- <SnButton /> -->
      <!-- <SnIcon /> -->
      <!-- <SnUpload /> -->
      <SnSelect />
    </div>
  </div>
</template>

<script>
// import SnButton from "./demo/SnButton.vue";
// import SnIcon from "./demo/SnIcon.vue";
// import SnUpload from "./demo/SnUpload.vue";
import SnSelect from "./demo/SnSelect.vue";
export default {
  name: "APP",
  components: {
    // SnButton,
    // SnIcon,
    // SnUpload,
    SnSelect,
  },
};
</script>
