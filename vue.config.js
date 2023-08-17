const path = require("path");
const { defineConfig } = require("@vue/cli-service");

module.exports = defineConfig({
  // devServer: {
  //   // 例子中 ·地址· 的根据实际情况来，写
  //   proxy: {
  //     "/api": {
  //       target: "https://bizapi.csdn.net/blink/api",
  //       changeOrigin: true,
  //       // pathRewrite: {
  //       //   "^/api": "",
  //       // },
  //     },
  //   },
  // },
  transpileDependencies: true,
  publicPath: "./", // 配置打包后根目录路径（解决scss引入icon，打包后路径错误的问题）
  pages: {
    index: {
      // 修改入口
      entry: "examples/main.js",
      template: "public/index.html",
      filename: "index.html",
    },
  },
  chainWebpack: (config) => {
    config.resolve.alias.set("@", path.resolve(__dirname, "examples")); // 设置根目录为 src 文件夹
    config.module
      .rule("js")
      .include.add("/packages")
      .end()
      .use("babel")
      .loader("babel-loader")
      .tap((options) => {
        return options;
      });
  },
});
