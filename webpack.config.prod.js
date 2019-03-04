// -------------------------------------------------------------------------------
//
// Description: Add production specific webpack configurations
// ===============================================================================
//

const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const merge = require('webpack-merge')
const common = require('./webpack.config.common.js')

module.exports = merge(common, {
  mode: 'production',

  output: {
    filename: './assets/scripts/[name].bundle.js',
    path: path.join(__dirname, '/dist'),
  },

  module: {
    rules: [
      {
        test: /\.(scss|sass)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: '../../assets/images',
            },
          },
        ],
      },
    ],
  },

  plugins: [
    new CleanWebpackPlugin(['./dist']),
    new CopyWebpackPlugin([
      { from: './src/assets/images', to: './assets/images', ignore: ['*.svg'] },
    ]),
    new MiniCssExtractPlugin({
      filename: './assets/styles/[name].css',
      chunkFilename: './assets/styles/[id].css',
    }),
  ],
})
