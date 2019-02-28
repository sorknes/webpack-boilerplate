// -------------------------------------------------------------------------------
//
// Description: Add production specific webpack configurations
// ===============================================================================
//

const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const jsonImporter = require('node-sass-json-importer')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const merge = require('webpack-merge'),
  common = require('./webpack.config.common.js')

module.exports = merge(common, {
  mode: 'production',

  output: {
    filename: './scripts/[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },

  module: {
    rules: [
      {
        test: /\.(sass|scss)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
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

  plugins: [
    new CleanWebpackPlugin(['dist']),
    new MiniCssExtractPlugin({
      filename: './styles/[name].css',
      chunkFilename: './styles/[id].css',
    }),
  ],
})
