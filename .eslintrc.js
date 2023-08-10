module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    "plugin:vue/essential",
    "eslint:recommended",
    "plugin:prettier/recommended",
  ],
  parserOptions: {
    parser: "@babel/eslint-parser",
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "linebreak-style": [0, "error", "windows"], //// 修改eslint规则 取消对 LF 和 CRLF 的检验
    "prettier/prettier": ["error", { endOfLine: "auto" }], //// 不让prettier检测文件每行结束的格式
  },
};
