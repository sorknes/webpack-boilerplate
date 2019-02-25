// -------------------------------------------------------------------------------
//
// Description: Add development specific webpack configurations
// ===============================================================================
//

const merge = require('webpack-merge'),
  common = require('./webpack.config.common.js')

module.exports = merge(common, {
  mode: 'development',

  devtool: 'inline-source-map',

  devServer: {
    port: 2010,
    contentBase: './src',
  },
})
