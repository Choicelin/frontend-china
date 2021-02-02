/**
 * Creator: JIZHUA<413807584@qq.com>
 * Date: 2019-02-23
 * Time: 11:25
 */

const CompressionWebpackPlugin = require('compression-webpack-plugin')
const productionGzipExtensions = /\.(js|css|json|txt|html|ico|svg)(\?.*)?$/i
const IS_PROD = ['production', 'prod'].includes(process.env.NODE_ENV)
module.exports = {
  productionSourceMap: process.env.NODE_ENV !== 'production',
  configureWebpack: config => {
    if (IS_PROD) {
      const plugins = []
      plugins.push(
        new CompressionWebpackPlugin({
          filename: '[path].gz[query]',
          algorithm: 'gzip',
          test: productionGzipExtensions,
          threshold: 10240,
          minRatio: 0.8
        })
      )
      config.plugins = [...config.plugins, ...plugins]
    }
  },
  chainWebpack: config => {
    config.module
      .rule('images')
      .use('image-webpack-loader')
      .loader('image-webpack-loader')
      .options({
        mozjpeg: { progressive: true, quality: 65 },
        optipng: { enabled: false },
        pngquant: { quality: '65-90', speed: 4 },
        gifsicle: { interlaced: false },
        webp: { quality: 75 }
      })
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: '@import "@/styles/_variable.scss";'
      }
    }
  },

  devServer: {
    open: !IS_PROD,
    host: '0.0.0.0',
    port: 8382,
    https: false,
    hotOnly: false,
    proxy: {
      '/api': {
        target: process.env.VUE_APP_BASE_API || 'http://127.0.0.1:8080',
        changeOrigin: true
      }
    }
  }
}
