const TerserPlugin = require('terser-webpack-plugin')
module.exports = {
  devServer: {
    proxy: {
      '/test': {
        target: 'https://192.168.30.13',
        changeOrigin: true,
        secure: false
      }
    }
  },
  productionSourceMap: false,
  configureWebpack: config => {
    const plugins = []
    plugins.push(
      new TerserPlugin({
        terserOptions: {
          warnings: false,
          compress: {
            drop_console: true,
            drop_debugger: false,
            pure_funcs: ["console.log"] //移除console
          }
        },
        sourceMap: false,
        parallel: true
      })
    )
    config.plugins = [...config.plugins, ...plugins];
  }
}