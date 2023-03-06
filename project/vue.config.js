const { defineConfig } = require('@vue/cli-service')
const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')

module.exports = defineConfig({
  publicPath:"./",
  transpileDependencies: true,
  lintOnSave:false,
  // true设置是否再开发环境下进行验证
  // warning 开启每次保存都验证
  // /设置css的主入口文件
  css:{
    loaderOptions:{
      scss:{
        additionalData:`@import"./src/styles/style.scss";`
      }
    }
  },
  configureWebpack:{
    plugins: [
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
    ],
  }

})
