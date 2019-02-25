// -------------------------------------------------------------------------------
//
// Description: Add production specific webpack configurations
// ===============================================================================
//

const path = require('path'),
  CleanWebpackPlugin = require('clean-webpack-plugin')

const merge = require('webpack-merge'),
  common = require('./webpack.config.common.js')

module.exports = merge(common, {
  mode: 'production',

  output: {
    filename: './scripts/[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },

  plugins: [new CleanWebpackPlugin(['dist'])],
})
