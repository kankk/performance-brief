const commonConfig = require('./webpack.config')

const merge = require('webpack-merge')

const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(commonConfig, {
  mode: "development",
  devtool: "source-map",
  // entry: './test/browser/index.js',
  entry: {
    index: './test/browser/index.ts'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  module: {
    rules: [{
      test: /\.less$/,
      use: ['style-loader', 'css-loader', 'less-loader']
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './test/browser/index.html'
    }),
  ],
  devServer: {
    openPage: 'index.html',
    port: 5000,
    host: 'localhost',
  },
})