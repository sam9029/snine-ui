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
    <!-- <sn-input v-model="InputValue" prefixIcon="sn-icon-plus">
      <span slot="prepend">pre</span>
    </sn-input>
    <sn-input v-model="InputValue" suffixIcon="sn-icon-search">
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
    <sn-input v-model="InputValue" prefixIcon="sn-icon-plus">
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
    <sn-input type="number" v-model="InputValue" />
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      InputValue: "12",
    };
  },
};
</script>
