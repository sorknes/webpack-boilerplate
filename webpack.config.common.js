// -------------------------------------------------------------------------------
//
// Description: Add common webpack configurations
// ===============================================================================
//

const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const SvgSpriteHtmlWebpackPlugin = require('svg-sprite-html-webpack')
const glob_entries = require('webpack-glob-folder-entries')

const PATHS = {
  src: './src',
  styles: './src/assets/styles/scss',
  images: './src/assets/images',
  scripts: './src/assets/scripts',
  templates: './src/templates',
}

function returnEntries(globPath) {
  let entries = glob_entries(globPath, true)
  let folderList = new Array()
  for (let folder in entries) {
    folderList.push(path.join(__dirname, entries[folder]))
  }
  return folderList
}

module.exports = {
  entry: [`${PATHS.scripts}/main.js`, `${PATHS.styles}/wb-core.scss`],

  module: {
    rules: [
      {
        test: /\.html$|njk|nunjucks/,
        use: [
          { loader: 'html-loader', options: { minimize: true } },
          {
            loader: 'nunjucks-html-loader',
            options: {
              searchPaths: [...returnEntries(`${PATHS.src}/**/`)],
            },
          },
        ],
      },
      {
        test: /\.svg$/,
        exclude: /node_modules/,
        use: 'svg-url-loader',
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: `nunjucks-html-loader!${PATHS.src}/index.njk`,
      filename: 'index.html',
      inject: 'body',
    }),
    new HtmlWebpackPlugin({
      template: `nunjucks-html-loader!${PATHS.src}/about.njk`,
      filename: 'about.html',
      inject: 'body',
    }),
    new SvgSpriteHtmlWebpackPlugin({
      includeFiles: [`${PATHS.images}/icons/*.svg`],
    }),
  ],
}
