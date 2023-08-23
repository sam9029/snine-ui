<template>
  <div>
    <hr />
    <p class="choose-value">{{ valueTest }} ||</p>
    <!-- 组件使用 -->
    <sn-radio
      v-for="item in radioDemo"
      v-model="valueTest"
      :key="item.label"
      :radioName="item.name"
      :label="item.label"
      :disabled="item.disabled"
      :labelPosition="item.labelPosition"
    />
    <hr />
    <p class="choose-value">{{ valueGroupTest }} ||</p>
    <sn-radio-group v-model="valueGroupTest">
      <sn-radio
        v-for="item in radioGroupDemo"
        :key="item.label"
        :label="item.label"
        :disabled="item.disabled"
      />
    </sn-radio-group>
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
      valueGroupTest: "选项4",
      radioGroupDemo: [
        {
          label: "选项1",
          disabled: null,
        },
        {
          label: "选项2",
          disabled: null,
        },
        {
          label: "选项3",
          disabled: null,
        },
        {
          label: "选项4",
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

<style scoped>
.choose-value {
  color: #999;
}
</style>
