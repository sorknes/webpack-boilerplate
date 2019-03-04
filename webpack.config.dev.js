// -------------------------------------------------------------------------------
//
// Description: Add development specific webpack configurations
// ===============================================================================
//

const path = require('path')
const merge = require('webpack-merge')
const common = require('./webpack.config.common.js')

module.exports = merge(common, {
  mode: 'development',

  module: {
    rules: [
      {
        test: /\.(scss|sass)$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ],
  },

  devtool: 'inline-source-map',

  devServer: {
    port: 2010,
    contentBase: './src',
  },
})
