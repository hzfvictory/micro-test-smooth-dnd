// vue.config.js
const path = require("path");
const { padStart } = require('lodash');
const resolve = function (dir) {
  return path.join(__dirname, dir);
};
const getSentryReleaseVersion = () => {
  const d = new Date();
  return `${d.getFullYear()}${padStart(d.getMonth() + 1, 2, '0')}${padStart(d.getDate(), 2, '0')}_${d.getHours()}${d.getMinutes()}`;
};
const isProduction = process.env.NODE_ENV === "production"; //是否是生产环境
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;

process.env.releaseVersion = process.env.NODE_ENV === 'production' ? `operating-platform-channel_${process.env.VUE_APP_TITLE}_${getSentryReleaseVersion()}` : '';

module.exports = {
  runtimeCompiler: true,
  productionSourceMap: isProduction,
  outputDir: process.env.outputDir,
  publicPath: "/",
  configureWebpack: (config) => {
  },
  chainWebpack: (config) => {
    config.resolve.alias.set("@", resolve("src"));
    if (isProduction) {
      config.optimization.minimize(true); // 测试生产环境不压缩js代码
      config.optimization.splitChunks({
        chunks: "all",
        cacheGroups: {
          common: {
            name: "common",
            chunks: "initial",
            priority: 2,
            minChunks: 2,
          },
        },
      });
    }
    config.plugin('html')
      .tap(args => {
        args[0].title = require('./src/settings.js').title || 'Vue Element Admin';
        return args;
      })
  },
  // webpack-dev-server 相关配置
  devServer: {
    host: "127.0.0.1",
    port: "8080",
    disableHostCheck: true,
    historyApiFallback: true,
    headers: {
      "Access-Control-Allow-Origin": "*"
    },
    hot: true,
    open: true,
    overlay: {
      warning: false,
      error: true,
    },
    proxy: {
      '/permission': {
        target: 'http://59.151.100.24:15684/',
      },
    },
  },
  // 第三方插件配置
  pluginOptions: {
    // ...
  },
};
