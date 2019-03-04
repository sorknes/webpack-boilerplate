// // -------------------------------------------------------------------------------
// //
// // Description: Add production specific webpack configurations
// // ===============================================================================
// //

// const path = require('path')
// const CleanWebpackPlugin = require('clean-webpack-plugin')
// const jsonImporter = require('node-sass-json-importer')
// const MiniCssExtractPlugin = require('mini-css-extract-plugin')

// const merge = require('webpack-merge'),
//   common = require('./webpack.config.common.js')

// module.exports = merge(common, {
//   mode: 'production',
//   output: {
//     filename: './scripts/[name].bundle.js',
//     path: path.resolve(__dirname, 'dist'),
//     publicPath: './',
//   },

//   module: {
//     rules: [
//       {
//         test: /\.(sass|scss)$/,
//         use: [
//           {
//             loader: MiniCssExtractPlugin.loader,
//           },
//           {
//             loader: 'css-loader',
//             options: {
//               importLoaders: 1,
//             },
//           },
//           'postcss-loader',
//           'resolve-url-loader',
//           {
//             loader: 'sass-loader',
//             options: {
//               importer: jsonImporter(),
//             },
//           },
//         ],
//       },
//       {
//         test: /\.svg$/,
//         exclude: /node_modules/,
//         use: [
//           {
//             loader: 'url-loader',
//             options: {
//               limit: 10000,
//               fallback: 'file-loader',
//               name: '[name].[ext]',
//               outputPath: './images/icons',
//             },
//           },
//         ],
//       },
//       {
//         test: /\.(png|jpg|gif)$/,
//         loader: 'file-loader',
//         options: {
//           name: '[name].[ext]',
//           publicPath: '../images',
//           outputPath: './images',
//         },
//       },
//     ],
//   },

//   plugins: [
//     new CleanWebpackPlugin(['dist']),
//     new MiniCssExtractPlugin({
//       filename: './styles/[name].css',
//       chunkFilename: './styles/[id].css',
//     }),
//   ],
// })
