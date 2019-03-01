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
  styles: path.join(__dirname, '/src/styles/scss'),
  images: path.join(__dirname, '/src/images'),
  scripts: path.join(__dirname, '/src/scripts'),
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
  entry: [`${PATHS.scripts}/main.js`, `${PATHS.styles}/wb-styles.scss`],

  module: {
    rules: [
      {
        test: /\.html$|njk|nunjucks/,
        use: [
          { loader: 'html-loader', options: { minimize: true } },
          {
            loader: 'nunjucks-html-loader',
            options: {
              searchPaths: [...returnEntries(`${PATHS.templates}/**/`)],
            },
          },
        ],
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: `nunjucks-html-loader!${PATHS.templates}/index.njk`,
      filename: 'index.html',
      inject: 'body',
    }),
    new SvgSpriteHtmlWebpackPlugin({
      includeFiles: [`${PATHS.images}/icons/*.svg`],
    }),
  ],
}
