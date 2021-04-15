/*
 * @Description:
 * @Author: zk-chen
 * @Date: 2021-04-14 10:29:52
 * @LastEditTime: 2021-04-15 16:56:21
 * @LastEditors: zk-chen
 * @FilePath: /bilibili-banner/vue.config.js
 */
const path = require('path')

module.exports = {
  publicPath: './', // 基本路径,打包时加上.
  outputDir: 'docs', // 'dist', 生产环境构建文件的目录

  // webpack配置
  chainWebpack: (config) => {
    config.resolve.symlinks(true)
  },
  configureWebpack: (config) => {
    if (process.env.VUE_APP_MODE === 'production') {
      // 为生产环境修改配置...
      config.mode = 'production'
    } else {
      // 为开发环境修改配置...
      config.mode = 'development'
    }

  },
  productionSourceMap: false, // 生产环境是否生成 sourceMap 文件
  // css相关配置

}