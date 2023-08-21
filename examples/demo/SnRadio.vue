<template>
  <div>
    {{ valueTest }}
    <hr />
    <!-- 组件使用 -->
    <sn-radio
      v-for="item in radioDemo"
      v-model="valueTest"
      :key="item.label"
      :name="item.name"
      :label="item.label"
      :disabled="item.disabled"
      :labelPosition="item.labelPosition"
    />
    <!-- <sn-radio v-model="opt2" label="选项1" /> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      valueTest: "选项4",
      radioDemo: [
        {
          label: "选项1",
          name: "ans",
          labelPosition: null,
          disabled: null,
        },
        {
          label: "选项2",
          name: "ans",
          labelPosition: null,
          disabled: null,
        },
        {
          label: "选项3",
          name: "ans",
          labelPosition: null,
          disabled: null,
        },
        {
          label: "选项4",
          name: "ans",
          labelPosition: "front",
          disabled: null,
        },
      ],
    };
  },
  computed: {
    checkedValue() {
      return this.radioDemo.map((item) => item.value);
    },
  },
};
</script>
