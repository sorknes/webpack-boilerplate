// -------------------------------------------------------------------------------
//
// Description: Add development specific webpack configurations
// ===============================================================================
//

const merge = require('webpack-merge')
const common = require('./webpack.config.common.js')
const jsonImporter = require('node-sass-json-importer')

module.exports = merge(common, {
  mode: 'development',

  module: {
    rules: [
      {
        test: /\.(sass|scss)$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
            },
          },
          'postcss-loader',
          {
            loader: 'sass-loader',
            // Apply the JSON importer via sass-loader's options.
            options: {
              importer: jsonImporter(),
            },
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
