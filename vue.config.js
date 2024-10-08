const { defineConfig } = require("@vue/cli-service");
const path = require("path");

module.exports = defineConfig({
  publicPath: process.env.NODE_ENV === "development" ? "/" : "/blog",
  transpileDependencies: true,

  pluginOptions: {
    "style-resources-loader": {
      preProcessor: "less",
      patterns: [path.resolve(__dirname, "./src/styles/variables.less")],
    },
  },
  // 设置标题
  chainWebpack: (config) => {
    config.plugin("html").tap((args) => {
      args[0].title = "雨过天晴";
      return args;
    });
  },
});
