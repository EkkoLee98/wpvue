'use strict'

const webpack = require('webpack')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.config.base')

const HOST = 'localhost'
const PORT = 8080

module.exports = merge(baseConfig, {
  mode: 'development',
  devtool:'#cheap-module-eval-source-map',
  devServer: {
    proxy: {
      '/api':{
        // target:'http://jsonplaceholder.typicode.com',
        target: 'http://127.0.0.1:808/public',
        changeOrigin:true,
        pathRewrite:{
          '^/api':''
        }
      },
      // '/ms':{
      //     target: 'https://www.easy-mock.com/mock/592501a391470c0ac1fab128',
      //     changeOrigin: true
      // }
    },
    clientLogLevel: 'warning',
    hot: true,
    contentBase: 'dist',
    compress: true,
    host: HOST,
    port: PORT,
    open: true,
    overlay: { warnings: false, errors: true },
    publicPath: '/',
    quiet: true
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          {
            loader: 'css-loader',
            options: {
              url: true
            }
          },
        ]
      }, {
        test: /\.styl(us)?$/,
        use: [
          'vue-style-loader',
          {
            loader: 'css-loader',
            options: {
              url: true
            }
          },
          {
            loader:'postcss-loader',
            options:{
              sourceMap:true
            }
          },
          'stylus-loader'
        ]
      }
    ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
})
