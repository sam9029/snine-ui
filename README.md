# Snine-UI
S9-UI or Snine-UI

# 创建UI组件库及发布

## 1. vue/cli（推荐） 或其他方式创建项目模板文件

> vue/cli（推荐）记得选择 (babel)/(CSS Pre-processors)/(Linter / Formatter)

## 2. init手动初始化项目目录
![](https://image-static.segmentfault.com/229/604/2296042972-dcab79c13f485b8b_fix732)

## 3. webpack 配置项目
~~~js
const path = require("path");
const { defineConfig } = require("@vue/cli-service");

module.exports = defineConfig({
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
~~~


### 1.1.文件结构

### 1.2. packages component 模板结构

### 1.3. 全局注册

## 4. BEM思想
block element modifier

## 5. 打包

## 4.npm发布


> 参考 reference
> [创建UI组件库__搭建-发布-优化-全套流程](https://segmentfault.com/a/1190000039748000?utm_source=sf-similar-article)


# 组件规划
- Icon **✔**
- Button **✔**
- tag **✔**
- Select **UN** --hard
- Upload **UN** --hard
- tabs
- Card
- Cascader
- Switch
- Table
- Form
- Input
- Radio
- Checkbox

# Q&A

## 单文件 忽视 eslint 检查
- 头部加入如下 注释即可
~~~js
/*eslint-disable*/
~~~

## icon 大小 用 `font-size` 设置

## 使用webpack时打包后-解析的scss文件中的字体路径出错 

- **打包前**文件路径和scss文件
```
- fonts
    - element-icons.woff
    - element-icons.ttf
- scss
    - icon.scss
```

```scss
$--font-path: "./fonts" !default;
$--font-display: "auto" !default;
$--icon-width-base: 20px !default;
$--icon-height-base: 20px !default;

@font-face {
  font-family: "element-icons";
  /* chrome, firefox */ /* chrome, firefox, opera, Safari, Android, iOS 4.2+*/
  src: url("#{$--font-path}/element-icons.woff") format("woff"),
    url("#{$--font-path}/element-icons.ttf") format("truetype");
  font-weight: normal;
  font-display: $--font-display;
  font-style: normal;
}
```

- **打包后**文件路径和scss文件

```
- fonts
    - element-icons.f1a45d74.ttf
    - element-icons.ff18efd1.woff
- snineUI.css
```

```css
@font-face {
  font-family: element-icons;
  /*此处url 应为 url(./fonts/element-icons.ff18efd1.woff) 但是打包后不是的*/
  src: url(/fonts/element-icons.ff18efd1.woff) format("woff"),
    url(/fonts/element-icons.f1a45d74.ttf) format("truetype");
  font-weight: 400;
  font-display: "auto";
  font-style: normal;
}
```

- **vue.config.js 配置**

**注意：`fonts/element-icons.ff18efd1.woff` 和 `./fonts/element-icons.ff18efd1.woff` 效果是一致的**

```js
// 隐去的是 试过但是无效的
const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  pages: {
    index: {
      // 修改入口
      entry: "examples/main.js",
      template: "public/index.html",
      filename: "index.html",
    },
  },
  // rules: [
  //   {
  //       test: /\.scss?$/,
  //       loader: "sass-loader",
  //       use: extractTextPlugin.extract({
  //         publicPath:'.',
  //       })
  //   },
  // ],
  chainWebpack: (config) => {
    config.module
      .rule("js")
      .include.add("/packages")
      .end()
      .use("babel")
      .loader("babel-loader")
      .tap((options) => {
        return options;
      });
    // config.module
    //   .rule("css")
    //   .test(/\.css$/)
    //   .use("style-loader")
    //   .loader("style-loader")
    //   .end()
    //   .use("css-loader")
    //   .loader("css-loader");
    // config.module
    //   .rule("svg")
    //   .test(/\.(svg|otf|ttf|woff2?|eot|gif|png|jpe?g)(\?\S*)?$/)
    //   .use("url-loader")
    //   .loader("url-loader")
    //   .options({
    //     limit: 10000,
    //     name: path.posix.join("static", "[name].[hash:7].[ext]"),
    //   });
  },
});

```

### 解决方案 publicPath配置
~~~js
  // vue.config.js
  module.exports = defineConfig({
    publicPath:'./', // 配置打包后根目录路径（解决scss引入icon，打包后路径错误的问题）
  })
~~~
