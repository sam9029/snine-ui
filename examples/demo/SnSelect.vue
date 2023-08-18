<template>
  <div>
    {{ value }}
    <hr />
    <h5>Array</h5>
    <sn-select v-model="value">
      <sn-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
        >{{ item.label }}</sn-option
      >
    </sn-select>
    <!-- <h5>Object</h5>
    <sn-select>
      <sn-option v-for="(value, name) in objectOpt" :key="value">{{
        name
      }}</sn-option>
    </sn-select> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      options: [
        {
          value: "op1",
          label: "黄金糕",
        },
        {
          value: "op2",
          label: "双皮奶",
        },
      ],
      value: "op1",
      objectOpt: {
        title: "How to do lists in Vue",
        author: "Jane Doe",
        publishedAt: "2016-04-10",
      },
    };
  },
};
</script>

<style scoped>
h5 {
  text-align: left;
}
</style>
