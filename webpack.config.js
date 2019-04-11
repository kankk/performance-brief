const path = require('path');

const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  module: {
    rules: [{
      test: /\.ts$/,
      use: 'ts-loader',
      exclude: /node_modules/
    }]
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  plugins: [
    new CleanWebpackPlugin()
  ]
}