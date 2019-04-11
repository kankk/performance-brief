const commonConfig = require('./webpack.config')

const merge = require('webpack-merge')

const path = require('path');

module.exports = merge(commonConfig, {
  mode: "production"
})