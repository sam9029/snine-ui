module.exports = {
  presets: ["@vue/cli-plugin-babel/preset"],
  // presets: ["@vue/cli-plugin-babel/preset", "@vue/app"],
  // 允许两种编码引入方式共存,也就是common规范与es6规范的共存处理
  sourceType: "unambiguous",
};
