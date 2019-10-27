module.exports = {
  root: true,
  env: {
    node: true
  },
  //Parsing error: Unexpected token < 报错提示    https://blog.csdn.net/z_xuewen/article/details/85316819
  // plugins: ["transform-object-rest-spread"],
  //去除esline  https://blog.csdn.net/qq_37026254/article/details/88246044
  //https://blog.csdn.net/weixin_39194138/article/details/82147832
  extends: [
    "plugin:vue/essential",
     "@vue/prettier"
    ],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off"
  },
  parserOptions: {
    parser: "babel-eslint"
  }
};
