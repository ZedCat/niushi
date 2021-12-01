// vue.config.js
const path = require('path')
const themePath = path.join(__dirname, './src/theme.less')
module.exports = {
  lintOnSave: false,
  devServer: {
    overlay: {
      warning: false,
      errors: false
    }
  },
  // css: {
  //   loaderOptions: {
  //     less: {
  //       modifyVars: {
  //         hack: `true; @import "${themePath};`
  //       }
  //     }
  //   }
  // },
  css: {
    loaderOptions: {
      less: {
        modifyVars: {
          // 直接覆盖变量
          // 'text-color': '#111',
          // 'border-color': '#eee',
          // 或者可以通过 less 文件覆盖（文件路径为绝对路径）
          hack: `true; @import  @import "${themePath};`
        }
      }
    }
  }
}
