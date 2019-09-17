'use strict'
const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.config.base');
const MiniCssExtractPlugin  = require('mini-css-extract-plugin');
//const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = merge(baseConfig, {
  mode: 'production',
  entry:path.join(__dirname,'../src/index.js'),
  output: {
    filename: "bundle.js",
    path: path.join(__dirname,'../dist')
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendor",
          chunks: "all",
        },
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.css?$/,
        use:[
          // MiniCssExtractPlugin.loader,
          // {
          //   loader: 'css-loader',
          //   options: {
          //     url: false
          //   }
          // },
          'vue-style-loader',
          'css-loader',
        ]
      }, {
        test: /\.styl(us)?$/,
        use: [
          'vue-style-loader',
          'css-loader',
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
    new MiniCssExtractPlugin({
      filename: 'style/focus.index.[contenthash:8].css'
    })
  ]
})
