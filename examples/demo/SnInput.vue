<template>
  <div>
    {{ InputValue }}
    <hr />
    <sn-input v-model="InputValue" />
    <sn-input
      v-model="InputValue"
      prefixIcon="sn-icon-plus"
      suffixIcon="sn-icon-search"
    />
    <sn-input v-model="InputValue">
      <span slot="prepend">pre</span>
      <span slot="append">end</span>
    </sn-input>
    <sn-input
      v-model="InputValue"
      prefixIcon="sn-icon-plus"
      suffixIcon="sn-icon-search"
    >
      <span slot="prepend">pre</span>
      <span slot="append">end</span>
    </sn-input>
    <sn-input v-model="InputValue" clearable />
    <sn-input v-model="InputValue" clearable disabled />
    <!-- <sn-input v-model="InputValue" prefixIcon="sn-icon-plus">
      <span slot="prepend">pre</span>
    </sn-input>
    <sn-input size="medium" v-model="InputValue" suffixIcon="sn-icon-search">
      <span slot="append">end</span>
    </sn-input>
    <sn-input
      v-model="InputValue"
      size="small"
      prefixIcon="sn-icon-plus"
      suffixIcon="sn-icon-search"
    >
      <span slot="prepend">pre</span>
      <span slot="append">end</span>
    </sn-input>
    <sn-input size="mini" v-model="InputValue" prefixIcon="sn-icon-plus">
      <span slot="append">end</span>
    </sn-input>
    <sn-input v-model="InputValue" suffixIcon="sn-icon-search">
      <span slot="prepend">pre</span>
    </sn-input>
    <sn-input v-model="InputValue" disabled suffixIcon="sn-icon-search" />
    <sn-input v-model="InputValue" disabled>
      <span slot="prepend">pre</span>
      <span slot="append">end</span>
    </sn-input>
    <sn-input
      v-model="InputValue"
      prefixIcon="sn-icon-plus"
      suffixIcon="sn-icon-search"
      disabled
    >
      <span slot="prepend">pre</span>
      <span slot="append">end</span>
    </sn-input> -->
    <hr />
    <sn-input type="" v-model="InputValue" />
    <sn-input type="password" v-model="InputValue" />
    <sn-input type="number" v-model="InputValue" placeholder="input-number" />
    <!-- <sn-input type="color" v-model="InputValue" /> -->
    <!-- <sn-input type="range" v-model="InputValue" /> -->
    <!-- <sn-input type="radio" v-model="InputValue" /> -->
    <!-- <sn-input type="checkbox" v-model="InputValue" /> -->
    <sn-input
      type="textarea"
      v-model="InputValue"
      prefixIcon="sn-icon-plus"
      suffixIcon="sn-icon-search"
    />
    <sn-input
      disabled
      type="textarea"
      v-model="InputValue"
      prefixIcon="sn-icon-plus"
      suffixIcon="sn-icon-search"
    />
    <sn-input
      v-model="InputValue"
      prefixIcon="sn-icon-plus"
      suffixIcon="sn-icon-search"
    />
    <!-- <hr />
    <sn-input v-model="InputValue" />
    <sn-input v-model="InputValue" size="" placeholder="input-normal" />
    <sn-input v-model="InputValue" size="medium" placeholder="input-medium" />
    <sn-input v-model="InputValue" size="small" placeholder="input-small" />
    <sn-input v-model="InputValue" size="mini" placeholder="input-mini" /> -->
    <hr />
    <sn-input
      v-model="InputValue"
      type="number"
      :min="0"
      :showWordLimit="true"
    />
    <sn-input
      v-model="InputValue"
      type="number"
      :max="10"
      :showWordLimit="true"
    />
    <sn-input v-model="InputValue" :maxlength="10" />
    <sn-input v-model="InputValue" :minlength="10" />
    <sn-input v-model="InputValue" :maxlength="10" :showWordLimit="true" />
    <sn-input v-model="InputValue" :minlength="10" :showWordLimit="true" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      InputValue: "SaaS",
    };
  },
  beforeCreate() {},
};
</script>
