// -------------------------------------------------------------------------------
//
// Description: Add production specific webpack configurations
// ===============================================================================
//

const path = require('path'),
  CleanWebpackPlugin = require('clean-webpack-plugin'),
  MiniCssExtractPlugin = require('mini-css-extract-plugin')

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
          'css-loader',
          'postcss-loader',
          'sass-loader',
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
