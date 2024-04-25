/**
 * @type {import('@vue/cli-service').ProjectOptions}
 */
module.exports = {
  lintOnSave: false,
  chainWebpack: config => {
    // 禁用运行时 ts 类型检查
    config.plugins.delete('fork-ts-checker')
    // 禁用 Prettier
    config.module
      .rule('vue')
      .use('vue-loader')
      .tap(options => {
        options.prettify = false
        return options
      })
  }
}
