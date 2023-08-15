<template>
  <div id="app">
    <div class="left"></div>
    <div class="right">
      <!-- <SnButtonComp /> -->
      <!-- <SnIconComp /> -->
      <!-- <SnUploadComp /> -->
      <!-- <SnTagComp /> -->
      <!-- <SnSelectComp /> -->
      <SnInputComp />
    </div>
  </div>
</template>

<script>
// import SnButtonComp from "./demo/SnButton.vue";
// import SnIconComp from "./demo/SnIcon.vue";
// import SnUploadComp from "./demo/SnUpload.vue";
// import SnTagComp from "./demo/SnTag.vue";
// import SnSelectComp from "./demo/SnSelect.vue";
import SnInputComp from "./demo/SnInput.vue";
export default {
  name: "APP",
  components: {
    // SnButtonComp,
    // SnIconComp,
    // SnUploadComp,
    // SnTagComp,
    // SnSelectComp,
    SnInputComp,
  },
};
</script>
